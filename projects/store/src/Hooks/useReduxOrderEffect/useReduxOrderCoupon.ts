import { orderActions, orderSelector } from '@App/Store/Reducers/OrderReducer';
import { couponToOrderCoupon } from '@App/Utils';
import isEqual from 'lodash/isEqual';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCoupon } from '../useCoupon';

export const useReduxOrderCoupon = () => {
	const orderCoupon = useSelector(orderSelector.coupon);
	const validCoupon = useCoupon({ coupon: orderCoupon?.code || '' });
	const dispatch = useDispatch();

	const equal = orderCoupon && validCoupon.data && isEqual(orderCoupon, couponToOrderCoupon({ coupon: validCoupon.data }));

	useEffect(() => {
		if (validCoupon.isReady && !validCoupon.isLoading && !equal) {
			dispatch(orderActions.setCoupon({ coupon: validCoupon.data }));
		}
	}, [dispatch, equal, validCoupon]);
};
