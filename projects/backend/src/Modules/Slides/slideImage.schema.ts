import * as mongoose from 'mongoose';
import { SlideImage, ImageBothOptional, Publish } from '@lab77store/domain';
import { isWebUri } from 'valid-url';
import { PublishSchema } from '@App/Utils/RawSchemas/Publish.schema';
import { ImageSchemaBothOptional } from '@App/Utils/RawSchemas/Image.schema';

export interface SlideImageDocument extends mongoose.Document {
	_id: mongoose.ObjectId | string;
	name: string;
	image: ImageBothOptional;
	slidePosition: mongoose.ObjectId | string;
	url: string;
	publish: Publish;
	createdAt: string;
	updatedAt: string;
}

export const SlideImageSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, unique: true, index: true },
		slidePosition: { type: mongoose.Schema.Types.ObjectId, ref: 'SlidePositions', required: true },
		url: { type: String, required: false, validate: (url: string) => !url || isWebUri(url) },
		publish: PublishSchema,
		image: ImageSchemaBothOptional,
	},
	{ timestamps: true },
);

export const slideImageMapper = (input: SlideImageDocument): SlideImage => {
	const { _id, name, url, slidePosition, publish, image } = input;
	return { _id: _id.toString(), name, slidePosition: slidePosition.toString(), publish, url, image };
};
