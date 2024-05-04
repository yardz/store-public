/* eslint-disable max-lines */
import { ProductLegacyService } from '@Modules/Legacy/product.legacy.service';
import { ProductLegacyModel } from '@Modules/Legacy/product.legacy.types';
import { ProductDocument } from '@Modules/Products/products.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { generate } from 'randomstring';
import { Op } from 'sequelize';
import { unionBy } from 'lodash';
import productCategoryUpdate from './product-category-update.json';

interface ProductImportation {
	id: number;
	deleted?: boolean;
}
interface ProductImportationHydrated {
	deleted: boolean;
	legacyId: number;
	name: string;
	order: number;
	ref: string;
	categories: string[];
	variations: { _id: Types.ObjectId; legacyId: number }[];
}

@Injectable()
export class ProductsImportationService {
	constructor(
		@InjectModel('Products') private productsModel: Model<ProductDocument>,
		private readonly productLegacyService: ProductLegacyService,
	) {}

	private hydrateProductImportation(productsLegacy: ProductLegacyModel, products: ProductImportation[]): ProductImportationHydrated {
		const variations = productsLegacy.variations.map(variation => ({
			legacyId: variation.id,
			_id: Types.ObjectId(),
		}));
		const productImport = products.find(product => product.id === productsLegacy.id);
		const deleted = productImport?.deleted || false;

		return {
			name: productsLegacy.name,
			legacyId: productsLegacy.id,
			order: productsLegacy.order,
			ref: productsLegacy.ref || generate(10),
			categories: [],
			variations,
			deleted,
		};
	}

	// metodo para importar produtos respeitando as categorias que existem no site atual
	async allProducts() {
		// remove existents products
		const ids = (await this.productsModel.find()).map(p => p.legacyId);
		const products = await this.productLegacyService.importAllProducts({
			id: {
				[Op.notIn]: ids,
			},
		});
		const productImport = await Promise.all(products.map(async p => ({ id: p.id, deleted: p.deleted, active: false })));
		return this.save(productImport);
	}

	async fixAllProducts() {
		// remove existents products
		const ids = (await this.productsModel.find()).map(p => p._id.toString());
		await Promise.all(ids.map(id => this.fixProduct(id)));
	}

	async fixProduct(productId: string) {
		const variationAction = 'replace';

		// remove existents products
		const product = await this.productsModel.findOne({ _id: productId });
		if (!product) return;
		const itemsLegacy = await this.productLegacyService.getVariations(product.legacyId);
		const items: { legacyId: number; _id: string }[] = itemsLegacy.map(variation => ({
			legacyId: variation.id,
			_id: Types.ObjectId().toString(),
		}));

		// eslint-disable-next-line default-case
		switch (variationAction) {
			case 'replace':
				product.variations = items;
				break;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			case 'add':
				product.variations = unionBy(product.variations, items, 'legacyId');
				break;
		}

		// adicionar imagem default nos produtos sem imagem
		if (!product.catalogImages?.default?.cover) {
			product.catalogImages = {
				default: {
					cover: {
						desktop: {
							file: {
								asset_id: '2619cf3ee09555bdc89bd66aecc7799c',
								public_id: 'products/desktop/lx0okayamw-produto-sem-foto',
								resource_type: 'image',
								url: 'https://res.cloudinary.com/lab77/image/upload/v1635368409/products/desktop/lx0okayamw-produto-sem-foto.png',
							},
							alt: 'produto sem foto',
						},
						mobile: {
							file: {
								asset_id: 'c2d9abd045d9dde0c08f2e45f81fb98c',
								public_id: 'products/mobile/tnxtxy1ajh-produto-sem-foto',
								resource_type: 'image',
								url: 'https://res.cloudinary.com/lab77/image/upload/v1635368409/products/mobile/tnxtxy1ajh-produto-sem-foto.png',
							},
							alt: 'produto sem foto',
						},
					},
				},
			};
		}

		return product.save();
	}

	async save(products: ProductImportation[]) {
		const ids = products.map(product => product.id);
		const productsImportation = (await this.productLegacyService.findAll(ids)).map(product =>
			this.hydrateProductImportation(product, products),
		);

		const bulkProduct = productsImportation.map(productImportation => {
			const { variations, ...product } = productImportation;
			return {
				updateOne: {
					filter: { legacyId: productImportation.legacyId },
					update: {
						$set: {
							...product,
						},
						$setOnInsert: {
							variations,
						},
					},
					upsert: true,
				},
			};
		});

		const resultProductBulk = await this.productsModel.bulkWrite(bulkProduct, { ordered: false });

		return {
			update: resultProductBulk.matchedCount || 0,
			insert: resultProductBulk.upsertedCount || 0,
			total: (resultProductBulk.matchedCount || 0) + (resultProductBulk.upsertedCount || 0),
		};
	}

	async updateProductsCategory() {
		const bulkProduct = productCategoryUpdate.map(({ legacyId, category }) => ({
			updateOne: {
				filter: { legacyId },
				update: {
					categories: [category],
				},
				upsert: false,
			},
		}));

		const resultProductBulk = await this.productsModel.bulkWrite(bulkProduct, { ordered: false });

		return {
			update: resultProductBulk.matchedCount || 0,
			insert: resultProductBulk.upsertedCount || 0,
			total: (resultProductBulk.matchedCount || 0) + (resultProductBulk.upsertedCount || 0),
		};
	}
}
