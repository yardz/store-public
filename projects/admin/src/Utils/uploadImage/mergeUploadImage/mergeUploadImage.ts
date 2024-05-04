import { ImageBothOptional, ImageFile } from '@lab77store/domain';
import { set, cloneDeep, get } from 'lodash';
import { cleanObject } from 'Utils/cleanObject';
export interface MergeUploadImage {
	field: string;
	image: ImageBothOptional;
}

interface AltFile {
	mobile: string;
	desktop: string;
}

const createImageFile = (img: ImageFile | undefined): ImageFile | undefined => {
	if (!img || !img.file) return;
	return cleanObject(img);
};

export const mergeUploadImage = <T extends object>(data: T, uploads: MergeUploadImage[], altList: AltFile[]): T => {
	const clone = cloneDeep(data);
	uploads.forEach((upload, uploadIndex) => {
		const alt = altList[uploadIndex];
		const desktop = createImageFile(upload.image?.desktop);
		const mobile = createImageFile(upload.image?.mobile);
		if (desktop) {
			set<T>(clone, `${upload.field}.desktop`, desktop);
		}
		if (get(clone, `${upload.field}.desktop`)) {
			set<T>(clone, `${upload.field}.desktop.alt`, alt.desktop);
		}
		if (mobile) {
			set<T>(clone, `${upload.field}.mobile`, mobile);
		}
		if (get(clone, `${upload.field}.mobile`)) {
			set<T>(clone, `${upload.field}.mobile.alt`, alt.mobile);
		}
	});
	return clone;
};
