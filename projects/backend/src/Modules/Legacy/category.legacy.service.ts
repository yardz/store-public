import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from 'sequelize';
import { CategoriesLegacyModel } from './categories.legacy.types';
import { SubcategoriesLegacyModel as Subcategories } from './subcategories.legacy.types';

@Injectable()
export class CategoryLegacyService {
	constructor(
		@InjectModel(CategoriesLegacyModel)
		private readonly categoriesLegacyModel: typeof CategoriesLegacyModel,
	) {}

	/** @deprecated deve ser removido assim que possível */
	findOne(id: number) {
		return this.categoriesLegacyModel.findOne({
			include: [Subcategories],
			where: {
				id,
			},
		});
	}

	/** @deprecated deve ser removido assim que possível */
	findAll(where?: WhereOptions) {
		return this.categoriesLegacyModel.findAll({
			include: [Subcategories],
			where,
		});
	}
}
