import { getCategories } from '@App/Services';
import useSWR from 'swr';

export const useCategories = () => {
	const categories = useSWR('getCategories', () => getCategories());
	const isLoading = !categories.error && !categories.data;
	return { ...categories, isLoading };
};
