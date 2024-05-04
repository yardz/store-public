import { SlidePosition } from '@lab77store/domain';
import axios from 'axios';

export const savePosition = async ({ _id, ...place }: SlidePosition): Promise<SlidePosition> => {
	if (!!_id) {
		const update = await axios.put<SlidePosition>(`/slides/slide-positions/${_id}`, place);
		return update.data;
	}
	const create = await axios.post<SlidePosition>('/slides/slide-positions', place);
	return create.data;
};
