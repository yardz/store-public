import { Category } from '@lab77store/domain';
import axios from 'axios';

export const deleteCategory = async (_id: string): Promise<Category> => {
	const del = await axios.delete<Category>(`/categories/${_id}`);
	return del.data;
};
