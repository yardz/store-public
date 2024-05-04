import { Order, Pagination } from '@lab77store/domain';
import { OrderLegacyService } from '@Modules/Legacy/order.legacy.service';
import { ProductsService } from '@Modules/Products/products.service';
import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import dayjs from 'dayjs';
import { FilterQuery, Model } from 'mongoose';
import { createDeliveryObject, createOrderCuponObject, processOrderStatus } from './functions';
import { OrderDocument } from './orders.schema';
import NP from 'number-precision';
import { documentQueryPaginate } from '@Utils/functions/documentQueryPaginate';

@Injectable()
export class OrdersService {
	constructor(
		@InjectModel('Orders') private ordersModel: Model<OrderDocument>,
		private readonly logger: Logger,
		private readonly orderLegacyService: OrderLegacyService,
		private readonly productsService: ProductsService,
	) {
		this.logger.setContext('OrdersService');
	}

	/** @deprecated deve ser removido assim que possível */
	private async hidrateOrder(orderMongoDb: OrderDocument): Promise<Order> {
		const orderLegacy = await this.orderLegacyService.findOne(orderMongoDb.legacyId);
		if (!orderLegacy) {
			this.logger.error({ message: 'Erro ao tentar hidratar uma ordem. legacyId não existe', legacyId: orderMongoDb.legacyId });
			throw new InternalServerErrorException(`legacyId ${orderMongoDb.legacyId} does not exists`);
		}
		const productsLegacyId = orderLegacy.items.map(item => item.variation.product.id);
		const products = await this.productsService.find({ filter: { legacyId: { $in: productsLegacyId } } });

		const orderItems = orderMongoDb.items.map(item => {
			const product = products.find(p => p._id.toString() === item.product.toString());
			const variation = product?.variations.find(v => v._id.toString() === item.variation.toString());
			const itemLegacy = orderLegacy.items.find(i => i.id === item.legacyId);
			if (!product || !variation || !itemLegacy) {
				throw new InternalServerErrorException('order with invalid items');
			}
			return {
				productId: product._id.toString(),
				variationId: variation._id.toString(),
				name: product.name,
				originalPrice: product.price,
				price: itemLegacy.value,
				attributes: variation.attributes,
				photo: variation.cart || product.cart,
			};
		});
		const originalItemsPrice = orderItems.reduce((total, orderItem) => NP.plus(total, orderItem.originalPrice), 0);

		return {
			_id: orderMongoDb._id.toString(),
			uid: orderMongoDb.uid,
			packages: orderLegacy.packages,
			items: orderItems,
			originalItemsPrice,
			itemsPrice: orderLegacy.valueItems,
			originalOrderPrice: originalItemsPrice + orderLegacy.delivery.value,
			discountPrice: orderLegacy.valueDiscount,
			orderPrice: orderLegacy.totalAmount,
			delivery: orderMongoDb.delivery || createDeliveryObject(orderLegacy.delivery),
			cupon: createOrderCuponObject(orderLegacy.discount),
			status: processOrderStatus(orderLegacy.status),
			invoice: {
				number: '', // não tem no mysql
				url: '', // não tem no mysql
			},
			date: dayjs(orderLegacy.createdAt).unix() * 1000,
			approvedDate: orderLegacy.paidOut ? dayjs(orderLegacy.paidOut).unix() * 1000 : undefined,
			deliveryDateSent: orderLegacy.shippingDate ? dayjs(orderLegacy.shippingDate).unix() * 1000 : undefined,
			note: orderLegacy?.note,
		};
	}

	async find({ filter, paginate }: { filter: FilterQuery<OrderDocument>; paginate?: Pagination }): Promise<Order[]> {
		let documentQuery = this.ordersModel.find(filter).sort({ legacyId: -1, _id: 1 });
		if (paginate) {
			documentQuery = documentQueryPaginate(documentQuery, paginate);
		}
		const list = await documentQuery.exec();
		return Promise.all(list.map(i => this.hidrateOrder(i)));
	}

	async findOne(filter: FilterQuery<OrderDocument>): Promise<Order | void> {
		const document = await this.ordersModel.findOne(filter).exec();
		if (document) {
			return this.hidrateOrder(document);
		}
	}
	async count({ filter }: { filter: FilterQuery<OrderDocument> }): Promise<{ total: number }> {
		const total = await this.ordersModel.countDocuments(filter);
		return { total };
	}
}
