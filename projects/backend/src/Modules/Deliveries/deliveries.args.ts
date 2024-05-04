import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class GetDeliveryOptions {
	@ApiProperty({ description: 'address zipcode' })
	@IsNotEmpty()
	@IsString()
	zipCode: string;

	@ApiProperty({ description: 'total value of order' })
	@Type(() => Number)
	@IsNumber()
	@IsNotEmpty()
	total: number;

	@IsOptional()
	@IsString()
	coupon?: string;
}
