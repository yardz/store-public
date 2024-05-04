import { Order, Pagination } from '@lab77store/domain';
import axios from 'axios';

export const getOrders = async ({ pagination }: { pagination: Pagination }): Promise<Order[]> => {
	const response = await axios.get<Order[]>(`/orders`, { params: { ...pagination } });
	return response.data;
};
