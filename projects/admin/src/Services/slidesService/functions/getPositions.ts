import { SlidePosition } from '@lab77store/domain';
import axios from 'axios';

export const getPositions = async (type?: string): Promise<SlidePosition[]> => {
	const configs = type ? { params: { type } } : undefined;
	const resp = await axios.get<SlidePosition[]>('/slides/slide-positions', configs);
	return resp.data;
};
