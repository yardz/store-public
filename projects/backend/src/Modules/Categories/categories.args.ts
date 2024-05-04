import { IsNotEmpty, IsOptional, IsString, IsMongoId, ValidateNested, IsNumber, Min, IsArray, IsInt } from 'class-validator';
import { Category as ICategory, ParentCategory as IParentCategory } from '@lab77store/domain';
import { Publish } from '@Utils/Args/Publish.args';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { SEO } from '@App/Utils/Args/Seo';

export { ID } from '@Utils/Args/ID.args';

export class ListFilter {
	@ApiProperty({
		description: 'ref of category',
	})
	@IsString()
	@IsOptional()
	ref?: string;
}

class Content {
	@IsOptional()
	@IsMongoId()
	slide01?: string;

	@IsOptional()
	@IsString()
	text01?: string;

	@IsOptional()
	@IsMongoId()
	slide02?: string;

	@IsOptional()
	@IsString()
	text02?: string;

	@IsOptional()
	@IsMongoId()
	slideFooter?: string;
}

class ParentCategory implements IParentCategory {
	@IsOptional()
	@IsMongoId()
	_id: string;

	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsString()
	ref: string;

	@IsNotEmpty()
	@IsNumber()
	@IsInt()
	@Min(0)
	sort: number;
}

export class Category implements Omit<ICategory, '_id'> {
	@IsOptional()
	@IsMongoId()
	parent: string;

	@IsOptional()
	@ValidateNested()
	@IsArray()
	@Type(() => ParentCategory)
	parents: IParentCategory[];

	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsNumber()
	@IsInt()
	@Min(0)
	sort: number;

	@IsNotEmpty()
	@IsString()
	ref: string;

	@IsOptional()
	@IsString()
	password?: string;

	@IsNotEmpty()
	@ValidateNested()
	@Type(() => Publish)
	publish: Publish;

	@IsOptional()
	@ValidateNested()
	@Type(() => SEO)
	seo?: SEO;

	@IsOptional()
	@ValidateNested()
	@Type(() => Content)
	content?: Content;
}
