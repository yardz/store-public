import { InstitutionalPage as IInstitutionalPage } from '@lab77store/domain';
import { ApiProperty } from '@nestjs/swagger';
import { SEO } from '@Utils/Args/Seo';
import { Type } from 'class-transformer';
import { IsMongoId, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';

export { ID } from '@Utils/Args/ID.args';

export class ListFilter {
	@ApiProperty({
		description: 'ref of institutional page',
	})
	@IsString()
	@IsOptional()
	ref?: string;
}

class Content {
	@IsOptional()
	@IsString()
	text01?: string;

	@IsOptional()
	@IsMongoId()
	slide01?: string;

	@IsOptional()
	@IsString()
	text02?: string;

	@IsOptional()
	@IsMongoId()
	slide02?: string;

	@IsOptional()
	@IsString()
	text03?: string;

	@IsOptional()
	@IsMongoId()
	slide03?: string;
}

export class InstitutionalPage implements Omit<IInstitutionalPage, '_id'> {
	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsString()
	ref: string;

	@IsOptional()
	@ValidateNested()
	@Type(() => SEO)
	seo?: SEO;

	@IsOptional()
	@ValidateNested()
	@Type(() => Content)
	content?: Content;
}
