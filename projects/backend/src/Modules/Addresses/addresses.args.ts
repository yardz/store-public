import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { Address } from '@App/Utils/Args/Address.args';

export { ID } from '@Utils/Args/ID.args';

class UserAddress extends Address {
	@ApiProperty({
		description: 'Address Name',
		type: String,
		example: 'My Shelter',
	})
	@IsNotEmpty()
	@IsString()
	name: string;

	@ApiProperty({
		description: "Recipient's Name",
		type: String,
		example: 'Lucita',
	})
	@IsNotEmpty()
	@IsString()
	recipientName: string;

	@ApiProperty({
		description: "Users's default address",
		type: String,
		example: true,
	})
	@IsOptional()
	@IsBoolean()
	default?: boolean;
}
export class SaveAddress {
	@ApiProperty({
		description: 'Address',
		type: UserAddress,
	})
	@IsNotEmpty()
	@ValidateNested()
	@Type(() => UserAddress)
	address: UserAddress;
}
