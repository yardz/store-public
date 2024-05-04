import { onlyNumbers } from '@App/Utils';
import axios from 'axios';

interface Args {
	cardPayment: {
		method: 'credit card';
		cardNumber: string;
		holderName: string;
		expirationMonth: number;
		expirationYear: number;
		securityCode: string;
		installments: number;
	};
	addressId: string;
	delivery: string;
	coupon?: string;
	note?: string;
}

export const createCreditCardOrder = async ({ addressId, delivery, coupon, note, cardPayment }: Args): Promise<{ orderId: string }> => {
	const card = { ...cardPayment, cardNumber: onlyNumbers(cardPayment.cardNumber) };
	const update = await axios.post<{ orderId: string }>(`/orders/credit-card`, { cardPayment: card, addressId, delivery, coupon, note });
	return update.data;
};
