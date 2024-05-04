import React from 'react';
import { Forms } from '@App/Components';
import { checkoutActions, CreditCard } from '@App/Store/Reducers/CheckoutReducer';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { orderSelector } from '@App/Store/Reducers/OrderReducer';

const creditCardInitialData: CreditCard = {
	method: 'credit card',
	cardNumber: '',
	holderName: '',
	expirationMonth: 1,
	expirationYear: Number(dayjs().format('YYYY')),
	securityCode: '',
	installments: 1,
};

interface Props {}

export const CreditCardPayment: React.FC<Props> = () => {
	const dispatch = useDispatch();
	const save = async (creditCard: CreditCard) => {
		dispatch(checkoutActions.setCreditCard({ creditCard }));
	};
	const { maxInstallments } = useSelector(orderSelector.resume);

	return (
		<section>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<h3>Dados do cartão de crédito</h3>
					</div>
					<div className="col">
						<Forms.CreditCardForm maxInstallments={maxInstallments} initialValues={creditCardInitialData} action={save} />
					</div>
				</div>
			</div>
		</section>
	);
};
