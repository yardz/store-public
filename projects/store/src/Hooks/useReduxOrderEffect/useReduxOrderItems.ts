import { cartSelector } from '@App/Store/Reducers/CartReducer';
import { orderActions } from '@App/Store/Reducers/OrderReducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useReduxOrderItems = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(cartSelector.items);

	// atualiza os itens da ordem
	useEffect(() => {
		dispatch(orderActions.setItems({ items: cartItems }));
	}, [dispatch, cartItems]);
};
