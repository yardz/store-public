import { Category } from '@lab77store/domain';
import axios from 'axios';

export const getCategoriesByRef = async ({ ref }: { ref: string }): Promise<Category[]> => {
	const resposne = await axios.get<Category[]>('/categories', { params: { ref } });
	return resposne.data;
};
