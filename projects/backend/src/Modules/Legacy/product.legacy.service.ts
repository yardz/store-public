import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VariationLegacyModel as Variation } from './variations.legacy.types';
import { ProductLegacyModel } from './product.legacy.types';
import { MatrixLegacyModel as Matrix } from './matrix.legacy.types';
import { SizeLegacyModel as Size } from './size.legacy.types';
import { ModelLegacyModel as Model } from './model.legacy.types';
import { ColorLegacyModel as Color } from './color.legacy.types';
import { ImageCartLegacyModel } from './image-cart.legacy.types';
import { CategoryImagesLegacyModel } from './categoryImages.legacy.types';
import { MeasureTableLegacyModel } from './measureTable.legacy.types';
import { WhereOptions } from 'sequelize';

@Injectable()
export class ProductLegacyService {
	constructor(
		@InjectModel(ProductLegacyModel)
		private readonly productLegacyModel: typeof ProductLegacyModel,
		@InjectModel(Variation)
		private readonly variationLegacyModel: typeof Variation,
		@InjectModel(CategoryImagesLegacyModel)
		private readonly categoryImagesLegacyModel: typeof CategoryImagesLegacyModel,
		private httpService: HttpService,
	) {}

	/** @deprecated deve ser removido assim que possível */
	findOne(id: number) {
		return this.productLegacyModel.findOne({
			include: [
				ImageCartLegacyModel,
				MeasureTableLegacyModel,
				{
					model: Variation,
					include: [
						{
							model: Matrix,
							include: [Size, Model, Color],
						},
					],
				},
			],
			where: {
				id,
			},
		});
	}

	/** @deprecated deve ser removido assim que possível */
	findAll(ids: number[]) {
		return this.productLegacyModel.findAll({
			include: [
				ImageCartLegacyModel,
				MeasureTableLegacyModel,
				{
					model: Variation,
					include: [
						{
							model: Matrix,
							include: [Size, Model, Color],
						},
					],
				},
			],
			where: {
				id: ids,
			},
		});
	}

	// esse método foi criado apenas para testar a importação. Depois irei excluir
	/** @deprecated deve ser removido assim que possível */
	async importAllProducts(where?: WhereOptions) {
		const products = await this.productLegacyModel.findAll({ where });
		return products.map(p => ({
			id: p.id,
			deleted: p.deleted,
		}));
	}

	/** @deprecated deve ser removido assim que possível */
	async findPhotosByProductId(productLegacyId: number): Promise<string[]> {
		return this.httpService
			.get(`${process.env.LEGACY_LAB77_BASE_URL}/arquivos/getFilesFolder/produtos/${productLegacyId}.json`)
			.toPromise()
			.then(response => response.data);
	}

	/** @deprecated deve ser removido assim que possível */
	findImage({ productId, categoryId }: { productId: number; categoryId: number }) {
		return this.categoryImagesLegacyModel.findOne({
			where: { productId, categoryId },
		});
	}

	/** @deprecated deve ser removido assim que possível */
	findHome() {
		return this.productLegacyModel.findAll({
			where: {
				home: true,
			},
		});
	}

	/** @deprecated deve ser removido assim que possível */
	getVariations(productId: number) {
		return this.variationLegacyModel.findAll({ where: { productId } });
	}
}
