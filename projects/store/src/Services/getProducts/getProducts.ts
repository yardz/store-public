import { PaginateList, Pagination, ProductListItem } from '@lab77store/domain';
import axios from 'axios';

export const getProducts = async ({ categoryId, pagination }: { categoryId: string; pagination: Pagination }) => {
	const response = await axios.get<PaginateList<ProductListItem>>('/products', { params: { category: categoryId, ...pagination } });
	return response.data;
};
