import * as mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document {
	_id: mongoose.ObjectId | string;
	uid: string;
	personalData: {
		email: string;
		document: string;
	};
	legacyId: number;
	createdAt: string;
	updatedAt: string;
}

export const UserSchema = new mongoose.Schema(
	{
		uid: { type: String, unique: true, required: true, index: true },
		personalData: {
			email: { type: String, unique: true, required: true, index: true },
			document: { type: String, unique: true, required: true, index: true },
		},

		legacyId: { type: Number, unique: true, required: true, index: true },
	},
	{ timestamps: true },
);
