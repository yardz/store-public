import { Category } from '@lab77store/domain';
import axios from 'axios';

export const getCategories = async (): Promise<Category[]> => {
	const resp = await axios.get<Category[]>('/categories');
	return resp.data;
};
