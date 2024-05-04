import firebase from '@App/Configs/firebase';
import { store } from '@App/Store';
import { cartSlice } from '@App/Store/Reducers/CartReducer';
import { orderSlice } from '@App/Store/Reducers/OrderReducer';
import { mergeCartItems } from '@App/Utils';
import { Cart } from '@lab77store/database';
import isEqual from 'lodash/isEqual';

export const synchronizeStore = (cartRef: firebase.database.Reference) => {
	cartRef.on('value', snapShot => {
		const cart: Cart | null = snapShot.val();
		const currentCart = store.getState().cart;
		const currentOrder = store.getState().order;
		const updateItems = mergeCartItems.add({ items: Object.values(cart?.items || {}) });

		if (!isEqual(updateItems, currentCart.items)) {
			store.dispatch(cartSlice.actions.setItems({ items: updateItems }));
		}

		if (!isEqual(cart?.orderCoupon, currentOrder.coupon)) {
			store.dispatch(orderSlice.actions.setCoupon({ coupon: cart?.orderCoupon }));
		}
		if (!isEqual(cart?.orderDelivery, currentOrder.delivery)) {
			store.dispatch(orderSlice.actions.setDelivery({ delivery: cart?.orderDelivery }));
		}
	});
};
