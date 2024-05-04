import fs from 'fs';
import { set } from 'lodash';
import modules from '../permissions.modules.json';

interface Permissions {
	[key: string]: { [key: string]: boolean };
}

const generatePermissions = (modules: string[]) => {
	const permissions: Permissions = {};
	modules.forEach(module => {
		set(permissions, module, { create: false, update: false, delete: false });
	});
	return permissions;
};

const generatePermissionsInterface = (permissions: Permissions) => {
	const getAbilities = (abilities: { [key: string]: boolean }) => {
		return Object.keys(abilities)
			.map(ability => `${ability}: boolean; `)
			.join('');
	};

	let interfacePermissions = 'export interface Permissions {\n';

	Object.keys(permissions).forEach(permission => {
		interfacePermissions += `\t${permission}: { ${getAbilities(permissions[permission])}};\n`;
	});

	interfacePermissions += '}';
	return interfacePermissions;
};

export const getPermissions = (path: string) => {
	const permissions = generatePermissions(modules);
	const interfacePermissions = generatePermissionsInterface(permissions);
	fs.appendFileSync(process.cwd() + '/src/database.interfaces.ts', '\n' + interfacePermissions);
	fs.writeFileSync(process.cwd() + '/lib/permissions.json', JSON.stringify(permissions));
};
