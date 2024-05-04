import { Pagination, OrderAdminListFilter } from '@lab77store/domain';
import { ordersService } from 'Services/ordersService';
import useSWR from 'swr';

export const useOrders = (pagination: Pagination, filter: OrderAdminListFilter) => {
	const orders = useSWR(['get-orders', pagination, filter], (...keys) => ordersService.getOrders(keys[1], keys[2]));
	return {
		isLoading: !orders.error && orders.data === undefined,
		...orders,
	};
};
