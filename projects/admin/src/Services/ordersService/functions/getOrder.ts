import { OrderAdmin } from '@lab77store/domain';
import axios from 'axios';

export const getOrder = async (_id: string): Promise<OrderAdmin> => {
	const resp = await axios.get<OrderAdmin>(`/order-admin/${_id}`);
	return resp.data;
};
