import { IsOptional, ValidateNested, IsString, IsNotEmpty, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';
import {
	ImageBothOptional as BothOptional,
	ImageBothRequired as BothRequired,
	ImageDesktopRequiredOnly as DesktopRequiredOnly,
	ImageMobileRequiredOnly as MobileRequiredOnly,
	ImageFile as IImageFile,
	File,
} from '@lab77store/domain';

class ValidationFile implements File {
	@IsNotEmpty()
	@IsString()
	asset_id: string;

	@IsNotEmpty()
	@IsString()
	public_id: string;

	@IsNotEmpty()
	@IsString()
	resource_type: string;

	@IsNotEmpty()
	@IsString()
	@IsUrl()
	url: string;
}
class ImageFile implements IImageFile {
	@IsNotEmpty()
	@ValidateNested()
	@Type(() => ValidationFile)
	file: ValidationFile;

	@IsOptional()
	@IsString()
	alt?: string;
}

export class ImageBothOptional implements BothOptional {
	@IsOptional()
	@ValidateNested()
	@Type(() => ImageFile)
	desktop?: ImageFile;

	@IsOptional()
	@ValidateNested()
	@Type(() => ImageFile)
	mobile?: ImageFile;
}

export class ImageDesktopRequiredOnly implements DesktopRequiredOnly {
	@IsNotEmpty()
	@ValidateNested()
	@Type(() => ImageFile)
	desktop: ImageFile;

	@IsOptional()
	@ValidateNested()
	@Type(() => ImageFile)
	mobile?: ImageFile;
}

export class ImageMobileRequiredOnly implements MobileRequiredOnly {
	@IsOptional()
	@ValidateNested()
	@Type(() => ImageFile)
	desktop?: ImageFile;

	@IsNotEmpty()
	@ValidateNested()
	@Type(() => ImageFile)
	mobile: ImageFile;
}

export class ImageBothRequired implements BothRequired {
	@IsNotEmpty()
	@ValidateNested()
	@Type(() => ImageFile)
	desktop: ImageFile;

	@IsNotEmpty()
	@ValidateNested()
	@Type(() => ImageFile)
	mobile: ImageFile;
}
