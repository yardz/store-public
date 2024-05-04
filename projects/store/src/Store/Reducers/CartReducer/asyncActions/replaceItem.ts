import { AppThunk } from '@App/Store';
import { CartItem } from '@lab77store/database';
import { cartSlice } from '../CartReducer';
import firebase from '@App/Configs/firebase';
import { errorLogger, mergeCartItems } from '@App/Utils';
import cloneDeep from 'lodash/cloneDeep';
import { GoogleTagManagerAddToCart } from '@App/Plugins/GoogleTagManager/GoogleTagManagerAddToCart';
import { GoogleTagManagerRemoveToCart } from '@App/Plugins/GoogleTagManager/GoogleTagManagerRemoveToCart';

const replace = (item: CartItem, list: CartItem[]): CartItem[] => {
	const update = cloneDeep(list);
	const index = update.findIndex(i => i.variationId === item.variationId);
	if (index === -1) return list;
	update[index] = item;
	return update;
};

const replaceItemFirebase = async ({ item }: { item: CartItem }) => {
	const user = firebase.auth().currentUser;
	if (!user) throw Error('Invalid user auth');
	const ref = firebase.database().ref(`carts/${user.uid}/items`);
	const databaseItems: CartItem[] = Object.values((await ref.once('value')).val() || {});
	const update = replace(item, databaseItems);
	const items = mergeCartItems.merge({ items: update });
	await ref.set(items);
};

export const replaceItem = ({ item, callback }: { item: CartItem; callback?: () => void }): AppThunk => (dispatch, getState) => {
	const user = firebase.auth().currentUser;
	const currentItems = getState().cart.items;
	const sideEffect = () => {
		const currentItem = currentItems.find(i => i.variationId === item.variationId);
		if (!currentItem) return;
		if (currentItem.quantity === item.quantity) return;
		if (currentItem.quantity < item.quantity) {
			GoogleTagManagerAddToCart({ item });
		} else {
			GoogleTagManagerRemoveToCart({ item });
		}
	};
	if (user) {
		replaceItemFirebase({ item })
			.then(() => {
				sideEffect();
				if (callback) callback();
			})
			.catch(errorLogger);
		return;
	}
	const items = replace(item, currentItems);
	dispatch(cartSlice.actions.setItems({ items }));
	sideEffect();
	if (callback) callback();
};
