import { SlidePosition } from '@lab77store/domain';
import { Injectable, ConflictException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import to from 'await-to-js';
import { FilterQuery, Model, ObjectId } from 'mongoose';
import { SlidePositionDocument, slidePositionMapper } from './slidePosition.schema';

@Injectable()
export class SlidePositionService {
	constructor(@InjectModel('SlidePositions') private slidePositionsModel: Model<SlidePositionDocument>, private readonly logger: Logger) {
		this.logger.setContext('SlidePositionService');
	}

	async create({ slidePosition }: { slidePosition: Omit<SlidePosition, '_id'> }) {
		const [err, res] = await to(new this.slidePositionsModel(slidePosition).save());
		if (err || !res) {
			throw new ConflictException(err?.message);
		}
		return slidePositionMapper(res);
	}

	async update({ slidePosition, _id }: { slidePosition: Partial<Omit<SlidePosition, '_id'>>; _id: string | ObjectId }) {
		const doc = await this.slidePositionsModel.findByIdAndUpdate(_id, slidePosition);
		if (doc) return slidePositionMapper(doc);
	}

	async delete({ _id }: { _id: string | ObjectId }): Promise<SlidePosition | void> {
		const doc = await this.slidePositionsModel.findByIdAndDelete(_id);
		if (doc) return slidePositionMapper(doc);
	}

	async find({ filter }: { filter: FilterQuery<SlidePositionDocument> }): Promise<SlidePosition[]> {
		const list = await this.slidePositionsModel.find(filter).sort({ type: 1, name: 1, _id: 1 });
		return list.map(slidePositionMapper);
	}

	async findOne(filter: FilterQuery<SlidePositionDocument>): Promise<SlidePosition | void> {
		const document = await this.slidePositionsModel.findOne(filter);
		if (document) return slidePositionMapper(document);
	}
}
