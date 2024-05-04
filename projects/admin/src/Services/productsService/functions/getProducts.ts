import { Pagination, ProductAdmin, PaginateList, ProductAdminFilter } from '@lab77store/domain';
import axios from 'axios';
import { cleanObject } from 'Utils';

export const getProducts = async (pagination: Pagination, filter: ProductAdminFilter) => {
	const resp = await axios.get<PaginateList<ProductAdmin>>('/products-admin', { params: { ...cleanObject(filter), ...pagination } });
	return resp.data;
};
