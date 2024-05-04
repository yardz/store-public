import { Category } from '@lab77store/domain';
import axios from 'axios';

export const saveCategory = async ({ _id, ...category }: Category): Promise<Category> => {
	if (!!_id) {
		const update = await axios.put<Category>(`/categories/${_id}`, category);
		return update.data;
	}
	const create = await axios.post<Category>('/categories', category);
	return create.data;
};
