import getStdin from 'get-stdin';

import { Schemas, Schema, Path, ExpType, ExpSimpleType, ExpGenericType, ExpUnionType } from './firebase-bolt';
import { parse } from 'firebase-bolt';

function map<T1, T2>(dict: { [name: string]: T1 }, f: (value: T1, name: string) => T2) {
	const result: T2[] = [];
	for (const name in dict) {
		const value: T1 = dict[name];
		result.push(f(value, name));
	}
	return result;
}

const atomicTypes: { [type: string]: string } = {
	Any: 'any',
	Boolean: 'boolean',
	Number: 'number',
	Null: 'void',
	Object: 'Object',
	String: 'string',

	Integer: 'integer',
	Natural: 'natural',
	Percent: 'percent',
	Decimal: 'decimal',
};

// pattern detection

function isTypeNull(type: ExpType): boolean {
	if ('types' in type) return false;
	if ('params' in type) return false;
	return (type as ExpSimpleType).name == 'Null';
}

function derivesFromAtomic(type: ExpSimpleType): boolean {
	return type.name in atomicTypes && type.name !== 'Object';
}

function derivesFromMap(type: ExpGenericType): boolean {
	return type.name === 'Map';
}

function derivesFromEnum(type: ExpUnionType): boolean {
	return (
		type.types !== undefined &&
		type.types.length > 1 &&
		type.types.every(type => ((type as ExpSimpleType).name.match(/^_\w*_$/) ? true : false))
	);
}

function derivesFromUnion(type: ExpUnionType): boolean {
	return type.types !== undefined && type.types.length > 1;
}

// serialization

function serializeTypeName(name: string): string {
	if (name.match(/^_\w*_$/)) {
		return "'" + name.substr(1, name.length - 2) + "'";
	}
	return atomicTypes[name] || name;
}

function serializeSimpleType(type: ExpSimpleType): string {
	return serializeTypeName(type.name);
}

function serializeUnionType(type: ExpUnionType): string {
	const types = type.types.map(serialize);
	const uniqueTypes = [...new Set(types)];
	return uniqueTypes.filter(t => t !== 'void').join(' | ');
}

function serializeGenericType(type: ExpGenericType): string {
	return type.name === 'Map' ? `{ [key: string]: ${serialize(type.params[1])} }` : serializeGenericTypeRef(type);
}

function serialize(type: ExpType): string {
	if ((type as ExpUnionType).types) {
		return serializeUnionType(type as ExpUnionType);
	}
	if ((type as ExpGenericType).params) {
		return serializeGenericType(type as ExpGenericType);
	}
	return serializeSimpleType(type as ExpSimpleType);
}

// ref serialization

function serializeSimpleTypeRef(type: ExpSimpleType): string {
	return type.name;
}

function serializeUnionTypeRef(type: ExpUnionType): string {
	return type.types.map(serialize).join(' | ');
}

function serializeGenericTypeRef(type: ExpGenericType): string {
	const typeName = serializeTypeName(type.name);
	const params = type.params.map(serialize).join(', ');
	return `${typeName}<${params}>`;
}

function serializeRef(type: ExpType): string {
	if ((type as ExpUnionType).types) {
		throw new Error('Unable to serialize union type');
	}
	if ((type as ExpGenericType).params) {
		return serializeGenericTypeRef(type as ExpGenericType);
	}
	return serializeSimpleTypeRef(type as ExpSimpleType);
}

// auxiliary

function isNullableProperty(type: ExpType): boolean {
	if ('types' in type) {
		const types = (type as ExpUnionType).types;
		return types.some(isTypeNull);
	}
	return false;
}

function genericParams(schema: Schema): string {
	if (schema.params && schema.params.length > 0) {
		return `<${schema.params.join(', ')}>`;
	}
	return '';
}

function derivesTypeDecl(schema: Schema): string {
	const type = serializeRef(schema.derivedFrom);
	if (type !== 'Object') return `${type} & `;
	return '';
}

function derivesInterfaceDecl(schema: Schema): string {
	const type = serializeRef(schema.derivedFrom);
	if (type !== 'Object') return `extends ${type} `;
	return '';
}

function unquote(name: string): string {
	if (name.match(/^_\w+_$/)) return name.substr(1, name.length - 2);
	return name;
}

function quote(name: string): string {
	if (name.match(/^\w+$/)) return name;
	return "'" + name + "'";
}

function serializeSchema(name: string, schema: Schema): string {
	if (derivesFromMap(schema.derivedFrom as ExpGenericType)) {
		return `export type ${name} = ${serializeGenericType(schema.derivedFrom as ExpGenericType)};`;
	}
	if (derivesFromUnion(schema.derivedFrom as ExpUnionType) && Object.keys(schema.properties).length == 0) {
		return `export type ${name} = ${serializeUnionTypeRef(schema.derivedFrom as ExpUnionType)};`;
	}
	if (derivesFromAtomic(schema.derivedFrom as ExpSimpleType)) {
		return '';
		// return `export type ${name} = ${serializeSimpleType(schema.derivedFrom as ExpSimpleType)};`;
	}
	if (schema.params && schema.params.includes(serializeRef(schema.derivedFrom))) {
		return `export type ${name}${genericParams(schema)} = ${derivesTypeDecl(schema)}{
${map(schema.properties, (prop, name) => `	${quote(name)}${isNullableProperty(prop) ? '?' : ''}: ${serialize(prop)};`).join('\n')}
};`;
	}
	return `export interface ${name}${genericParams(schema)} ${derivesInterfaceDecl(schema)}{
${map(schema.properties, (prop, name) => `	${quote(name)}${isNullableProperty(prop) ? '?' : ''}: ${serialize(prop)};`).join('\n')}
}`;
}

function generate(schemas: Schemas, paths: Path[]): string {
	for (const name in schemas) {
		const schema = schemas[name];
		const type = schema.derivedFrom as ExpSimpleType;
		if (type.name && derivesFromAtomic(type)) {
			if (!(name in atomicTypes)) {
				atomicTypes[name] = serializeTypeName(type.name);
			}
		}
	}
	const imports = [].join('\n');
	const types = map(schemas, (schema, name) => serializeSchema(name, schema))
		.join('\n\n')
		.trim();
	return (imports + '\n\n' + types).replace(/\n{2,}/g, '\n\n');
}

(async () => {
	try {
		const source = await getStdin();
		if (!source) throw new Error('No input file');
		const { schema, paths } = parse(source);
		process.stdout.write(generate(schema, paths));
	} catch (e) {
		process.stderr.write(e.message + '\n');
		process.exit(1);
	}
})();
