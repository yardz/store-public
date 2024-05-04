import { OrderLegacyService } from '@Modules/Legacy/order.legacy.service';
import { OrderLegacyModel } from '@Modules/Legacy/order.legacy.types';
import { OrderDocument } from '@Modules/Orders/orders.schema';
import { ProductDocument } from '@Modules/Products/products.schema';
import { UserDocument } from '@Modules/Users/users.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { chunk } from 'lodash';
import { Model, Schema } from 'mongoose';
import { Op } from 'sequelize';
// import dayjs from 'dayjs';

interface OrderImportationHydrated {
	uid: string;
	legacyId: number;
	items: { product: string | Schema.Types.ObjectId; variation: string | Schema.Types.ObjectId }[];
}

@Injectable()
export class OrdersImportationService {
	constructor(
		@InjectModel('Orders') private ordersModel: Model<OrderDocument>,
		@InjectModel('Products') private productsModel: Model<ProductDocument>,
		@InjectModel('Users') private usersModel: Model<UserDocument>,
		private readonly orderLegacyService: OrderLegacyService,
	) {}

	private hydrateOrderImportation(
		orderLegacy: OrderLegacyModel,
		users: UserDocument[],
		products: ProductDocument[],
	): OrderImportationHydrated {
		const legacyId = orderLegacy.id;
		const user = users.find(u => u.legacyId === orderLegacy.client.id);
		const uid = user?.uid || '';
		const items = orderLegacy.items.map(item => {
			const productMongoDb = products.find(p => p.legacyId === item.variation.productId);
			const variationFound = productMongoDb?.variations.find(variation => variation.legacyId === item.variation.id);

			return {
				legacyId: item.id,
				product: productMongoDb?._id || '',
				variation: variationFound?._id || '',
			};
		});
		return {
			uid,
			legacyId,
			items,
		};
	}

	async importOrders() {
		const usersMongoDb = await this.usersModel.find();
		const productsMongoDb = await this.productsModel.find();
		let insert: number;
		let total = 0;
		const limit = 1000;
		// const start = dayjs().unix();

		do {
			insert = 0;
			// eslint-disable-next-line no-await-in-loop
			const existingOrdens = (await this.ordersModel.find().select('legacyId')).map(order => order.legacyId);
			// eslint-disable-next-line no-await-in-loop
			const legacyOrders: OrderLegacyModel[] = await this.orderLegacyService.findAll(
				{
					id: {
						[Op.notIn]: existingOrdens,
					},
				},
				limit,
			);
			const chunkLegacyOrders = chunk(legacyOrders, 100);
			for (const legacyOrdersList of chunkLegacyOrders) {
				const legacyOrdershydrated = legacyOrdersList.map(orderLegacy =>
					this.hydrateOrderImportation(orderLegacy, usersMongoDb, productsMongoDb),
				);
				// eslint-disable-next-line no-await-in-loop
				const result = await this.ordersModel.insertMany(legacyOrdershydrated);
				insert += result.length;
			}
			total += insert;
			// const time = dayjs().unix() - start;
			// console.log('Total: ', total);
			// console.log(`Spped: ${Math.round(total / time)}`);
		} while (insert > 0);

		return { insert: total };
	}
}
