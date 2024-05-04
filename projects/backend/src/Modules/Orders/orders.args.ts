import { ValidateNested, IsOptional, IsMongoId, IsNotEmpty, IsString, IsNumber, Min, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { CardPayment } from '@Modules/Payments/payments.args';
import { PaginationFilter } from '@Utils/Args/PaginationFilter';
import { ApiProperty } from '@nestjs/swagger';

export { ID } from '@Utils/Args/ID.args';

export { PaginationFilter } from '@App/Utils/Args/PaginationFilter';

class CreateOrder {
	@IsNotEmpty()
	@IsMongoId()
	addressId: string;

	// TODO: No futuro também vai preciser ser um mongoID
	@IsNotEmpty()
	@IsString()
	delivery: string;

	@IsOptional()
	@IsString()
	coupon?: string;

	@IsOptional()
	@IsString()
	note?: string;
}

export class CreateOrderCreditCard extends CreateOrder {
	@IsNotEmpty()
	@ValidateNested()
	@Type(() => CardPayment)
	cardPayment: CardPayment;
}

export class ListFilter extends PaginationFilter {
	@ApiProperty({
		description: 'Id do Pedido',
	})
	@IsOptional()
	@IsString()
	orderId?: string;

	@ApiProperty({
		description: 'Legacy Id',
	})
	@IsOptional()
	@Type(() => Number)
	@IsNumber()
	@Min(1)
	@IsInt()
	legacyId?: number;

	@ApiProperty({
		description: 'E-mail',
	})
	@IsOptional()
	@IsString()
	email?: string;

	@ApiProperty({
		description: 'Cupom',
	})
	@IsOptional()
	@IsString()
	cupom?: string;

	@ApiProperty({
		description: 'Data da Compra',
	})
	@IsOptional()
	@Type(() => Number)
	@IsNumber()
	@Min(1)
	@IsInt()
	purshaseDate?: number;
}

export class CreateOrderBillet extends CreateOrder {}
