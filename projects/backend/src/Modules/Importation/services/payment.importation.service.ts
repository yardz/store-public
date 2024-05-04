import { OrderLegacyService } from '@Modules/Legacy/order.legacy.service';
import { PaymentLegacyService } from '@Modules/Legacy/payment.legacy.service';
import { PaymentLegacyModel } from '@Modules/Legacy/payment.legacy.types';
import { OrderDocument } from '@Modules/Orders/orders.schema';
import { PaymentDocument } from '@Modules/Payments/payments.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { compact } from 'lodash';
import { Model } from 'mongoose';
import { Op } from 'sequelize';

interface PaymentImportationHydrated {
	legacyId: number;
	order: string;
	uid: string;
	price: number;
}

@Injectable()
export class PaymentsImportationService {
	constructor(
		@InjectModel('Orders') private ordersModel: Model<OrderDocument>,
		@InjectModel('Payments') private paymentsModel: Model<PaymentDocument>,
		private readonly paymentLegacyService: PaymentLegacyService,
		private readonly orderLegacyService: OrderLegacyService,
	) {}

	private async hydratePaymentImportation(payment: PaymentLegacyModel): Promise<PaymentImportationHydrated | null> {
		let originalSale: string | number = payment.originalSale || '';
		let price = 0;
		if (originalSale) {
			price = (await this.orderLegacyService.findAllFields({ id: Number(originalSale) }, ['totalAmount'])).pop()?.totalAmount || 0;
		}
		if (!originalSale) {
			const orderLegacy = (await this.orderLegacyService.findAllFields({ paymentId: payment.id }, ['id'])).pop();
			originalSale = orderLegacy?.id || '';
			price = orderLegacy?.totalAmount || 0;
		}
		if (!originalSale) {
			return null;
		}

		const order = await this.ordersModel.findOne({ legacyId: Number(originalSale) });
		return { legacyId: payment.id, order: order?._id.toString() || '', uid: order?.uid || '', price };
	}

	async importPayments() {
		const limit = 2000;
		let total = 0;
		let insert = 0;
		do {
			insert = 0;
			// eslint-disable-next-line no-await-in-loop
			const paymentsMongoDb = (await this.paymentsModel.find().select('legacyId')).map(p => p.legacyId);
			// eslint-disable-next-line no-await-in-loop
			const legacyPayments = await this.paymentLegacyService.findAll(
				{
					id: {
						[Op.notIn]: paymentsMongoDb,
					},
				},
				limit,
			);
			// eslint-disable-next-line no-await-in-loop
			const legacyPaymentshydrated = compact(await Promise.all(legacyPayments.map(payment => this.hydratePaymentImportation(payment))));
			// eslint-disable-next-line no-await-in-loop
			const result = await this.paymentsModel.insertMany(legacyPaymentshydrated);
			total += result.length;
			insert = result.length;
			// console.log({ total });
		} while (insert > 0);

		return { insert: total };
	}
}
