import { Pagination, OrderAdminListItem, PaginateList, OrderAdminListFilter } from '@lab77store/domain';
import axios from 'axios';
import { cleanObject } from 'Utils';

export const getOrders = async (pagination: Pagination, filter: OrderAdminListFilter) => {
	const resp = await axios.get<PaginateList<OrderAdminListItem>>('/orders-admin', {
		params: { ...cleanObject(filter), ...pagination },
	});
	return resp.data;
};
