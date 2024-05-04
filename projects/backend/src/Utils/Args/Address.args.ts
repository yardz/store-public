import { IsNotEmpty, IsOptional, IsString, Length, IsIn } from 'class-validator';
import { Address as IAddress } from '@lab77store/domain';

const states = [
	'AC',
	'AL',
	'AP',
	'AM',
	'BA',
	'CE',
	'DF',
	'ES',
	'GO',
	'MA',
	'MT',
	'MS',
	'MG',
	'PA',
	'PB',
	'PR',
	'PE',
	'PI',
	'RJ',
	'RN',
	'RS',
	'RO',
	'RR',
	'SC',
	'SP',
	'SE',
	'TO',
];

export class Address implements IAddress {
	@IsNotEmpty()
	@IsString()
	zipCode: string;

	@IsNotEmpty()
	@IsString()
	country: string;

	@IsNotEmpty()
	@IsString()
	@IsIn(states)
	@Length(2, 2)
	state: string;

	@IsNotEmpty()
	@IsString()
	city: string;

	@IsNotEmpty()
	@IsString()
	neighborhood: string;

	@IsNotEmpty()
	@IsString()
	street: string;

	@IsNotEmpty()
	@IsString()
	number: string;

	@IsOptional()
	@IsString()
	complement?: string;
}
