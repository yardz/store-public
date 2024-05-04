import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, Logger } from '@nestjs/common';
import { SlidePositionService } from './slidePosition.service';

import * as ARGS from './slides.args';
import { Auth } from '@App/Utils/decorators';
import { ApiTags } from '@nestjs/swagger';
import { SlideImageService } from './slideImage.service';

import { Slide } from '@lab77store/domain';

@ApiTags('Slides')
@Controller('slides')
export class SlidesController {
	constructor(
		private readonly logger: Logger,
		private readonly slidePositionService: SlidePositionService,
		private readonly slideImageService: SlideImageService,
	) {
		this.logger.setContext('SlidesController');
	}

	@Auth('Slides.create')
	@Post('/slide-positions')
	async slidePositionSave(@Body() slidePosition: ARGS.SlidePosition) {
		return this.slidePositionService.create({ slidePosition });
	}

	@Auth('Slides.update')
	@Put('/slide-positions/:_id')
	async slidePositionUpdate(@Body() slidePosition: ARGS.SlidePosition, @Param() { _id }: ARGS.ID) {
		const doc = await this.slidePositionService.update({ slidePosition, _id });
		if (!doc) {
			throw new NotFoundException();
		}
		return doc;
	}

	@Auth('Slides.delete')
	@Delete('/slide-positions/:_id')
	async slidePositionDelete(@Param() { _id }: ARGS.ID) {
		const doc = await this.slidePositionService.delete({ _id });
		if (!doc) {
			throw new NotFoundException();
		}
		return doc;
	}

	@Auth('Slides.update', 'Slides.create', 'Slides.delete', 'Categories.update', 'Categories.create')
	@Get('/slide-positions')
	async slidePositionFind(@Query() { type }: ARGS.ListFilter) {
		if (type) {
			return this.slidePositionService.find({ filter: { type } });
		}
		return this.slidePositionService.find({ filter: {} });
	}

	@Auth('Slides.create')
	@Post('/slide-images')
	async slideImageSave(@Body() slideImage: ARGS.SlideImage) {
		return this.slideImageService.create({ slideImage });
	}

	@Auth('Slides.update')
	@Put('/slide-images/:_id')
	async slideImageUpdate(@Body() slideImage: ARGS.SlideImage, @Param() { _id }: ARGS.ID) {
		const doc = await this.slideImageService.update({ slideImage, _id });
		if (!doc) {
			throw new NotFoundException();
		}
		return doc;
	}

	@Auth('Slides.delete')
	@Delete('/slide-images/:_id')
	async slideImageDelete(@Param() { _id }: ARGS.ID) {
		const doc = await this.slideImageService.delete({ _id });
		if (!doc) {
			throw new NotFoundException();
		}
		return doc;
	}

	@Auth('Slides.update', 'Slides.create', 'Slides.delete', 'Categories.update', 'Categories.create')
	@Get('/slide-images')
	async slideImageFind() {
		return this.slideImageService.find({ filter: {} });
	}

	@Auth('Slides.update', 'Slides.create', 'Slides.delete', 'Categories.update', 'Categories.create')
	@Get('/slide-images/:_id')
	async slideImageFindOne(@Param() { _id }: ARGS.ID) {
		const doc = await this.slideImageService.findOne({ _id });
		if (!doc) {
			throw new NotFoundException();
		}
		return doc;
	}

	@Get('/:_id')
	async getSlide(@Param() { _id }: ARGS.ID): Promise<Slide> {
		const [position, images] = await Promise.all([
			this.slidePositionService.findOne({ _id }),
			this.slideImageService.find({ filter: { slidePosition: _id } }),
		]);
		if (!position) {
			throw new NotFoundException();
		}
		return { _id: position._id, rows: position.rows, type: position.type, images };
	}
}
