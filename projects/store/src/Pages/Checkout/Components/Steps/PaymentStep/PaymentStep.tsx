import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Payment } from '@App/Components';
import { orderActions, orderSelector } from '@App/Store/Reducers/OrderReducer';
import { PaymentOption } from './PaymentOption';
import { BilletPayment } from './BilletPayment';
import { CreditCardPayment } from './CreditCardPayment';
import { ApplicationHooksSelectPaymentMethod } from '@App/Plugins/ApplicationHooks/ApplicationHooksSelectPaymentMethod';

interface Props {}

export const PaymentStep: React.FC<Props> = () => {
	const paymentMethod = useSelector(orderSelector.paymentMethod);
	const { maxInstallments } = useSelector(orderSelector.resume);
	const dispatch = useDispatch();
	return (
		<section>
			<PaymentOption
				icon={<Payment.PaymentIcon paymentMethod="credit card" />}
				title="Cartão de crédito"
				description={`Parcele em até ${maxInstallments}x`}
				active={paymentMethod === 'credit card'}
				select={() => {
					ApplicationHooksSelectPaymentMethod({ paymentMethod: 'credit card' });
					dispatch(orderActions.setPaymentMethod({ paymentMethod: 'credit card' }));
				}}>
				<CreditCardPayment />
			</PaymentOption>
			<PaymentOption
				icon={<Payment.PaymentIcon paymentMethod="billet" />}
				title="Boleto Bancário"
				description="Até 2 dias útes para aprovação"
				active={paymentMethod === 'billet'}
				select={() => {
					ApplicationHooksSelectPaymentMethod({ paymentMethod: 'billet' });
					dispatch(orderActions.setPaymentMethod({ paymentMethod: 'billet' }));
				}}>
				<BilletPayment />
			</PaymentOption>
		</section>
	);
};
