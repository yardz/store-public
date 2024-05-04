import { ImageBothOptional } from '@lab77store/domain';
import { uploadFile } from './uploadFile';
import { mergeUploadImage } from './mergeUploadImage';
import { cleanObject } from 'Utils/cleanObject';

export interface UploadImage {
	field: string;
	mobile: File | '';
	mobileAlt: string;
	desktop: File | '';
	desktopAlt: string;
}

const upload = async (file: UploadImage, folder: string): Promise<{ field: string; image: ImageBothOptional }> => {
	const [desktop, mobile] = await Promise.all([uploadFile(file.desktop, `${folder}/desktop`), uploadFile(file.mobile, `${folder}/mobile`)]);
	const image: ImageBothOptional = {};
	if (desktop) {
		image.desktop = {
			file: desktop,
			alt: file.desktopAlt,
		};
	}
	if (mobile) {
		image.mobile = {
			file: mobile,
			alt: file.mobileAlt,
		};
	}
	return {
		field: file.field,
		image,
	};
};

export const uploadImage = async <T extends object>(data: T, files: UploadImage[], folder: string): Promise<T> => {
	const filesUploaded = await Promise.all(files.map(file => upload(file, folder)));
	const altsList = files.map(file => ({ mobile: file.mobileAlt, desktop: file.desktopAlt }));
	const dataWithImages = mergeUploadImage(data, filesUploaded, altsList);
	return cleanObject(dataWithImages);
};
