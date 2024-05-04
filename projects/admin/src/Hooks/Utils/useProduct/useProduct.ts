import { ProductAdmin } from '@lab77store/domain';
import { productsService } from 'Services/productsService';
import useSWR from 'swr';

export const useProduct = (_id: string) => {
	const product = useSWR<ProductAdmin>(['get-product', _id], (...keys) => productsService.getProduct(keys[1]));
	return {
		isLoading: !product.error && product.data === undefined,
		...product,
	};
};
