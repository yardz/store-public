import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class GetCoupon {
	@ApiProperty({ description: 'Coupon code' })
	@IsNotEmpty()
	@IsString()
	coupon: string;
}
