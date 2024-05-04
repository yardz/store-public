import { SlideImage } from '@lab77store/domain';
import axios from 'axios';

export const getImages = async (): Promise<SlideImage[]> => {
	const resp = await axios.get<SlideImage[]>('/slides/slide-images');
	return resp.data;
};
