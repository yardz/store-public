import { Body, Controller, Get, NotFoundException, Param, Post, Put, Query, Logger } from '@nestjs/common';
import { ProductsAdminService } from './products.admin.service';
import { ProductAdmin, ProductAdminSort, PaginateList } from '@lab77store/domain';
import { ApiGet, Auth } from '@Utils/decorators';
import { createPaginationResponse } from '@Utils/functions/createPaginationResponse';
import { stringToRegExp } from '@App/Utils/functions/stringToRegExp';
import { ApiTags } from '@nestjs/swagger';

import * as ARGS from './products.args';
import { ProductsService } from './products.service';

@ApiTags('Products Admin')
@Controller('products-admin')
export class ProductsAdminController {
	constructor(
		private readonly logger: Logger,
		private readonly productsAdminService: ProductsAdminService,
		private readonly productsService: ProductsService,
	) {
		this.logger.setContext('ProductsController');
	}

	@Auth('Products.update', 'Products.create', 'Products.delete')
	@Get()
	async find(@Query() query: ARGS.ProductListFilter): Promise<PaginateList<ProductAdmin>> {
		const { name, ref, active, ...paginate } = query;

		const queryConditionsOR: Record<string, unknown>[] = [];
		let filter = {};

		if (name) {
			queryConditionsOR.push({ name: stringToRegExp(name) });
		}

		if (ref) {
			queryConditionsOR.push({ ref: stringToRegExp(ref) });
		}

		if (queryConditionsOR.length) {
			filter = { $or: queryConditionsOR, deleted: 0 };
		} else {
			filter = { deleted: 0 };
		}
		if (active !== undefined) {
			filter = { ...filter, active };
		}

		const items = await this.productsAdminService.find({
			filter,
			paginate,
		});
		const { total } = await this.productsService.count({ filter });
		return createPaginationResponse({ paginate, items, total });
	}

	@Auth('Products.update')
	@ApiGet()
	@Get('/:_id')
	async findOne(@Param() { _id }: ARGS.ID): Promise<ProductAdmin | null> {
		const filter = { _id, deleted: 0 };
		const product = await this.productsAdminService.findOne(filter);
		if (!product) {
			throw new NotFoundException();
		}
		return product;
	}

	@Auth('Products.update')
	@Put('/:_id')
	async update(@Body() product: ARGS.Product, @Param() { _id }: ARGS.ID): Promise<ProductAdmin> {
		const doc = await this.productsAdminService.update({ product, _id });
		if (!doc) {
			throw new NotFoundException();
		}
		return doc;
	}

	@Auth('Products.update')
	@Get('/sort/list')
	async orderList(@Query() { start, end }: ARGS.Range): Promise<ProductAdminSort[]> {
		const filter = { deleted: 0, order: { $gte: start, $lte: end } };
		const items = await this.productsAdminService.find({
			filter,
		});
		return items.map(p => ({
			_id: p._id,
			name: p.name,
			order: p.order,
			active: p.active,
			image: p?.catalogImages?.default?.cover,
		}));
	}

	@Auth('Products.update')
	@Post('/sort/list')
	async saveProductOrder(@Body() { productSortList }: ARGS.ProductAdminSort) {
		await this.productsAdminService.updateProductSort({
			productSortList,
		});
	}
}
