import * as mongoose from 'mongoose';
import { ImageSchemaBothRequired } from '@App/Utils/RawSchemas/Image.schema';
import { ProductAdmin, ProductCatalogImages } from '@lab77store/domain';

export interface ProductDocument extends mongoose.Document {
	_id: mongoose.ObjectId | string;
	active: boolean;
	name: string;
	ref: string;
	legacyId: number;
	order: number;
	categories: (string | mongoose.ObjectId)[];
	variations: {
		_id: mongoose.ObjectId | string;
		legacyId: number;
	}[];
	catalogImages: ProductCatalogImages;
	createdAt: string;
	updatedAt: string;
}

const CatalogImage = {
	cover: { type: ImageSchemaBothRequired, required: true },
	hover: { type: ImageSchemaBothRequired, required: false },
};

export const ProductSchema = new mongoose.Schema(
	{
		active: { type: Boolean, index: true, default: false },
		name: { type: String, required: true },
		ref: { type: String, required: true },
		legacyId: { type: Number, required: true, index: true },
		deleted: { type: Boolean, required: false, default: false, index: true }, // esse campo é para suportar a migração. No futuro será removido
		order: { type: Number, required: true, index: true },
		categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: false }],
		variations: [
			{
				_id: { type: mongoose.Schema.Types.ObjectId, required: true },
				legacyId: { type: Number, required: true, index: true },
			},
		],
		catalogImages: {
			default: CatalogImage,
			male: { type: CatalogImage, required: false },
			female: { type: CatalogImage, required: false },
		},
	},
	{ timestamps: true },
);

export const productAdminMapper = (input: ProductDocument): ProductAdmin => {
	const { _id, name, ref, order, active, catalogImages } = input;
	const variations = input.variations.map(v => ({ _id: v._id.toString() }));
	const categories = input.categories.map(c => c.toString());
	return { _id: _id.toString(), name, ref, order, categories, active, variations, catalogImages };
};
