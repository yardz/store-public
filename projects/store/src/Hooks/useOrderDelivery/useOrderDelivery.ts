import { orderSelector } from '@App/Store/Reducers/OrderReducer';
import { useSelector } from 'react-redux';

import { useOrderDeliveryOptions } from '../useOrderDeliveryOptions';

export const useOrderDelivery = () => {
	const orderDelivery = useSelector(orderSelector.delivery);
	const options = useOrderDeliveryOptions();

	const data = options.data?.filter(option => option._id === orderDelivery?._id)?.[0];
	return { ...options, data };
};
