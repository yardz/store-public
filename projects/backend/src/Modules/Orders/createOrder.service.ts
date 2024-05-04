/* eslint-disable max-lines */
import { Order, OrderDelivery, OrderItem, User, UserAddress } from '@lab77store/domain';
import { CartsService } from '@Modules/Carts/carts.service';
import { CouponsService } from '@Modules/Coupons/coupons.service';
import { DeliveriesService } from '@Modules/Deliveries/deliveries.service';
import { OrderLegacyService } from '@Modules/Legacy/order.legacy.service';
import { ProductsService } from '@Modules/Products/products.service';
import { UsersService } from '@Modules/Users/users.service';
import { AddressesService } from '@Modules/Addresses/addresses.service';
import { getPreOrderAdditionalTime } from '@Utils/functions/getPreOrderAdditionalTime';
import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import NP from 'number-precision';
import { mapCartItemsToOrderItems } from './functions';
import { OrderDocument } from './orders.schema';
import { OrdersService } from './orders.service';

@Injectable()
export class CreateOrdersService {
	constructor(
		@InjectModel('Orders') private ordersModel: Model<OrderDocument>,
		private readonly logger: Logger,
		private readonly cartsService: CartsService,
		private readonly couponsService: CouponsService,
		private readonly deliveriesService: DeliveriesService,
		private readonly orderLegacyService: OrderLegacyService,
		private readonly productsService: ProductsService,
		private readonly usersService: UsersService,
		private readonly ordersService: OrdersService,
		private readonly addressesService: AddressesService,
	) {
		this.logger.setContext('CreateOrdersService');
	}

	private async getDeliveryOption({
		items,
		uid,
		address,
		deliverySelected,
		coupon,
		preOrderAdditionalTime,
	}: {
		uid: string;
		items: OrderItem[];
		address: UserAddress;
		deliverySelected: string;
		coupon?: string;
		preOrderAdditionalTime?: number;
	}): Promise<OrderDelivery> {
		const deliveryOptions = await this.deliveriesService.getDeliveryOptions({ address, items, coupon, preOrderAdditionalTime });
		const deliveryOption = deliveryOptions.find(d => d._id === deliverySelected);
		if (!deliveryOption) {
			this.logger.error({
				message: 'Usuário tentou efetuar uma compra com um método de entrega inválido',
				uid,
				deliveryOptions,
				deliverySelected,
			});
			throw new BadRequestException('invalid delivery option');
		}
		return { recipientName: address.recipientName, ...deliveryOption };
	}

	/** @deprecated deve ser removido assim que possível */
	private async createOrderLegacy({
		items,
		user,
		deliveryPrice,
		note,
	}: {
		user: User;
		items: OrderItem[];
		deliveryPrice: number;
		note?: string;
	}): Promise<{
		clientId: number;
		valueDiscount: number; // pode ser 0
		valueItems: number;
		totalAmount: number;
		note?: string;
		packages: number;
		cpf: string;
	}> {
		const originalItemsPrice = items.reduce((total, orderItem) => total + orderItem.originalPrice, 0);
		const itensPrice = items.reduce((total, orderItem) => total + orderItem.price, 0);

		const userLegacyId = await this.usersService.getLegacyId({ uid: user.uid });
		if (!userLegacyId) {
			this.logger.error({ message: 'O usuário não possui um legacyId', uid: user.uid, user });
			throw new InternalServerErrorException('this user does not exist');
		}

		return {
			clientId: userLegacyId,
			valueDiscount: NP.minus(originalItemsPrice, itensPrice),
			valueItems: itensPrice,
			totalAmount: NP.plus(itensPrice, deliveryPrice),
			cpf: user.personalData.document,
			packages: 0,
			note,
		};
	}

	/** @deprecated deve ser removido assim que possível */
	private async createItemOrderLegacy({
		item: { price, productId, variationId },
		uid,
	}: {
		item: OrderItem;
		uid: string;
	}): Promise<{ productId: string; variationId: string; variationLegacyId: number; quantity: number; value: number }> {
		const variationLegacyId = await this.productsService.getVariationLegacyId({ productId, variationId });

		if (!variationLegacyId) {
			// esse erro nunca deveria acontecer, pois os itens do carrinho já vem validado.
			this.logger.error({ message: 'A variação selecionada pelo usuário na compra está incorreta', uid, productId, variationId });
			throw new InternalServerErrorException('Invalid product');
		}

		return {
			productId,
			variationId,
			variationLegacyId,
			quantity: 1,
			value: price,
		};
	}

	async create({
		uid,
		addressId,
		note,
		delivery,
		coupon,
	}: {
		addressId: string;
		uid: string;
		note?: string;
		delivery: string;
		coupon?: string;
	}): Promise<{ legacyId: number; order: Order }> {
		const user = await this.usersService.findOne({ uid });
		if (!user) {
			this.logger.error({ message: 'O usuário não está registrado no mongoDB', uid });
			throw new InternalServerErrorException('this user does not exist');
		}

		const address = await this.addressesService.findOne({ _id: addressId, uid });
		if (!address) {
			this.logger.error({ message: 'O usuário está tentando finalizar a compra com um endereço que não existe', uid, addressId });
			throw new InternalServerErrorException('this address does not exist');
		}

		const cartItems = await this.cartsService.getCartItems({ uid });
		if (cartItems.length === 0) {
			this.logger.error({ message: 'Usuário tentou efetuar uma compra com o carrinho vazio', uid });
			throw new BadRequestException('Empty cart');
		}

		const rawOrderItems = mapCartItemsToOrderItems({ cartItems });
		const preOrderAdditionalTime = getPreOrderAdditionalTime({ products: cartItems.map(item => item.product) });

		const items = await this.couponsService.applyCoupon({ items: rawOrderItems, coupon, uid });
		const deliveryOption = await this.getDeliveryOption({
			uid,
			address,
			items,
			deliverySelected: delivery,
			coupon,
			preOrderAdditionalTime,
		});

		const createOrderLegacy = await this.createOrderLegacy({
			items,
			user,
			note,
			deliveryPrice: deliveryOption.price,
		});
		const createItemsOrderLegacy = await Promise.all(items.map(item => this.createItemOrderLegacy({ item, uid })));

		this.logger.log({ message: 'Criando pedido no legacy', uid, createOrderLegacy, createItemsOrderLegacy });
		const { orderId, orderItems } = await this.orderLegacyService.create({
			order: createOrderLegacy,
			items: createItemsOrderLegacy,
			delivery: {
				method: deliveryOption.method,
				name: user.personalData.firstName,
				lastName: user.personalData.lastName,
				value: deliveryOption.price,
			},
			address,
			coupon,
		});

		this.logger.log({ message: 'Criando pedido no mongo', uid, mysqlOrderId: orderId, orderItems });
		await new this.ordersModel({
			uid,
			legacyId: orderId,
			items: orderItems,
			delivery: deliveryOption,
		}).save();

		const order = await this.ordersService.findOne({ legacyId: orderId });
		if (!order) {
			this.logger.error({ message: 'A ordem que acabou criada não existe', uid, orderId, orderItems, order });
			throw new InternalServerErrorException('this new order does not exist');
		}
		return { order, legacyId: orderId };
	}
}
