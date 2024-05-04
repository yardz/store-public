import { IsOptional, IsString } from 'class-validator';

export class SEO {
	@IsOptional()
	@IsString()
	metaDescription?: string;

	@IsOptional()
	@IsString()
	textSeo?: string;
}
