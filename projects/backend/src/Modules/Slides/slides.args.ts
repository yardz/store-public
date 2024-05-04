import { IsNotEmpty, IsString, IsIn, IsOptional, IsNumber, IsInt, Max, Min, ValidateNested } from 'class-validator';
import { SlidePosition as ISlidePosition, SlideImage as ISlideImage } from '@lab77store/domain';
import { Publish } from '@Utils/Args/Publish.args';
import { ImageBothOptional } from '@Utils/Args/Image.args';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export { ID } from '@Utils/Args/ID.args';

export class ListFilter {
	@ApiProperty({
		description: 'ref of category',
		example: 'carousel',
	})
	@IsOptional()
	@IsString()
	@IsIn(['carousel', 'banner'])
	type?: 'carousel' | 'banner';
}

class PositionRows {
	@ApiProperty({
		description: 'number of imagens on same line for carousels or banners on desktops',
		minimum: 1,
		maximum: 12,
		example: 1,
	})
	@IsNotEmpty()
	@Type(() => Number)
	@IsNumber()
	@IsInt()
	@Min(1)
	@Max(12)
	desktop: number;

	@ApiProperty({
		description: 'number of imagens on same line for carousels or banners on mobile',
		minimum: 1,
		maximum: 12,
		example: 1,
	})
	@IsNotEmpty()
	@Type(() => Number)
	@IsNumber()
	@IsInt()
	@Min(1)
	@Max(12)
	mobile: number;
}

export class SlidePosition implements Omit<ISlidePosition, '_id'> {
	@ApiProperty({
		description: 'name of slide place',
	})
	@IsNotEmpty()
	@IsString()
	name: string;

	@ApiProperty({
		description: 'type of place',
		enum: ['carousel', 'banner'],
	})
	@IsNotEmpty()
	@IsString()
	@IsIn(['carousel', 'banner'])
	type: 'carousel' | 'banner';

	@ApiProperty({
		description: 'number of imagens on same line for banners and carousels',
	})
	@IsNotEmpty()
	@ValidateNested()
	@Type(() => PositionRows)
	rows: PositionRows;
}

export class SlideImage implements Omit<ISlideImage, '_id'> {
	@ApiProperty({
		description: 'name for image',
	})
	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@ValidateNested()
	@Type(() => ImageBothOptional)
	image: ImageBothOptional;

	@IsNotEmpty()
	@IsString()
	slidePosition: string;

	@ApiProperty({
		description: 'image link',
	})
	@IsOptional()
	@IsString()
	url?: string;

	@IsNotEmpty()
	@ValidateNested()
	@Type(() => Publish)
	publish: Publish;
}
