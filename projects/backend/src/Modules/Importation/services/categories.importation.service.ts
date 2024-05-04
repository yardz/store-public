import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryDocument } from '@Modules/Categories/categories.schema';
import categoryList from './categories.json';
import { cloneDeep } from 'lodash';

interface CategoryJson {
	name: string;
	parent: string;
	ref: string;
}

interface CategoryImportationHydrated {
	name: string;
	ref: string;
	order: number;
	publish: {
		mobile: true;
		desktop: true;
		store: true;
	};
	parent?: string;
}

@Injectable()
export class CategoriesImportationService {
	constructor(@InjectModel('Categories') private categoriesModel: Model<CategoryDocument>) {}

	private hydrateCategory(category: CategoryJson): CategoryImportationHydrated {
		const newCategory: CategoryImportationHydrated = {
			name: category.name,
			ref: category.ref,
			order: 0,
			publish: {
				mobile: true,
				desktop: true,
				store: true,
			},
		};
		if (category.parent) {
			newCategory.parent = category.parent;
		}
		return newCategory;
	}

	async save() {
		const home = {
			name: 'Home',
			ref: 'home',
			order: 0,
			publish: { desktop: true, mobile: true, store: true },
		};
		await new this.categoriesModel(home).save();
		const insert = categoryList.length;
		const list: CategoryJson[] = cloneDeep(categoryList).reverse();

		while (list.length) {
			const item = list.pop();
			if (!item) break;
			const category = this.hydrateCategory(item);
			if (category.parent) {
				// eslint-disable-next-line no-await-in-loop
				const parent = await this.categoriesModel.findOne({ ref: category.parent });
				category.parent = parent?._id.toString();
			}
			// eslint-disable-next-line no-await-in-loop
			await new this.categoriesModel(category).save();
		}

		return { insert };
	}
}
