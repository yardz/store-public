import { createImageFileObject } from './createImageFileObject';
import { ImageBothRequired } from '@lab77store/domain';

interface Input {
	path: string;
}

/** @deprecated deve ser removido assim que possível */
export const createImageObject = ({ path }: Input): ImageBothRequired => {
	const imagePath = 'https://lab77.s3.sa-east-1.amazonaws.com/';

	return {
		desktop: {
			file: createImageFileObject({ path: `${imagePath}${path}` }),
		},
		mobile: {
			file: createImageFileObject({ path: `${imagePath}${path}` }),
		},
	};
};
