import { errorLogger } from '@App/Utils';
import { Delivery } from '@lab77store/domain';
import axios from 'axios';

export const getDeliveryOptions = async ({
	zipCode,
	total,
	coupon,
}: {
	zipCode: string;
	total: number;
	coupon?: string;
}): Promise<Delivery[]> => {
	const response = await axios
		.get<Delivery[]>('/deliveries', { params: { zipCode, total, coupon } })
		.catch(error => {
			errorLogger(error);
			throw error;
		});

	return response.data;
};
