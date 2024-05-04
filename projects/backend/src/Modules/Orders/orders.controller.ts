import { Body, Controller, Get, NotFoundException, Param, Post, Query, Logger } from '@nestjs/common';
import { PaymentsCheckoutService } from '@Modules/Payments/payments.checkout.service';
import { CartsService } from '@Modules/Carts/carts.service';
import { OrdersService } from './orders.service';

import * as ARGS from './orders.args';
import { Auth, Uid } from '@App/Utils/decorators';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrdersService } from './createOrder.service';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
	constructor(
		private readonly logger: Logger,
		private readonly ordersService: OrdersService,
		private readonly createOrdersService: CreateOrdersService,
		private readonly cartsService: CartsService,
		private readonly paymentsCheckoutService: PaymentsCheckoutService,
	) {
		this.logger.setContext('OrdersController');
	}

	@Auth()
	@Post('/credit-card')
	async createOrderCreditCard(@Uid() uid: string, @Body() payload: ARGS.CreateOrderCreditCard) {
		this.logger.log({ message: 'Iniciando um pagamento - Cartão de crédito', uid });
		const { cardPayment, ...orderData } = payload;
		const { order, legacyId } = await this.createOrdersService.create({ uid, ...orderData });
		this.logger.log({ message: 'Inicializando pagamento', order, legacyId, uid });
		await this.paymentsCheckoutService.createCreditCardPayment({ legacyId, uid, order, cardPayment });
		this.logger.log({ message: 'Pagamento realizado', uid });
		return { orderId: order._id };
	}

	@Auth()
	@Post('/billet')
	async createOrderBillet(@Uid() uid: string, @Body() payload: ARGS.CreateOrderBillet) {
		this.logger.log({ message: 'Iniciando um pagamento - Boleto', uid });
		const { order, legacyId } = await this.createOrdersService.create({ uid, ...payload });
		this.logger.log({ message: 'Inicializando pagamento', order, legacyId, uid });
		await this.paymentsCheckoutService.createBilletPayment({ legacyId, order, uid });
		this.logger.log({ message: 'Pagamento realizado', uid });
		return { orderId: order._id };
	}

	@Auth()
	@Get()
	async find(@Uid() uid: string, @Query() query: ARGS.ListFilter) {
		const filter = { uid };
		const { ...paginate } = query;
		return this.ordersService.find({ filter, paginate });
	}

	@Auth()
	@Get('/:_id')
	async findOne(@Param() { _id }: ARGS.ID, @Uid() uid: string) {
		const doc = await this.ordersService.findOne({ _id, uid });
		if (!doc) {
			throw new NotFoundException();
		}
		return doc;
	}
}
