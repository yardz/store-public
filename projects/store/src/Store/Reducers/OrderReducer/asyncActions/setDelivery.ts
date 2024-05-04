import { AppThunk } from '@App/Store';
import { OrderDelivery } from '@lab77store/database';
import { orderSlice } from '../OrderReducer';
import firebase from '@App/Configs/firebase';
import { errorLogger } from '@App/Utils/logger';

const setDeliveryAsync = async ({ delivery }: { delivery?: OrderDelivery }) => {
	const user = firebase.auth().currentUser;
	if (!user) throw Error('Invalid user auth');
	const ref = firebase.database().ref(`carts/${user.uid}/orderDelivery`);
	if (delivery?.deliveryTime) {
		await ref.set(delivery);
	} else {
		await ref.remove();
	}
};

export const setDelivery = ({ delivery, callback }: { delivery?: OrderDelivery; callback?: () => void }): AppThunk => dispatch => {
	const user = firebase.auth().currentUser;
	if (user) {
		setDeliveryAsync({ delivery })
			.then(() => {
				if (callback) callback();
			})
			.catch(errorLogger);
		return;
	}
	if (delivery) {
		dispatch(orderSlice.actions.setDelivery({ delivery }));
	} else {
		dispatch(orderSlice.actions.setCoupon({}));
	}
	if (callback) callback();
};
