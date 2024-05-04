/* eslint-disable max-lines */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AddressLegacyModel as Address } from './address.legacy.types';
import { CustumerLegacyModel as Custumer } from './custumer.legacy.types';
import { DeliveryLegacyModel as Delivery } from './delivery.legacy.types';
import { OrderItemsLegacyModel as OrderItem } from './order-items.legacy.types';
import { OrderLegacyModel as Order } from './order.legacy.types';
import { PaymentLegacyModel as Payment } from './payment.legacy.types';
import { StatusLegacyModel as Status } from './status.legacy.types';
import { VariationLegacyModel as Variation } from './variations.legacy.types';
import { SizeLegacyModel as Size } from './size.legacy.types';
import { ModelLegacyModel as Model } from './model.legacy.types';
import { ColorLegacyModel as Color } from './color.legacy.types';
import { MatrixLegacyModel as Matrix } from './matrix.legacy.types';
import { FindAttributeOptions, WhereOptions } from 'sequelize';
import { DiscountsLegacyModel as Discounts } from './discounts.legacy.types';
import { ProductLegacyModel as Product } from './product.legacy.types';
import { AddressLegacyService, LegacyAddress } from './address.legacy.service';
import { CustumerLegacyService } from './custumer.legacy.service';
import dayjs from 'dayjs';

@Injectable()
export class OrderLegacyService {
	constructor(
		@InjectModel(Order)
		private readonly orderLegacyModel: typeof Order,
		@InjectModel(Discounts)
		private readonly discountLegacyModel: typeof Discounts,
		@InjectModel(Delivery)
		private readonly deliveryLegacyModel: typeof Delivery,
		@InjectModel(OrderItem)
		private readonly itemLegacyModel: typeof OrderItem,
		private readonly addressLegacyService: AddressLegacyService,
		private readonly custumerLegacyService: CustumerLegacyService,
	) {}

	/** @deprecated deve ser removido assim que possível */
	findOne(id: number) {
		return this.orderLegacyModel.findOne({
			include: [
				Custumer,
				Status,
				Discounts,
				{
					model: Delivery,
					include: [Address],
				},
				{
					model: OrderItem,
					include: [
						{
							model: Variation,
							include: [
								Product,
								{
									model: Matrix,
									include: [Size, Model, Color],
								},
							],
						},
					],
				},
			],
			where: {
				id,
			},
		});
	}

	/** @deprecated deve ser removido assim que possível */
	async create({
		coupon,
		order,
		address,
		delivery,
		items,
	}: {
		items: { productId: string; variationId: string; variationLegacyId: number; quantity: number; value: number }[];
		order: {
			clientId: number;
			valueDiscount: number; // pode ser 0
			valueItems: number;
			totalAmount: number;
			note?: string;
			packages: number;
			cpf: string;
		};
		coupon?: string;
		delivery: { method: string; name: string; lastName: string; value: number };
		address: LegacyAddress;
	}) {
		const addressId = await this.addressLegacyService.create(address);
		const deliveryId = (await this.deliveryLegacyModel.create({ ...delivery, addressId })).id;
		const discountId = coupon ? (await this.discountLegacyModel.findOne({ where: { code: coupon } }))?.id : undefined;
		const orderId = (
			await this.orderLegacyModel.create({
				...order,
				date: dayjs().format('YYYY-MM-DD'),
				statusId: 0,
				deliveryId,
				discountId,
				origem: 'site',
				createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
				updatedAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
			})
		).id;

		await this.custumerLegacyService.updateAddress({ id: order.clientId, addressId });

		const orderItems: {
			variation: string;
			product: string;
			legacyId: number;
		}[] = await Promise.all(
			items.map(async i => {
				const legacyId = (
					await this.itemLegacyModel.create({
						orderId,
						variationId: i.variationLegacyId,
						quantity: i.quantity,
						value: i.value,
						createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
						updatedAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
					})
				).id;
				return {
					variation: i.variationId,
					product: i.productId,
					legacyId,
				};
			}),
		);

		return { orderId, orderItems };
	}

	/** @deprecated deve ser removido assim que possível */
	findAll(where?: WhereOptions, limit?: number) {
		return this.orderLegacyModel.findAll({
			include: [
				Custumer,
				Status,
				Discounts,
				{
					model: Payment,
					include: [Status],
				},
				{
					model: Delivery,
					include: [Address],
				},
				{
					model: OrderItem,
					include: [
						{
							model: Variation,
							include: [
								{
									model: Matrix,
									include: [Size, Model, Color],
								},
							],
						},
					],
				},
			],
			where,
			limit,
		});
	}

	/** @deprecated deve ser removido assim que possível */
	findAllFields(where?: WhereOptions, attributes?: FindAttributeOptions) {
		return this.orderLegacyModel.findAll({
			where,
			attributes,
		});
	}
}
