import { Module, Logger } from '@nestjs/common';
import { SlidePositionService } from './slidePosition.service';
import { SlideImageService } from './slideImage.service';
import { SlidesController } from './slides.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SlidePositionSchema } from './slidePosition.schema';
import { SlideImageSchema } from './slideImage.schema';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'SlidePositions', schema: SlidePositionSchema }]),
		MongooseModule.forFeature([{ name: 'SlideImages', schema: SlideImageSchema }]),
	],
	controllers: [SlidesController],
	providers: [Logger, SlidePositionService, SlideImageService],
	exports: [],
})
export class SlidesModule {}
