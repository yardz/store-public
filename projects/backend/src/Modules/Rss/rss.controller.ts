import { Controller, Get, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
	FacebookCatalogProduct,
	RssFacebookCatalog,
	GoogleCatalogProduct,
	RssGoogleCatalog,
	RssProduct,
	SiemapItem,
} from '@lab77store/domain';
import { ApiGet } from '@App/Utils/decorators';
import { CategoriesService } from '@Modules/Categories/categories.service';
import { ProductsService } from '@Modules/Products/products.service';
import { ObjectId } from 'mongoose';
import { flatten, uniq } from 'lodash';
import dayjs from 'dayjs';

@ApiTags('Rss')
@Controller('rss')
export class RssController {
	constructor(
		private readonly logger: Logger,
		private readonly productsService: ProductsService,
		private readonly categoriesService: CategoriesService,
	) {
		this.logger.setContext('RssController');
	}

	@ApiGet()
	@Get('/facebook-catalog')
	async facebookCatalog(): Promise<RssFacebookCatalog> {
		const mapper = (product: RssProduct): FacebookCatalogProduct[] =>
			product.variations.map(variation => ({
				variationId: variation._id,
				productId: product._id,
				name: product.name,
				ref: product.ref,
				description: product.description,
				availability: product.availability,
				oldPrice: product.oldPrice,
				price: variation.price,
				image: product.image,
				photos: product.photos,
				color: variation.attributes.find(({ _id }) => _id === '604797d17adc6482927a64ac')?.option.label,
				size: variation.attributes.find(({ _id }) => _id === '60479be535b419f9d27b2794')?.option.label,
			}));

		// Quando remover o mysql dos produtos, deve-se usar o find aqui. Esse método é só para aliviar o MySQL
		const products = flatten((await this.productsService.getRss()).map(mapper));
		return { products };
	}

	@ApiGet()
	@Get('/google-catalog')
	async googleCatalog(): Promise<RssGoogleCatalog> {
		const mapper = (product: RssProduct): GoogleCatalogProduct => {
			const color: string[] = [];
			const size: string[] = [];
			product.variations.forEach(variation => {
				variation.attributes.forEach(attribute => {
					if (attribute._id === '604797d17adc6482927a64ac') {
						color.push(attribute.option.label);
					}
					if (attribute._id === '60479be535b419f9d27b2794') {
						size.push(attribute.option.label);
					}
				});
			});

			return {
				productId: product._id,
				name: product.name,
				ref: product.ref,
				description: product.description,
				image: product.image,
				availability: product.availability,
				price: product.price,
				color: uniq(color),
				size: uniq(size),
			};
		};

		// Quando remover o mysql dos produtos, deve-se usar o find aqui. Esse método é só para aliviar o MySQL
		const products = flatten((await this.productsService.getRss()).map(mapper));
		return { products };
	}

	@ApiGet()
	@Get('/sitemap')
	async find() {
		const mapper = (item: { _id: string | ObjectId; name: string; ref: string; createdAt?: number; updatedAt?: number }): SiemapItem => ({
			_id: item._id.toString(),
			name: item.name,
			ref: item.ref,
			createdAt: item.createdAt || item.updatedAt || dayjs().unix() * 1000,
			updatedAt: item.updatedAt || item.createdAt || dayjs().unix() * 1000,
		});

		const products = (await this.productsService.getRss()).map(mapper);
		const categories = (await this.categoriesService.findSitemap()).map(mapper);

		return { products, categories };
	}
}
