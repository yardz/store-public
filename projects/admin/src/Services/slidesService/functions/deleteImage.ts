import { SlideImage } from '@lab77store/domain';
import axios from 'axios';

export const deleteImage = async (_id: string): Promise<SlideImage> => {
	const del = await axios.delete<SlideImage>(`/slides/slide-images/${_id}`);
	return del.data;
};
