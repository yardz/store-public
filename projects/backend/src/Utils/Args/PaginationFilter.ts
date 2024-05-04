import { IsNumber, Min, IsNotEmpty, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Pagination } from '@lab77store/domain';

export class PaginationFilter implements Pagination {
	@ApiProperty({
		description: 'items per page for pagination',
		minimum: 1,
		example: 10,
	})
	@Type(() => Number)
	@IsNumber()
	@Min(1)
	@IsNotEmpty()
	@IsInt()
	perPage: number;

	@ApiProperty({
		description: 'page for pagination',
		minimum: 1,
		example: 0,
	})
	@Type(() => Number)
	@IsNumber()
	@Min(1)
	@IsNotEmpty()
	@IsInt()
	page: number;
}
