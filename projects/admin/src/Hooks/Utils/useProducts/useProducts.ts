import { Pagination, ProductAdminFilter } from '@lab77store/domain';
import { productsService } from 'Services/productsService';
import useSWR from 'swr';

export const useProducts = (pagination: Pagination, filter: ProductAdminFilter) => {
	const products = useSWR(['get-products', pagination, filter], (...keys) => productsService.getProducts(keys[1], keys[2]));
	return {
		isLoading: !products.error && products.data === undefined,
		...products,
	};
};
