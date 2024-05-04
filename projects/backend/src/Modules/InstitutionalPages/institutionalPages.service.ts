import { InstitutionalPage, Pagination } from '@lab77store/domain';
import { Injectable, ConflictException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import to from 'await-to-js';
import { FilterQuery, Model, ObjectId } from 'mongoose';
import { InstitutionalPageDocument, InstitutionalPageMapper } from './institutionalPages.schema';
import { documentQueryPaginate } from '@Utils/functions/documentQueryPaginate';

@Injectable()
export class InstitutionalPagesService {
	constructor(
		@InjectModel('InstitutionalPages') private InstitutionalPagesModel: Model<InstitutionalPageDocument>,
		private readonly logger: Logger,
	) {
		this.logger.setContext('InstitutionalPagesService');
	}

	async create({ institutionalPage }: { institutionalPage: Omit<InstitutionalPage, '_id'> }) {
		const [err, res] = await to(new this.InstitutionalPagesModel(institutionalPage).save());
		if (err || !res) {
			throw new ConflictException(err?.message);
		}
		return InstitutionalPageMapper(res);
	}

	async update({ institutionalPage, _id }: { institutionalPage: Partial<Omit<InstitutionalPage, '_id'>>; _id: string | ObjectId }) {
		const doc = await this.InstitutionalPagesModel.findByIdAndUpdate(_id, institutionalPage);
		if (doc) return InstitutionalPageMapper(doc);
	}

	async find({
		filter,
		paginate,
	}: {
		filter: FilterQuery<InstitutionalPageDocument>;
		paginate?: Pagination;
	}): Promise<InstitutionalPage[]> {
		let documentQuery = this.InstitutionalPagesModel.find(filter).sort({ order: 1, _id: 1 });
		if (paginate) {
			documentQuery = documentQueryPaginate(documentQuery, paginate);
		}
		const list = await documentQuery.exec();
		return list.map(InstitutionalPageMapper);
	}

	async findOne(filter: FilterQuery<InstitutionalPageDocument>): Promise<InstitutionalPage | void> {
		const document = await this.InstitutionalPagesModel.findOne(filter).exec();
		if (document) {
			return InstitutionalPageMapper(document);
		}
	}

	async delete(_id: string | ObjectId): Promise<void> {
		const children = await this.InstitutionalPagesModel.find({ parent: _id }).exec();
		if (children.length) {
			children.map(d => this.delete(d._id));
		}
		await this.InstitutionalPagesModel.deleteOne({ _id });
	}
}
