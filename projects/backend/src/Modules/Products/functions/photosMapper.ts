import { ImageBothRequired } from '@lab77store/domain';
import { createImageObject } from './createImageObject';

interface Input {
	photosUrl: string[];
	mainPhoto: string;
}

/** @deprecated deve ser removido assim que possível */
export const photosMapper = ({ photosUrl, mainPhoto }: Input): ImageBothRequired[] => {
	const photos = [createImageObject({ path: mainPhoto }), ...photosUrl.map(image => createImageObject({ path: image }))];
	return photos;
};
