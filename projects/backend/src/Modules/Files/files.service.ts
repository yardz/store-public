import { Injectable } from '@nestjs/common';
import { CloudinaryService } from '@Modules/Cloudnary/cloudinary.service';
import { File, ImageBothRequired } from '@lab77store/domain';

@Injectable()
export class FilesService {
	constructor(private readonly cloudinaryService: CloudinaryService) {}

	async uploadFile(file: string, folder: string): Promise<File> {
		const upload = await this.cloudinaryService.upload(file, folder);
		return {
			asset_id: upload.asset_id,
			public_id: upload.public_id,
			resource_type: upload.resource_type,
			url: upload.secure_url,
		};
	}

	getImagePath(image: ImageBothRequired): string {
		const basePath = this.cloudinaryService.getBasePath();
		return `${basePath}/${image.desktop.file.public_id}.png`;
	}
}
