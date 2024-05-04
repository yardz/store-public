import { orderSelector } from '@App/Store/Reducers/OrderReducer';
import { useSelector } from 'react-redux';
import { useDeliveryOptions } from '../useDeliveryOptions';

export const useOrderDeliveryOptions = () => {
	const orderDelivery = useSelector(orderSelector.delivery);
	const orderCoupon = useSelector(orderSelector.coupon);
	const orderResume = useSelector(orderSelector.resume);

	return useDeliveryOptions({
		zipCode: orderDelivery?.zipCode || '',
		total: orderResume.discountItemsPrice,
		coupon: orderCoupon?.code,
	});
};
