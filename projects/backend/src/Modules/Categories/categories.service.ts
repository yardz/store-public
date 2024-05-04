import { Category, Pagination, SiemapItem } from '@lab77store/domain';
import { Injectable, ConflictException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import to from 'await-to-js';
import { FilterQuery, Model, ObjectId } from 'mongoose';
import { CategoryDocument, categoryMapper } from './categories.schema';
import { getChildren } from './functions/getChildren';
import { getParentsList } from './functions/getParentsList';
import { documentQueryPaginate } from '@Utils/functions/documentQueryPaginate';
import { cloneDeep } from 'lodash';
import dayjs from 'dayjs';

@Injectable()
export class CategoriesService {
	constructor(@InjectModel('Categories') private categoriesModel: Model<CategoryDocument>, private readonly logger: Logger) {
		this.logger.setContext('CategoriesService');
	}

	private async generateParentsTree() {
		let allCategories: Category[] = (await this.categoriesModel.find({}).sort({ order: 1, _id: 1 }))
			.map(categoryMapper)
			.map(c => ({ ...c, parents: undefined }));
		const categories: Category[] = allCategories.filter(c => c.parent === null);
		const currentCategories = cloneDeep(allCategories).filter(c => c.parent !== null);
		let current = currentCategories.shift();
		while (current) {
			current.parents = getParentsList({ category: current, categories: allCategories });
			categories.push(current);
			// eslint-disable-next-line no-loop-func
			allCategories = allCategories.map(category => {
				if (category._id === current?._id) {
					return { ...category, parents: current?.parents };
				}
				return category;
			});
			current = currentCategories.shift();
		}

		const bulkProduct = categories.map(category => ({
			updateOne: {
				filter: { _id: category._id },
				update: {
					parents: category.parents,
				},
				upsert: false,
			},
		}));
		return this.categoriesModel.bulkWrite(bulkProduct, { ordered: false });
	}

	async create({ category }: { category: Omit<Category, '_id'> }) {
		const [err, res] = await to(new this.categoriesModel(category).save());
		if (err || !res) {
			throw new ConflictException(err?.message);
		}
		return categoryMapper(res);
	}

	async update({ category, _id }: { category: Partial<Omit<Category, '_id'>>; _id: string | ObjectId }) {
		if (category.parent === _id) {
			throw new ConflictException('Parent can not be the same category');
		}
		await this.categoriesModel.replaceOne({ _id }, { ...category, _id }, { upsert: false });
		await this.generateParentsTree();
		return this.findOne({ _id });
	}

	async find({ filter, paginate }: { filter: FilterQuery<CategoryDocument>; paginate?: Pagination }): Promise<Category[]> {
		let documentQuery = this.categoriesModel.find(filter).sort({ order: 1, _id: 1 });
		if (paginate) {
			documentQuery = documentQueryPaginate(documentQuery, paginate);
		}
		const list = await documentQuery.exec();
		return list.map(categoryMapper);
	}

	async findOne(filter: FilterQuery<CategoryDocument>): Promise<Category | void> {
		const document = await this.categoriesModel.findOne(filter).exec();
		if (document) {
			return categoryMapper(document);
		}
	}

	async delete(_id: string | ObjectId): Promise<Category | void> {
		const children = await this.categoriesModel.find({ parent: _id }).exec();
		if (children.length) {
			children.map(d => this.delete(d._id));
		}
		await this.categoriesModel.deleteOne({ _id });
		await this.generateParentsTree();
	}

	async getChilds({ categoryId }: { categoryId: string | ObjectId }): Promise<string[]> {
		const categories = await this.find({ filter: {} });
		const ids = [categoryId.toString()];
		return getChildren({ categoriesIdList: ids, categories });
	}

	async findSitemap(): Promise<SiemapItem[]> {
		const categories = await this.categoriesModel.find({ ref: { $ne: 'home' } }).sort({ order: 1, _id: 1 });
		return categories.map(item => ({
			_id: item._id.toString(),
			name: item.name,
			ref: item.ref,
			createdAt: dayjs(item.createdAt).unix() * 1000,
			updatedAt: dayjs(item.updatedAt).unix() * 1000,
		}));
	}
}
