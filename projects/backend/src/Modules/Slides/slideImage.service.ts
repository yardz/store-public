import { Injectable, ConflictException, Logger } from '@nestjs/common';
import { SlideImage } from '@lab77store/domain';
import { InjectModel } from '@nestjs/mongoose';
import to from 'await-to-js';
import { FilterQuery, Model, ObjectId } from 'mongoose';
import { SlideImageDocument, slideImageMapper } from './slideImage.schema';

@Injectable()
export class SlideImageService {
	constructor(@InjectModel('SlideImages') private slideImagesModel: Model<SlideImageDocument>, private readonly logger: Logger) {
		this.logger.setContext('SlideImageService');
	}

	async create({ slideImage }: { slideImage: Omit<SlideImage, '_id'> }) {
		const [err, res] = await to(new this.slideImagesModel(slideImage).save());
		if (err || !res) {
			throw new ConflictException(err?.message);
		}
		return slideImageMapper(res);
	}

	async update({ slideImage, _id }: { slideImage: Partial<Omit<SlideImage, '_id'>>; _id: string | ObjectId }) {
		const doc = await this.slideImagesModel.replaceOne({ _id }, { ...slideImage, _id }, { upsert: false });
		if (doc) return slideImageMapper(doc);
	}

	async delete({ _id }: { _id: string | ObjectId }): Promise<SlideImage | void> {
		const doc = await this.slideImagesModel.findByIdAndDelete(_id);
		if (doc) return slideImageMapper(doc);
	}

	async find({ filter }: { filter: FilterQuery<SlideImageDocument> }): Promise<SlideImage[]> {
		const list = await this.slideImagesModel.find(filter).sort({ slidePosition: 1, updatedAt: 1, _id: 1 });
		return list.map(slideImageMapper);
	}

	async findOne(filter: FilterQuery<SlideImageDocument>): Promise<SlideImage | void> {
		const document = await this.slideImagesModel.findOne(filter);
		if (document) return slideImageMapper(document);
	}
}
