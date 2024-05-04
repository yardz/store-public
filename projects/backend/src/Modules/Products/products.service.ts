/* eslint-disable max-lines */
import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { ProductLegacyService } from '@Modules/Legacy/product.legacy.service';
import { FilesService } from '@Modules/Files/files.service';
import { Pagination, Product, ProductListItem, RssProduct, RssVariation, Variation } from '@lab77store/domain';
import { ProductDocument } from './products.schema';
import { InjectModel } from '@nestjs/mongoose';
import { preSaleMapper, variationsMapper, productOptionsMapper, photosMapper, createProductContent } from './functions';
import { createImageObject } from './functions/createImageObject';
import { documentQueryPaginate } from '@Utils/functions/documentQueryPaginate';
import dayjs from 'dayjs';

@Injectable()
export class ProductsService {
	constructor(
		@InjectModel('Products') private productsModel: Model<ProductDocument>,
		private readonly logger: Logger,
		private readonly productLegacyService: ProductLegacyService,
		private readonly filesService: FilesService,
	) {
		this.logger.setContext('ProductsService');
	}

	/** @deprecated deve ser removido assim que possível */
	private async hydratedProduct(productMongoDb: ProductDocument): Promise<Product> {
		const productLegacy = await this.productLegacyService.findOne(productMongoDb.legacyId);
		if (!productLegacy) {
			this.logger.error({ message: 'Erro ao tentar hidratar um produto. legacyId não existe', legacyId: productMongoDb.legacyId });
			throw new InternalServerErrorException(`legacyId ${productMongoDb.legacyId} does not exists`);
		}
		const { mainPhoto, oldPrice } = productLegacy;
		const variations = productLegacy.variations.filter(variation => !variation.deleted);

		const minVariationsPrice = Math.min(...variations.map(variation => variation.price));
		const productOldPrice = oldPrice || undefined;

		const photosUrl = await this.productLegacyService.findPhotosByProductId(productMongoDb.legacyId);

		const content = createProductContent({ productLegacy });

		const productDomain: Product = {
			_id: productMongoDb._id.toString(),
			ref: productMongoDb.ref,
			name: productMongoDb.name,
			oldPrice: productOldPrice,
			price: minVariationsPrice,
			options: productOptionsMapper(variations),
			content,
			photos: photosMapper({ photosUrl, mainPhoto }),
			cart: createImageObject({ path: mainPhoto }),
			categories: productMongoDb.categories.map(category => category.toString()),
			variations: productMongoDb.variations.map(v => variationsMapper(v, productLegacy)),
			preSale: preSaleMapper(productLegacy),
		};

		return productDomain;
	}

	/** @deprecated deve ser removido assim que possível */
	private async hydratedProductListItem(productMongoDb: ProductDocument): Promise<ProductListItem> {
		const productLegacy = await this.productLegacyService.findOne(productMongoDb.legacyId);
		if (!productLegacy) {
			this.logger.error({ message: 'Erro ao tentar hidratar um produto. legacyId não existe', legacyId: productMongoDb.legacyId });
			throw new InternalServerErrorException(`legacyId ${productMongoDb.legacyId} does not exists`);
		}
		const { atelie, oldPrice } = productLegacy;
		const variations = productLegacy.variations.filter(variation => !variation.deleted);

		const minVariationsPrice = Math.min(...variations.map(variation => variation.price));
		const flagsProduct = atelie ? ['ID_ATELIER'] : [];
		const productOldPrice = oldPrice || undefined;

		const productDomain: ProductListItem = {
			_id: productMongoDb._id.toString(),
			ref: productMongoDb.ref,
			name: productMongoDb.name,
			oldPrice: productOldPrice,
			price: minVariationsPrice,
			flags: flagsProduct,
			catalogImages: productMongoDb.catalogImages,
		};

		return productDomain;
	}

	async findOne(filter: FilterQuery<ProductDocument>): Promise<Product | null> {
		const productMongoDb = await this.productsModel.findOne(filter);

		if (!productMongoDb) {
			return null;
		}
		return this.hydratedProduct(productMongoDb);
	}

	async find({ filter, paginate }: { filter: FilterQuery<ProductDocument>; paginate?: Pagination }): Promise<Product[]> {
		let documentQuery = this.productsModel.find(filter).sort({ order: 1, _id: 1 });
		if (paginate) {
			documentQuery = documentQueryPaginate(documentQuery, paginate);
		}
		const list = await documentQuery.exec();
		return Promise.all(list.map(i => this.hydratedProduct(i)));
	}

	async findList({ filter, paginate }: { filter: FilterQuery<ProductDocument>; paginate?: Pagination }): Promise<ProductListItem[]> {
		let documentQuery = this.productsModel.find(filter).sort({ order: 1, _id: 1 });
		if (paginate) {
			documentQuery = documentQueryPaginate(documentQuery, paginate);
		}
		const list = await documentQuery.exec();
		return Promise.all(list.map(i => this.hydratedProductListItem(i)));
	}

	async count({ filter }: { filter: FilterQuery<ProductDocument> }): Promise<{ total: number }> {
		const total = await this.productsModel.countDocuments(filter);
		return { total };
	}

	/** @deprecated deve ser removido assim que possível */
	async getVariationLegacyId({ productId, variationId }: { productId: string; variationId: string }) {
		const product = await this.productsModel.findOne({ _id: productId });
		return product?.variations.find(({ _id }) => _id.toString() === variationId)?.legacyId;
	}

	/** @deprecated deve ser removido assim que possível */
	private async hydratedProductRss(productMongoDb: ProductDocument): Promise<RssProduct> {
		const productLegacy = await this.productLegacyService.findOne(productMongoDb.legacyId);
		if (!productLegacy) {
			this.logger.error({ message: 'Erro ao tentar hidratar um produto. legacyId não existe', legacyId: productMongoDb.legacyId });
			throw new InternalServerErrorException(`legacyId ${productMongoDb.legacyId} does not exists`);
		}
		const { mainPhoto, oldPrice } = productLegacy;
		const variations = productLegacy.variations.filter(variation => !variation.deleted);

		const minVariationsPrice = Math.min(...variations.map(variation => variation.price));
		const productOldPrice = oldPrice || undefined;

		const photosUrl = await this.productLegacyService.findPhotosByProductId(productMongoDb.legacyId);

		const content = createProductContent({ productLegacy });

		const mapToRssVariation = (variation: Variation): RssVariation => ({
			_id: variation._id.toString(),
			price: minVariationsPrice + variation.additionalPrice,
			attributes: variation.attributes,
		});

		const productDomain: RssProduct = {
			_id: productMongoDb._id.toString(),
			ref: productMongoDb.ref,
			name: productMongoDb.name,
			description: content?.description || '',
			availability: true,
			oldPrice: productOldPrice,
			price: minVariationsPrice,
			image: this.filesService.getImagePath(productMongoDb.catalogImages.default.cover),
			photos: photosMapper({ photosUrl, mainPhoto }).map(photo => photo.desktop.file.url),
			createdAt: dayjs(productMongoDb.createdAt).unix() * 1000,
			updatedAt: dayjs(productMongoDb.updatedAt).unix() * 1000,
			variations: productMongoDb.variations.map(v => variationsMapper(v, productLegacy)).map(mapToRssVariation),
		};

		return productDomain;
	}

	async getRss(): Promise<RssProduct[]> {
		const list = await this.productsModel.find({ deleted: false, active: true }).sort({ order: 1, _id: 1 });
		// return Promise.all([this.hydratedProductRss(list[0])]);
		return Promise.all(list.map(i => this.hydratedProductRss(i)));
	}
}
