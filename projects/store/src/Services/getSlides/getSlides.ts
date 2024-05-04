import { Slide } from '@lab77store/domain';
import axios from 'axios';

export const getSlides = async ({ positionId }: { positionId: string }): Promise<Slide> => {
	const response = await axios.get<Slide>(`/slides/${positionId}`);
	return response.data;
};
