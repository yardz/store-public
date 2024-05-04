import { registerDecorator, ValidationOptions } from 'class-validator';
import { cpf } from 'cpf-cnpj-validator';

export function IsCpf(validationOptions?: ValidationOptions) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (object: any, propertyName: string) => {
		const options: ValidationOptions = { message: `${propertyName} is an invalid cpf.`, ...validationOptions };
		registerDecorator({
			name: 'IsCpf',
			target: object.constructor,
			propertyName,
			options,
			validator: { validate: (value: string) => typeof value === 'string' && cpf.isValid(value) },
		});
	};
}
