import * as mongoose from 'mongoose';

export interface PaymentDocument extends mongoose.Document {
	_id: mongoose.ObjectId | string;
	legacyId: number;
	order: mongoose.ObjectId | string;
	price: number;
	createdAt: string;
	updatedAt: string;
}

export const PaymentSchema = new mongoose.Schema(
	{
		legacyId: { type: Number, required: true, index: true, unique: true },
		order: { type: mongoose.Schema.Types.ObjectId, ref: 'Orders', required: true },
		uid: { type: String, required: true, index: true },
		price: { type: Number, required: true },
	},
	{ timestamps: true },
);
