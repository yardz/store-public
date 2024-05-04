import { AppThunk } from '@App/Store';
import { CartItem } from '@lab77store/database';
import { cartSlice } from '../CartReducer';
import firebase from '@App/Configs/firebase';
import { errorLogger } from '@App/Utils/logger';
import { mergeCartItems } from '@App/Utils/mergeCartItems';
import { ApplicationHooksAddItemToCart } from '@App/Plugins/ApplicationHooks/ApplicationHooksAddItemToCart';

const addItemFirebase = async ({ newItem }: { newItem: CartItem }) => {
	const user = firebase.auth().currentUser;
	if (!user) throw Error('Invalid user auth');
	const ref = firebase.database().ref(`carts/${user.uid}/items`);
	const databaseItems: CartItem[] = Object.values((await ref.once('value')).val() || {});
	const items = mergeCartItems.add({ items: [...databaseItems, newItem] });
	await ref.set(items);
};

export const addItem = ({ item, callback }: { item: CartItem; callback?: () => void }): AppThunk => (dispatch, getState) => {
	const user = firebase.auth().currentUser;
	if (user) {
		addItemFirebase({ newItem: item })
			.then(() => {
				ApplicationHooksAddItemToCart({ item });
				if (callback) callback();
			})
			.catch(errorLogger);
		return;
	}

	const currentItems = getState().cart.items;
	const items = mergeCartItems.add({ items: [...currentItems, item] });
	dispatch(cartSlice.actions.setItems({ items }));
	ApplicationHooksAddItemToCart({ item });
	if (callback) callback();
};
