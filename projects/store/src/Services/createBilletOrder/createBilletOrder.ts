import axios from 'axios';

interface Args {
	addressId: string;
	delivery: string;
	coupon?: string;
	note?: string;
}

export const createBilletOrder = async ({ addressId, delivery, coupon, note }: Args): Promise<{ orderId: string }> => {
	const update = await axios.post<{ orderId: string }>(`/orders/billet`, { addressId, delivery, coupon, note });
	return update.data;
};
