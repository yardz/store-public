/* eslint-disable max-lines */
import { IsNotEmpty, IsNumber, Min, IsOptional, IsString, Length, ValidateNested, IsEmail, Max, IsBoolean } from 'class-validator';
import { PaginationFilter } from '@Utils/Args/PaginationFilter';
import { Type } from 'class-transformer';
import { PersonalData as IPersonalData } from '@lab77store/domain';
import { IsCpf } from '@Utils/Validators/cpf.validator';
import dayjs from 'dayjs';
import { ApiProperty } from '@nestjs/swagger';

export { ID } from '@Utils/Args/ID.args';

class PersonalData implements IPersonalData {
	@ApiProperty({
		description: 'user first name',
		type: String,
		example: 'Lucita',
	})
	@IsNotEmpty()
	@IsString()
	firstName: string;

	@ApiProperty({
		description: 'user last name(s)',
		type: String,
		example: 'de Aragón',
	})
	@IsNotEmpty()
	@IsString()
	lastName: string;

	@ApiProperty({
		description: 'email',
		type: String,
		example: 'lucita.lasombra@saba.com',
	})
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email: string;

	@ApiProperty({
		description: 'cellphone',
		type: String,
		example: '(31)99999-9999',
	})
	@IsNotEmpty()
	@IsString()
	@Length(14, 14)
	phone: string; // (31)99181-6521

	@ApiProperty({
		description: 'valid cpf number',
		type: String,
		example: '999.999.999-99',
	})
	@IsNotEmpty()
	@IsString()
	@Length(14, 14)
	@IsCpf()
	document: string; // cpf com separadores

	@ApiProperty({
		description: 'valid timestemp for age',
		type: Number,
		example: 961718400000,
	})
	@IsNotEmpty()
	@IsNumber()
	@Min(-1577923200000)
	@Max(dayjs().unix() * 1000)
	birthday: number;

	@ApiProperty({
		description: 'sex',
		type: String,
		enum: ['male', 'female'],
		example: 'female',
	})
	@IsOptional()
	@IsString()
	sex?: 'male' | 'female';

	@ApiProperty({
		description: 'newsletter',
		type: Boolean,
		example: true,
	})
	@IsOptional()
	@IsBoolean()
	newsletter?: boolean;
}

class BodyMeasurements {
	@IsOptional()
	@IsString()
	OpenShoulders?: string;

	@IsOptional()
	@IsString()
	waistline?: string;

	@IsOptional()
	@IsString()
	collar?: string;

	@IsOptional()
	@IsString()
	bust?: string;

	@IsOptional()
	@IsString()
	hip?: string;

	@IsOptional()
	@IsString()
	sleeveLength?: string;

	@IsOptional()
	@IsString()
	chest?: string;

	@IsOptional()
	@IsString()
	crotchStrap?: string;

	@IsOptional()
	@IsString()
	shirtLength?: string;
}

export class SaveUserPersonalData {
	@ApiProperty({
		description: 'User Personal Data',
		type: PersonalData,
	})
	@IsNotEmpty()
	@ValidateNested()
	@Type(() => PersonalData)
	personalData: PersonalData;
}
export class RegisterUser extends SaveUserPersonalData {
	@ApiProperty({
		description: 'User password',
		type: String,
		example: '123456',
	})
	@IsNotEmpty()
	@IsString()
	@Length(6, 30)
	password: string;
}

export class ResetPassword {
	@ApiProperty({
		description: 'Email or CPF',
		type: String,
		example: '111.111.111-11',
	})
	@IsNotEmpty()
	@IsString()
	emailOrCpf: string;
}

export class ResetPasswordAdmin {
	@ApiProperty({
		description: 'email',
		type: String,
		example: 'lucita.lasombra@saba.com',
	})
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email: string;
}

export class UID {
	@ApiProperty({
		description: 'UID',
	})
	@IsString()
	@IsNotEmpty()
	uid: string;
}

export class SaveBodyMeasurements {
	@IsNotEmpty()
	@ValidateNested()
	@Type(() => BodyMeasurements)
	bodyMeasurements: BodyMeasurements;
}

export class AuthDocument {
	@IsNotEmpty()
	@IsString()
	@Length(14, 14)
	@IsCpf()
	document: string; // cpf com separadores
}

export class ListFilter extends PaginationFilter {
	@ApiProperty({
		description: 'UID',
	})
	@IsOptional()
	@IsString()
	uid?: string;

	@ApiProperty({
		description: 'Email',
	})
	@IsOptional()
	@IsString()
	email?: string;

	@ApiProperty({
		description: 'First Name',
	})
	@IsOptional()
	@IsString()
	firstName?: string;

	@IsOptional()
	@IsString()
	document?: string;
}
