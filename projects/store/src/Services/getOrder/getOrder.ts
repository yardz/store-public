import { Order } from '@lab77store/domain';
import axios from 'axios';

export const getOrder = async ({ _id }: { _id: string }): Promise<Order> => {
	const response = await axios.get<Order>(`/orders/${_id}`);
	return response.data;
};
