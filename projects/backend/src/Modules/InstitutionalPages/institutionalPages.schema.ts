import * as mongoose from 'mongoose';
import { InstitutionalPage } from '@lab77store/domain';
import { SEOSchema } from '@Utils/RawSchemas/SEO.schema';

export interface InstitutionalPageDocument extends Omit<InstitutionalPage, '_id' | 'content'>, mongoose.Document {
	_id: mongoose.ObjectId | string;
	name: string;
	ref: string;
	content: {
		text01?: string;
		slide01?: string;
		text02?: string;
		slide02?: string;
		text03?: string;
		slide03?: string;
	};
	seo?: {
		metaDescription?: string;
		textSeo?: string;
	};
	createdAt: string;
	updatedAt: string;
}

export const InstitutionalPageSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		ref: { type: String, required: true, unique: true, index: true },
		content: {
			text01: { type: String, required: false },
			slide01: { type: mongoose.Schema.Types.ObjectId, ref: 'SlidePositions' },
			text02: { type: String, required: false },
			slide02: { type: mongoose.Schema.Types.ObjectId, ref: 'SlidePositions' },
			text03: { type: String, required: false },
			slide03: { type: mongoose.Schema.Types.ObjectId, ref: 'SlidePositions' },
		},
		seo: SEOSchema,
	},
	{ timestamps: true },
);

export const InstitutionalPageMapper = (input: InstitutionalPageDocument): InstitutionalPage => {
	const { _id, name, ref, content, seo } = input.toObject();
	return { _id: _id.toString(), name, ref, content, seo };
};
