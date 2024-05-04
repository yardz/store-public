import { IsOptional, IsNotEmpty, IsString } from 'class-validator';

export class ContactMessage {
	@IsNotEmpty()
	@IsString()
	name: string;

	@IsOptional()
	@IsString()
	subject: string;

	@IsOptional()
	@IsString()
	email: string;

	@IsOptional()
	@IsString()
	message: string;
}
