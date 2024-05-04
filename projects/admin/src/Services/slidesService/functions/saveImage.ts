import { SlideImage } from '@lab77store/domain';
import axios from 'axios';

export const saveImage = async ({ _id, ...image }: SlideImage): Promise<SlideImage> => {
	if (!!_id) {
		const update = await axios.put<SlideImage>(`/slides/slide-images/${_id}`, image);
		return update.data;
	}
	const create = await axios.post<SlideImage>('/slides/slide-images', image);
	return create.data;
};
