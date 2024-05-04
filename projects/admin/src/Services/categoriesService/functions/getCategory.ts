import { Category } from '@lab77store/domain';
import axios from 'axios';

export const getCategory = async (_id: string): Promise<Category> => {
	const resp = await axios.get<Category>(`/categories/${_id}`);
	return resp.data;
};
