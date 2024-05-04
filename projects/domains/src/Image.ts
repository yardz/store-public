export interface File {
	asset_id: string;
	public_id: string;
	resource_type: string;
	url: string;
}
export interface ImageFile {
	file: File;
	alt?: string;
}
export interface ImageBothOptional {
	desktop?: ImageFile;
	mobile?: ImageFile;
}

export interface ImageDesktopRequiredOnly {
	desktop: ImageFile;
	mobile?: ImageFile;
}

export interface ImageMobileRequiredOnly {
	desktop?: ImageFile;
	mobile: ImageFile;
}

export interface ImageBothRequired {
	desktop: ImageFile;
	mobile: ImageFile;
}
