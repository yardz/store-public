import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { orderActions, orderSelector } from '@App/Store/Reducers/OrderReducer';

export const useReduxOrderResume = () => {
	const dispatch = useDispatch();

	const { items, coupon, delivery } = useSelector(orderSelector.order);

	// atualiza os itens da ordem
	useEffect(() => {
		dispatch(orderActions.resume());
	}, [dispatch, items, coupon, delivery]);
};
