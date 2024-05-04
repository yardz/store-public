import {
	Controller,
	Get,
	NotFoundException,
	Param,
	Query,
	Logger,
	// UseInterceptors, CacheInterceptor
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product, ProductListItem, PaginateList } from '@lab77store/domain';
import { createPaginationResponse } from '@Utils/functions/createPaginationResponse';
import { ApiGet } from '@App/Utils/decorators';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from '@Modules/Categories/categories.service';

import * as ARGS from './products.args';

@ApiTags('Products')
@Controller('products')
// @UseInterceptors(CacheInterceptor)
export class ProductsController {
	constructor(
		private readonly logger: Logger,
		private readonly productsService: ProductsService,
		private readonly categoriesService: CategoriesService,
	) {
		this.logger.setContext('ProductsController');
	}

	@ApiGet()
	@Get('/:_id')
	async findOne(@Param() { _id }: ARGS.ID): Promise<Product> {
		const product = await this.productsService.findOne({ _id, deleted: 0 });
		if (!product) {
			throw new NotFoundException();
		}
		return product;
	}

	@ApiGet()
	@Get('/ref/:ref')
	async findRef(@Param() { ref }: ARGS.REF): Promise<Product> {
		const product = await this.productsService.findOne({ ref, deleted: 0 });
		if (!product) throw new NotFoundException();

		return product;
	}

	@ApiGet()
	@Get()
	async find(@Query() query: ARGS.ListFilter): Promise<PaginateList<ProductListItem>> {
		const { category, noChilds, ...paginate } = query;
		const subcategories = !noChilds ? await this.categoriesService.getChilds({ categoryId: category }) : [category];

		const filter = { categories: { $in: subcategories }, deleted: false, active: true };
		const items = await this.productsService.findList({ filter, paginate });

		const { total } = await this.productsService.count({ filter });
		return createPaginationResponse({ paginate, items, total });
	}
}
