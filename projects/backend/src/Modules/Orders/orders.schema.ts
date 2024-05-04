import { OrderDelivery } from '@lab77store/domain';
import * as mongoose from 'mongoose';

export interface OrderDocument extends mongoose.Document {
	_id: mongoose.ObjectId | string;
	uid: string;
	legacyId: number;
	items: { product: mongoose.ObjectId | string; variation: mongoose.ObjectId | string; legacyId: number }[];
	delivery: OrderDelivery;
	createdAt: string;
	updatedAt: string;
}

const OrderDeliverySchema = {
	recipientName: { type: String, required: true, index: false },
	price: { type: Number, required: true },
	deliveryTime: { type: Number, required: true },
	method: { type: String, required: true },
	address: {
		zipCode: { type: String, required: true, index: true },
		country: { type: String, required: true, index: false },
		state: { type: String, required: true, index: false },
		city: { type: String, required: true, index: false },
		neighborhood: { type: String, required: true, index: false },
		street: { type: String, required: true, index: false },
		number: { type: String, required: true, index: false },
		complement: { type: String, required: false, index: false },
	},
	deliveryDate: { type: Number, required: false },
	alerts: [
		{
			order: { type: String, required: true },
			content: { type: String, required: true },
			type: { type: String, required: true },
		},
	],
};

export const OrderSchema = new mongoose.Schema(
	{
		legacyId: { type: Number, required: true, index: true, unique: true },
		uid: { type: String, required: true, index: true },
		items: [
			{
				product: { type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
				variation: { type: mongoose.Schema.Types.ObjectId, required: true },
				legacyId: { type: Number, required: true },
			},
		],
		delivery: { type: OrderDeliverySchema, required: true },
	},
	{ timestamps: true },
);
