import { checkoutSelector } from '@App/Store/Reducers/CheckoutReducer';
import { orderSelector } from '@App/Store/Reducers/OrderReducer';
import { useSelector } from 'react-redux';

export const useNextStepEnabled = (): boolean => {
	const step = useSelector(checkoutSelector.step);
	const creditCard = useSelector(checkoutSelector.creditCard);
	const order = useSelector(orderSelector.order);

	if (step === 1) {
		return !!order.address;
	}

	if (step === 2) {
		return !!order.address && !!order.delivery;
	}

	if (step === 3) {
		const selectedOptions = !!order.address && !!order.delivery && !!order.paymentMethod;
		const paymentData = order.paymentMethod === 'credit card' ? !!creditCard : true;
		return !!selectedOptions && paymentData;
	}

	return false;
};
