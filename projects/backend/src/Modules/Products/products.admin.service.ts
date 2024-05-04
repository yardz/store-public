import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { FilterQuery, Model, ObjectId } from 'mongoose';
import { Pagination, ProductAdmin } from '@lab77store/domain';
import { ProductDocument, productAdminMapper } from './products.schema';
import { InjectModel } from '@nestjs/mongoose';
import { omit } from 'lodash';
import { documentQueryPaginate } from '@Utils/functions/documentQueryPaginate';
import to from 'await-to-js';

@Injectable()
export class ProductsAdminService {
	constructor(@InjectModel('Products') private productsModel: Model<ProductDocument>, private readonly logger: Logger) {
		this.logger.setContext('ProductsService');
	}

	async findOne(filter: FilterQuery<ProductDocument>): Promise<ProductAdmin | null> {
		const productMongoDb = await this.productsModel.findOne(filter);
		if (!productMongoDb) {
			return null;
		}
		return productAdminMapper(productMongoDb);
	}

	async find({ filter, paginate }: { filter: FilterQuery<ProductDocument>; paginate?: Pagination }) {
		let documentQuery = this.productsModel.find(filter).sort({ order: 1, _id: 1 });
		if (paginate) {
			documentQuery = documentQueryPaginate(documentQuery, paginate);
		}
		const list = await documentQuery.exec();
		return Promise.all(list.map(i => productAdminMapper(i)));
	}

	async create({ product }: { product: Omit<ProductAdmin, '_id'> }) {
		const [err, res] = await to(new this.productsModel(product).save());
		if (err || !res) {
			throw new ConflictException(err?.message);
		}
		return productAdminMapper(res);
	}

	async update({ product, _id }: { product: Partial<Omit<ProductAdmin, '_id'>>; _id: string | ObjectId }) {
		const update = omit(product, 'variations'); // enquanto não temos suporte para editar as variações, eu impeço que elas sejam editadas acidentalmente
		const doc = await this.productsModel.findByIdAndUpdate(_id, update);
		if (doc) return productAdminMapper(doc);
	}

	async updateProductSort({ productSortList }: { productSortList: { _id: string | ObjectId; order: number }[] }) {
		await this.productsModel.bulkWrite(
			productSortList.map(({ _id, order }) => ({ updateOne: { filter: { _id }, update: { $set: { order } } } })),
		);
	}

	async delete({ _id }: { _id: string | ObjectId }) {
		const doc = await this.productsModel.findByIdAndDelete(_id);
		if (doc) return productAdminMapper(doc);
	}
}
