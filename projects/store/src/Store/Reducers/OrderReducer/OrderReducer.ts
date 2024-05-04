/* eslint-disable no-param-reassign */
import { CartItem, OrderDelivery, OrderCoupon } from '@lab77store/database';
import { PaymentMethod, UserAddress } from '@lab77store/domain';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@App/Store';
import NP from 'number-precision';

import * as asyncActions from './asyncActions';

import * as orderResume from './orderResume';

interface Order {
	items: {
		quantity: number;
		price: number;
	};
	coupon?: OrderCoupon;
	delivery?: OrderDelivery;
	address?: UserAddress;
	resume: {
		originalItemsPrice: number; // preço dos itens sem desconto
		discountItemsPrice: number; // preço dos itens após o desconto
		deliveryPrice: number; // custo do frete
		discountPrice: number; // valor do desconto
		originalTotalPrice: number; // valor da compra sem desconto
		total: number; // valor da compra
		maxInstallments: number;
	};
	paymentMethod?: PaymentMethod;
	note?: string;
}
const initialState: Order = {
	items: {
		quantity: 0,
		price: 0,
	},
	resume: {
		originalItemsPrice: 0,
		discountItemsPrice: 0,
		deliveryPrice: 0,
		discountPrice: 0,
		originalTotalPrice: 0,
		total: 0,
		maxInstallments: 1,
	},
};

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		setItems: (state, action: PayloadAction<{ items: CartItem[] }>) => {
			const itemsPrice = action.payload.items.reduce((total, item) => NP.plus(total, NP.times(item.price, item.quantity)), 0);
			const itemsQuantity = action.payload.items.reduce((total, item) => total + item.quantity, 0);
			state.items = { price: itemsPrice, quantity: itemsQuantity };
		},

		clear: () => initialState,

		setCoupon: (state, action: PayloadAction<{ coupon?: OrderCoupon }>) => {
			if (!action.payload.coupon) {
				state.coupon = undefined;
				return state;
			}
			state.coupon = action.payload.coupon;
		},

		setDelivery: (state, action: PayloadAction<{ delivery?: OrderDelivery }>) => {
			if (!action.payload.delivery) {
				state.delivery = undefined;
				return state;
			}
			state.delivery = action.payload.delivery;
			if (action.payload.delivery.zipCode !== state.address?.zipCode) {
				state.address = undefined;
			}
		},

		setAddress: (state, action: PayloadAction<{ address?: UserAddress }>) => {
			if (!action.payload.address) {
				state.address = undefined;
				return state;
			}
			state.address = action.payload.address;
			if (state.delivery && action.payload.address.zipCode !== state.delivery.zipCode) {
				state.delivery.zipCode = action.payload.address.zipCode;
			}
		},

		setPaymentMethod: (state, action: PayloadAction<{ paymentMethod?: PaymentMethod }>) => {
			if (!action.payload.paymentMethod) {
				state.paymentMethod = undefined;
				return state;
			}
			state.paymentMethod = action.payload.paymentMethod;
		},

		setNote: (state, action: PayloadAction<{ note?: string }>) => {
			if (!action.payload.note) {
				state.note = undefined;
				return state;
			}
			state.note = action.payload.note;
		},

		resume: state => {
			const originalItemsPrice = orderResume.originalItemsPrice({ items: state.items });
			const deliveryPrice = orderResume.deliveryPrice({ delivery: state.delivery });
			const discountItemsPrice = orderResume.discountItemsPrice({ items: state.items, coupon: state.coupon });
			const originalTotalPrice = orderResume.originalTotalPrice({ deliveryPrice, originalItemsPrice });
			const discountPrice = orderResume.discountPrice({ discountItemsPrice, originalItemsPrice });
			const total = orderResume.orderTotal({ discountItemsPrice, deliveryPrice });
			const maxInstallments = orderResume.maxInstallments({ discountItemsPrice });

			state.resume = {
				originalItemsPrice,
				discountItemsPrice,
				originalTotalPrice,
				discountPrice,
				deliveryPrice,
				total,
				maxInstallments,
			};
		},
	},
});

export const orderActions = { ...orderSlice.actions, ...asyncActions };
export const orderSelector = {
	items: (state: RootState) => state.order.items,
	coupon: (state: RootState) => state.order.coupon,
	delivery: (state: RootState) => state.order.delivery,
	address: (state: RootState) => state.order.address,
	resume: (state: RootState) => state.order.resume,
	paymentMethod: (state: RootState) => state.order.paymentMethod,
	note: (state: RootState) => state.order.note,
	order: (state: RootState) => state.order,
};
