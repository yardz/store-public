import { Query, Controller, Get, BadRequestException, Headers, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartsService } from '@Modules/Carts/carts.service';
import { getAddress } from '@Utils/functions/getAddress';
import firebase from 'firebase-admin';
import { getPreOrderAdditionalTime } from '@Utils/functions/getPreOrderAdditionalTime';
import to from 'await-to-js';

import { DeliveriesService } from './deliveries.service';
import * as ARGS from './deliveries.args';

@ApiTags('Deliveries')
@Controller('deliveries')
export class DeliveriesController {
	constructor(
		private readonly logger: Logger,
		private readonly deliveriesService: DeliveriesService,
		private readonly cartsService: CartsService,
	) {
		this.logger.setContext('DeliveriesController');
	}

	@Get('/')
	async getDeliveryOptions(@Query() { total, zipCode, coupon }: ARGS.GetDeliveryOptions, @Headers('Authorization') auth?: string) {
		let preOrderAdditionalTime: number | undefined;

		const [, user] = await to(firebase.auth().verifyIdToken(auth?.split(' ')[1] || ''));
		if (user) {
			const cartItems = await this.cartsService.getCartItems({ uid: user.uid });
			preOrderAdditionalTime = getPreOrderAdditionalTime({ products: cartItems.map(item => item.product) });
		}

		const [err, address] = await to(getAddress({ zipCode }));
		if (err || !address) {
			throw new BadRequestException('Invalid CEP');
		}
		return this.deliveriesService.getDeliveryOptions({ address, items: [{ price: total }], coupon, preOrderAdditionalTime });
	}
}
