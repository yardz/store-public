import { Category } from '@lab77store/domain';
import { categoriesService } from 'Services/categoriesService';
import useSWR from 'swr';

export const useCategories = () => {
	const categories = useSWR<Category[]>('get-categories', () => categoriesService.getCategories());

	return {
		isLoading: !categories.error && categories.data === undefined,
		...categories,
	};
};
