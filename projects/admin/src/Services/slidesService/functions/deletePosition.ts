import { SlidePosition } from '@lab77store/domain';
import axios from 'axios';

export const deletePosition = async (_id: string): Promise<SlidePosition> => {
	const del = await axios.delete<SlidePosition>(`/slides/slide-positions/${_id}`);
	return del.data;
};
