import { IsNumber, IsArray, IsMongoId } from 'class-validator';

export class ProductsImport {
	@IsNumber()
	id: number;

	@IsArray()
	@IsMongoId({ each: true })
	categories: string[];
}
