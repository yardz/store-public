import firebase from '@App/Configs/firebase';
import { store } from '@App/Store';
import { cartSlice } from '@App/Store/Reducers/CartReducer';
import { orderSlice } from '@App/Store/Reducers/OrderReducer';
import { mergeCartItems } from '@App/Utils';
import { Cart } from '@lab77store/database';

export const mergeStore = async (cartRef: firebase.database.Reference) => {
	const databaseCart: Cart | null = (await cartRef.once('value')).val();
	const localCart = store.getState().cart;
	const localOrder = store.getState().order;

	const merged = mergeCartItems.merge({ items: [...localCart.items, ...Object.values(databaseCart?.items || {})] });
	const mergeDelivery = databaseCart?.orderDelivery || localOrder.delivery;
	const mergeCoupon = databaseCart?.orderCoupon || localOrder.coupon;

	await Promise.all([
		cartRef.child('items').set(merged),
		cartRef.child('orderDelivery').set(mergeDelivery || null),
		cartRef.child('orderCoupon').set(mergeCoupon || null),
	]);

	const update = [
		cartSlice.actions.setItems({ items: merged }),
		orderSlice.actions.setCoupon({ coupon: mergeCoupon }),
		orderSlice.actions.setDelivery({ delivery: mergeDelivery }),
	];
	update.forEach(action => store.dispatch(action));
};
