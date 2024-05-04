import { Payment } from '@lab77store/domain';
import axios from 'axios';

export const getPayment = async ({ order }: { order: string }): Promise<Payment> => {
	const response = await axios.get<Payment>(`/payments/order/${order}`);
	return response.data;
};
