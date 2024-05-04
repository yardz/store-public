import { AppThunk } from '@App/Store';
import { CartItem } from '@lab77store/database';
import { cartSlice } from '../CartReducer';
import firebase from '@App/Configs/firebase';
import { errorLogger, mergeCartItems } from '@App/Utils';
import { ApplicationHooksRemoveItemToCart } from '@App/Plugins/ApplicationHooks/ApplicationHooksRemoveItemToCart';

const remove = (item: CartItem, list: CartItem[]): CartItem[] => list.filter(i => i.variationId !== item.variationId);

const removeItemFirebase = async ({ item }: { item: CartItem }) => {
	const user = firebase.auth().currentUser;
	if (!user) throw Error('Invalid user auth');
	const ref = firebase.database().ref(`carts/${user.uid}/items`);
	const databaseItems: CartItem[] = Object.values((await ref.once('value')).val() || {});
	const update = remove(item, databaseItems);
	const items = mergeCartItems.merge({ items: update });
	await ref.set(items);
};

export const removeItem = ({ item, callback }: { item: CartItem; callback?: () => void }): AppThunk => (dispatch, getState) => {
	const user = firebase.auth().currentUser;
	if (user) {
		removeItemFirebase({ item })
			.then(() => {
				ApplicationHooksRemoveItemToCart({ item });
				if (callback) callback();
			})
			.catch(errorLogger);
		return;
	}
	const currentItems = getState().cart.items;
	const items = remove(item, currentItems);
	dispatch(cartSlice.actions.setItems({ items }));
	ApplicationHooksRemoveItemToCart({ item });
	if (callback) callback();
};
