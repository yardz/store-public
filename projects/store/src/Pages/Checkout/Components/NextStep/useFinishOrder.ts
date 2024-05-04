import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createBilletOrder, createCreditCardOrder } from '@App/Services';
import { checkoutSelector } from '@App/Store/Reducers/CheckoutReducer';
import { orderSelector } from '@App/Store/Reducers/OrderReducer';
import { cartActions } from '@App/Store/Reducers/CartReducer';
import { errorLogger } from '@App/Utils/logger';
import to from 'await-to-js';

type CheckoutAction = () => void;

export const useFinishOrder = (): [boolean, CheckoutAction] => {
	const delivery = useSelector(orderSelector.delivery);
	const address = useSelector(orderSelector.address);
	const coupon = useSelector(orderSelector.coupon);
	const note = useSelector(orderSelector.note);
	const paymentMethod = useSelector(orderSelector.paymentMethod);
	const cardPayment = useSelector(checkoutSelector.creditCard);
	const dispatch = useDispatch();

	const [disabled, setDisabled] = useState(false);
	const router = useRouter();

	const invalidMessage = () => {
		if (!address) {
			toast.error('Selecione um endereço');
			return;
		}
		if (!delivery) {
			toast.error('Uma opção de entrega');
			return;
		}
		if (!paymentMethod) {
			toast.error('Uma opção método de pagamento');
			return;
		}
		if (paymentMethod === 'credit card' || !cardPayment) {
			toast.error('Preencha os dados do cartão');
		}
	};

	const processOrder = async (createOrder: Promise<{ orderId: string }>) => {
		const [err, order] = await to(createOrder);
		if (err || !order) {
			toast.error('Ocorreu um erro ao tentar finalizar a sua compra, por favor, verifique seus dados');
			setDisabled(false);
			return;
		}
		router
			.push(`/compra-finalizada/${order.orderId}`)
			.then(() => {
				dispatch(cartActions.cleanCart({}));
			})
			.catch(errorLogger);
	};

	const finishOrderCreditCard = async () => {
		if (!address || !delivery || !paymentMethod || !cardPayment) {
			invalidMessage();
			return;
		}
		setDisabled(true);
		const createOrder = createCreditCardOrder({ addressId: address._id, delivery: delivery._id, coupon: coupon?.code, note, cardPayment });
		await processOrder(createOrder);
	};

	const finishOrderBillet = async () => {
		if (!address || !delivery || !paymentMethod) {
			invalidMessage();
			return;
		}
		setDisabled(true);
		const createOrder = createBilletOrder({ addressId: address._id, delivery: delivery._id, coupon: coupon?.code, note });
		await processOrder(createOrder);
	};

	const checkout = () => {
		if (paymentMethod === 'credit card') {
			finishOrderCreditCard().catch(errorLogger);
		}
		if (paymentMethod === 'billet') {
			finishOrderBillet().catch(errorLogger);
		}
	};

	return [!disabled, checkout];
};
