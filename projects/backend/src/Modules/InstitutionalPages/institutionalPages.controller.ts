import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, Logger } from '@nestjs/common';
import { InstitutionalPagesService } from './institutionalPages.service';

import * as ARGS from './institutionalPages.args';
import { ApiGet, Auth } from '@Utils/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Institutional Pages')
@Controller('institutional-pages')
export class InstitutionalPagesController {
	constructor(private readonly logger: Logger, private readonly institutionalPagesService: InstitutionalPagesService) {
		this.logger.setContext('InstitutionalPagesController');
	}

	@Auth('InstitutionalPages.create')
	@Post('/')
	async save(@Body() institutionalPage: ARGS.InstitutionalPage) {
		return this.institutionalPagesService.create({ institutionalPage });
	}

	@Auth('InstitutionalPages.update')
	@Put('/:_id')
	async update(@Body() institutionalPage: ARGS.InstitutionalPage, @Param() { _id }: ARGS.ID) {
		const updated = await this.institutionalPagesService.update({ institutionalPage, _id });
		if (!updated) {
			throw new NotFoundException();
		}
	}

	@Auth('InstitutionalPages.delete')
	@Delete('/:_id')
	async delete(@Param() { _id }: ARGS.ID) {
		return this.institutionalPagesService.delete(_id);
	}

	@Get('/')
	async find(@Query() { ref }: ARGS.ListFilter) {
		if (ref) {
			return this.institutionalPagesService.find({ filter: { ref } });
		}
		return this.institutionalPagesService.find({ filter: {} });
	}

	@Get('/:_id')
	@ApiGet()
	async findOne(@Param() { _id }: ARGS.ID) {
		const doc = await this.institutionalPagesService.findOne({ _id });
		if (!doc) {
			throw new NotFoundException();
		}
		return doc;
	}
}
