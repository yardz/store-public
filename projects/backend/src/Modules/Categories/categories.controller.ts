import {
	Body,
	Controller,
	Delete,
	Get,
	NotFoundException,
	Param,
	Post,
	Put,
	Query,
	Logger,
	UseInterceptors,
	CacheInterceptor,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';

import * as ARGS from './categories.args';
import { ApiGet, Auth } from '@App/Utils/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
@UseInterceptors(CacheInterceptor)
export class CategoriesController {
	constructor(private readonly logger: Logger, private readonly categoriesService: CategoriesService) {
		this.logger.setContext('CategoriesController');
	}

	@Auth('Categories.create')
	@Post('/')
	async save(@Body() category: ARGS.Category) {
		return this.categoriesService.create({ category });
	}

	@Auth('Categories.update')
	@Put('/:_id')
	async update(@Body() category: ARGS.Category, @Param() { _id }: ARGS.ID) {
		const updated = await this.categoriesService.update({ category, _id });
		if (!updated) {
			throw new NotFoundException();
		}
	}

	@Auth('Categories.delete')
	@Delete('/:_id')
	async delete(@Param() { _id }: ARGS.ID) {
		return this.categoriesService.delete(_id);
	}

	@Get('/')
	async find(@Query() { ref }: ARGS.ListFilter) {
		if (ref) {
			return this.categoriesService.find({ filter: { ref } });
		}
		return this.categoriesService.find({ filter: {} });
	}

	@Get('/:_id')
	@ApiGet()
	async findOne(@Param() { _id }: ARGS.ID) {
		const doc = await this.categoriesService.findOne({ _id });
		if (!doc) {
			throw new NotFoundException();
		}
		return doc;
	}
}
