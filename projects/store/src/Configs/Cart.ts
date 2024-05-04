import firebase from './firebase';

import { store, persistor } from '@App/Store';
import { cartActions } from '@App/Store/Reducers/CartReducer';
import { orderActions } from '@App/Store/Reducers/OrderReducer';
import { errorLogger } from '@App/Utils/logger';

let prevAuthState: undefined | 'unauthenticated' | 'authenticated';

let cartRef: firebase.database.Reference | null = null;
const cartSync = async (user: firebase.User | null) => {
	if (!!cartRef) {
		cartRef.off();
		cartRef = null;
	}
	if (!user) {
		if (prevAuthState === 'authenticated') {
			store.dispatch(cartActions.cleanCart({}));
			store.dispatch(orderActions.clear());
		}
		persistor.persist();
		prevAuthState = 'unauthenticated';
	}
	if (user) {
		persistor.pause();
		await persistor.purge();
		prevAuthState = 'authenticated';
	}
};

export const CartConfig = () => {
	firebase.auth().onAuthStateChanged(user => {
		cartSync(user).then().catch(errorLogger);
	});
};
