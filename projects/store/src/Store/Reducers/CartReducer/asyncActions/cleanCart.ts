import { AppThunk } from '@App/Store';
import { cartSlice } from '../CartReducer';
import { orderActions } from '@App/Store/Reducers/OrderReducer';
import firebase from '@App/Configs/firebase';
import { errorLogger } from '@App/Utils/logger/errorLogger';

export const cleanCart = ({ callback }: { callback?: () => void }): AppThunk => dispatch => {
	const user = firebase.auth().currentUser;
	if (user) {
		firebase
			.database()
			.ref(`carts/${user.uid}`)
			.remove()
			.finally(() => {
				if (callback) callback();
			})
			.catch(errorLogger);
		return;
	}
	dispatch(cartSlice.actions.clear());
	dispatch(orderActions.clear());
	if (callback) callback();
};
