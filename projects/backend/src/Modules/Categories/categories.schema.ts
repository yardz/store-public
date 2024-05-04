import * as mongoose from 'mongoose';
import { PublishSchema } from '@Utils/RawSchemas/Publish.schema';
import { SEOSchema } from '@Utils/RawSchemas/SEO.schema';
import { Publish, Category, ParentCategory } from '@lab77store/domain';

export interface CategoryDocument extends Omit<Category, '_id' | 'parent'>, mongoose.Document {
	_id: mongoose.ObjectId | string;
	name: string;
	ref: string;
	sort: number;
	publish: Publish;
	parent: mongoose.ObjectId | string;
	parents: ParentCategory[];
	seo?: {
		metaDescription?: string;
		textSeo?: string;
	};
	content?: {
		slide01?: string;
		text01?: string;
		slide02?: string;
		text02?: string;
	};
	password?: string;
	createdAt: string;
	updatedAt: string;
}

export const CategorySchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		ref: { type: String, required: true, unique: true, index: true },
		sort: { type: Number, required: true, index: true },
		password: { type: String, required: false },
		publish: PublishSchema,
		parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', index: true },
		parents: [
			{
				_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true },
				name: { type: String, required: true },
				ref: { type: String, required: true },
				sort: { type: Number, required: true },
			},
		],
		seo: SEOSchema,
		content: {
			slide01: { type: mongoose.Schema.Types.ObjectId, ref: 'SlidePositions', required: false },
			text01: { type: String, required: false },
			slide02: { type: mongoose.Schema.Types.ObjectId, ref: 'SlidePositions', required: false },
			text02: { type: String, required: false },
			slideFooter: { type: mongoose.Schema.Types.ObjectId, ref: 'SlidePositions', required: false },
		},
	},
	{ timestamps: true },
);

export const categoryMapper = (input: CategoryDocument): Category => {
	const { _id, name, ref, publish, seo, content, parent, sort, password, parents } = input.toObject();

	return {
		_id: _id.toString(),
		name,
		ref,
		publish,
		seo,
		content,
		parent: parent?.toString(),
		parents: parents?.map(p => ({ ...p, _id: p._id.toString() })),
		sort,
		password,
	};
};
