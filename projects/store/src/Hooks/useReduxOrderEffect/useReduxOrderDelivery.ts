import { useEffect } from 'react';
import { orderActions, orderSelector } from '@App/Store/Reducers/OrderReducer';
import { deliveryToOrderDelivery } from '@App/Utils';
import { OrderDelivery } from '@lab77store/database';
import { useDispatch, useSelector } from 'react-redux';
import { useOrderDelivery } from '../useOrderDelivery';
import isEqual from 'lodash/isEqual';

export const useReduxOrderDelivery = () => {
	const orderDelivery = useSelector(orderSelector.delivery);
	const validOderDelivery = useOrderDelivery();
	const dispatch = useDispatch();

	const equal = validOderDelivery.data && isEqual(orderDelivery, deliveryToOrderDelivery({ delivery: validOderDelivery.data }));

	useEffect(() => {
		if (!equal && validOderDelivery.isReady && !validOderDelivery.isLoading) {
			let delivery: OrderDelivery | undefined;
			if (validOderDelivery.data) {
				delivery = deliveryToOrderDelivery({ delivery: validOderDelivery.data });
			}
			dispatch(orderActions.setDelivery({ delivery }));
		}
	}, [dispatch, equal, validOderDelivery]);
};
