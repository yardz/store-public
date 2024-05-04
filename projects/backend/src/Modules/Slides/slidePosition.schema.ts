import { SlidePosition } from '@lab77store/domain';
import * as mongoose from 'mongoose';

export interface SlidePositionDocument extends Omit<SlidePosition, '_id'>, mongoose.Document {
	_id: mongoose.ObjectId | string;
	name: string;
	type: 'carousel' | 'banner';
	rows: { mobile: number; desktop: number };
	createdAt: string;
	updatedAt: string;
}

export const SlidePositionSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true, index: true },
		type: { type: String, required: true, index: true, enum: ['carousel', 'banner'] },
		rows: {
			mobile: { type: Number, required: true, min: 1, max: 12 },
			desktop: { type: Number, required: true, min: 1, max: 12 },
		},
	},
	{ timestamps: true },
);

export const slidePositionMapper = (input: SlidePositionDocument): SlidePosition => {
	const { _id, name, type, rows } = input;
	return { _id: _id.toString(), name, type, rows };
};
