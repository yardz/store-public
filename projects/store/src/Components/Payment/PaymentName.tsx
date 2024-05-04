import React from 'react';
import { PaymentMethod } from '@lab77store/domain';

interface Props {
	paymentMethod: PaymentMethod;
}
export const PaymentName: React.FC<Props> = ({ paymentMethod }) => {
	if (paymentMethod === 'billet') {
		return <>Boleto</>;
	}
	if (paymentMethod === 'credit card') {
		return <>Cartão de Crédito</>;
	}
	if (paymentMethod === 'money') {
		return <>Pagamento em Dinheiro</>;
	}
	return null;
};
