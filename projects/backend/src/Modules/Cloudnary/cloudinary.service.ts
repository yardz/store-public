import { Injectable } from '@nestjs/common';

@Injectable()
export class CloudinaryService {
	async upload(file: string, folder: string) {
		// eslint-disable-next-line global-require
		const urlify = require('urlify').create({
			addEToUmlauts: true,
			szToSs: true,
			toLower: true,
			spaces: '-',
			nonPrintable: '-',
			trim: true,
		});

		const cloudinary = (await import('cloudinary')).v2;
		cloudinary.config({
			cloud_name: 'lab77',
			api_key: '361199949555869',
			api_secret: 'LmiaV9TGLMr1SQ_JP94O09a5MHM',
		});
		const public_id: string = urlify((file.split('/').slice(-1).pop() || '').split('.').slice(0, -1).join('.'));
		return cloudinary.uploader.upload(file, { folder, public_id });
	}

	getBasePath() {
		return 'https://res.cloudinary.com/lab77/image/upload/c_fill,w_420/dpr_3.0/v1';
	}
}
