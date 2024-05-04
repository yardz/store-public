/* eslint-disable max-lines */
import { ID } from '@Utils/Args/ID.args';
import { PaginationFilter } from '@App/Utils/Args/PaginationFilter';
import { ProductAdmin, ProductCatalogImages } from '@lab77store/domain';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsNotEmpty, IsOptional, IsMongoId, ValidateNested, IsNumber, Min, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { ImageBothRequired } from '@Utils/Args/Image.args';

export { ID } from '@Utils/Args/ID.args';
export { PaginationFilter } from '@App/Utils/Args/PaginationFilter';

export class REF {
	@ApiProperty({
		description: 'ref of product',
	})
	@IsNotEmpty()
	@IsString()
	ref: string;
}
export class ListFilter extends PaginationFilter {
	@IsNotEmpty()
	@IsString()
	@IsMongoId()
	@ApiProperty({
		description: '_id for category',
	})
	category: string;

	@ApiProperty({
		description:
			'If it is false, it will only return products that are in that category. If a product is only in a child category it will not be returned',
		default: true,
	})
	@IsOptional()
	@IsBoolean()
	noChilds?: boolean;
}

class ProductVariation extends ID {}

class CatalogImage {
	@IsNotEmpty()
	@ValidateNested()
	@Type(() => ImageBothRequired)
	cover: ImageBothRequired;

	@IsOptional()
	@ValidateNested()
	@Type(() => ImageBothRequired)
	hover?: ImageBothRequired;
}
class CatalogImages implements ProductCatalogImages {
	@IsNotEmpty()
	@ValidateNested()
	@Type(() => CatalogImage)
	default: CatalogImage;

	@IsOptional()
	@ValidateNested()
	@Type(() => CatalogImage)
	male?: CatalogImage;

	@IsOptional()
	@ValidateNested()
	@Type(() => CatalogImage)
	female?: CatalogImage;
}
export class Product implements Omit<ProductAdmin, '_id'> {
	@ApiProperty({
		description: 'name of product',
	})
	@IsNotEmpty()
	@IsString()
	name: string;

	@ApiProperty({
		description: 'ref of product',
	})
	@IsNotEmpty()
	@IsString()
	ref: string;

	@ApiProperty({
		description: 'order on lists',
	})
	@IsNotEmpty()
	@IsNumber()
	@Min(0)
	order: number;

	@ApiProperty({
		description: 'categories for this product',
	})
	@IsNotEmpty()
	@IsMongoId({ each: true })
	categories: string[];

	@ApiProperty({
		description: 'if product is active or not',
	})
	@IsNotEmpty()
	@IsBoolean()
	active: boolean;

	@ApiProperty({
		description: 'product variations',
	})
	@IsNotEmpty()
	@ValidateNested()
	@Type(() => ProductVariation)
	variations: ProductVariation[];

	@IsNotEmpty()
	@ValidateNested()
	@Type(() => CatalogImages)
	catalogImages: CatalogImages;
}

class ProductSort extends ID {
	@ApiProperty({
		description: 'order on lists',
	})
	@IsNotEmpty()
	@IsNumber()
	@Min(0)
	order: number;
}

export class ProductAdminSort {
	@IsNotEmpty()
	@ValidateNested()
	@Type(() => ProductSort)
	productSortList: ProductSort[];
}

export class Range {
	@ApiProperty({
		description: 'start item',
	})
	@IsNotEmpty()
	@Type(() => Number)
	@IsNumber()
	@IsInt()
	@Min(0)
	start: number;

	@ApiProperty({
		description: 'last item on list',
	})
	@IsNotEmpty()
	@Type(() => Number)
	@IsNumber()
	@IsInt()
	@Min(0)
	end: number;
}

export class ProductListFilter extends PaginationFilter {
	@ApiProperty({
		description: 'Nome do Produto',
	})
	@IsOptional()
	@IsString()
	name?: string;

	@ApiProperty({
		description: 'Ref',
	})
	@IsOptional()
	@IsString()
	ref?: string;

	@ApiProperty({
		description: 'Ordenacao',
	})
	@IsOptional()
	@Type(() => Number)
	@IsNumber()
	@Min(1)
	@IsInt()
	order?: number;

	@ApiProperty({
		description: 'Ativo',
	})
	@IsOptional()
	@IsBoolean()
	active?: boolean;
}
