const FileSchema = {
	asset_id: { type: String, required: true },
	public_id: { type: String, required: true },
	resource_type: { type: String, required: true },
	url: { type: String, required: true },
};

const ImageFileSchema = {
	file: { type: FileSchema, required: true },
	alt: { type: String, required: false },
};

export const ImageSchemaBothOptional = {
	desktop: { type: ImageFileSchema, required: false },
	mobile: { type: ImageFileSchema, required: false },
};

export const ImageSchemaDesktopRequiredOnly = {
	desktop: { type: ImageFileSchema, required: true },
	mobile: { type: ImageFileSchema, required: false },
};

export const ImageSchemaMobileRequiredOnly = {
	desktop: { type: ImageFileSchema, required: false },
	mobile: { type: ImageFileSchema, required: true },
};

export const ImageSchemaBothRequired = {
	desktop: { type: ImageFileSchema, required: true },
	mobile: { type: ImageFileSchema, required: true },
};
