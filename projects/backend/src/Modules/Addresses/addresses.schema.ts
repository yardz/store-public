import * as mongoose from 'mongoose';
import { UserAddress } from '@lab77store/domain';

export interface AddressDocument extends Omit<UserAddress, '_id'>, mongoose.Document {
	_id: mongoose.ObjectId | string;
	uid: string;
	legacyId: number;
	createdAt: string;
	updatedAt: string;
}

export const AddressSchema = new mongoose.Schema(
	{
		uid: { type: String, required: true, index: true },
		legacyId: { type: Number, required: true, index: true },
		name: { type: String, required: true, index: false },
		recipientName: { type: String, required: true, index: false },
		zipCode: { type: String, required: true, index: true },
		country: { type: String, required: true, index: false },
		state: { type: String, required: true, index: false },
		city: { type: String, required: true, index: false },
		neighborhood: { type: String, required: true, index: false },
		street: { type: String, required: true, index: false },
		number: { type: String, required: true, index: false },
		complement: { type: String, required: false, index: false },
	},
	{ timestamps: true },
);

export const addressMapper = (input: AddressDocument): UserAddress => {
	const { _id, name, zipCode, country, state, city, neighborhood, street, number, complement, recipientName } = input;

	return {
		_id: _id.toString(),
		name,
		recipientName,
		zipCode,
		country,
		state,
		city,
		neighborhood,
		street,
		number,
		complement,
	};
};
