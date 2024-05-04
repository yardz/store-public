import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsIn, Min, IsInt, Max, IsNumber, IsCreditCard, NotContains, IsMongoId } from 'class-validator';
import dayjs from 'dayjs';

export class GetPayments {
	@ApiProperty({
		description: '_id of order',
	})
	@IsString()
	@IsMongoId()
	@IsNotEmpty()
	order: string;
}

const year = Number(dayjs().format('YYYY'));
export class CardPayment {
	@IsNotEmpty()
	@IsString()
	@IsIn(['credit card'])
	method: 'credit card';

	@IsNotEmpty()
	@NotContains(' ', { message: ({ property }) => `${property} should not contain spaces` })
	@IsString()
	@IsCreditCard()
	cardNumber: string;

	@IsNotEmpty()
	@IsString()
	holderName: string;

	@IsNotEmpty()
	@Type(() => Number)
	@IsNumber()
	@IsInt()
	@Min(1)
	@Max(12)
	expirationMonth: number;

	@IsNotEmpty()
	@Type(() => Number)
	@IsNumber()
	@IsInt()
	@Min(year)
	@Max(year + 8)
	expirationYear: number;

	@IsNotEmpty()
	@IsString()
	securityCode: string;

	@IsNotEmpty()
	@Type(() => Number)
	@IsNumber()
	@IsInt()
	@Min(1)
	@Max(12)
	installments: number;
}
