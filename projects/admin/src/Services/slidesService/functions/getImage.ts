import { SlideImage } from '@lab77store/domain';
import axios from 'axios';

export const getImage = async (_id: string): Promise<SlideImage> => {
	const resp = await axios.get<SlideImage>(`/slides/slide-images/${_id}`);
	return resp.data;
};
