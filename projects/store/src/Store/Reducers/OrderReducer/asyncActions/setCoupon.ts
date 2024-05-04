import { AppThunk } from '@App/Store';
import { OrderCoupon } from '@lab77store/database';
import { Coupon } from '@lab77store/domain';
import { orderSlice } from '../OrderReducer';
import firebase from '@App/Configs/firebase';
import { couponToOrderCoupon, errorLogger } from '@App/Utils';

const setCouponAsync = async ({ coupon }: { coupon?: OrderCoupon | Coupon }) => {
	const user = firebase.auth().currentUser;
	if (!user) throw Error('Invalid user auth');
	const ref = firebase.database().ref(`carts/${user.uid}/orderCoupon`);
	if (coupon) {
		await ref.set(couponToOrderCoupon({ coupon }));
	} else {
		await ref.remove();
	}
};

export const setCoupon = ({ coupon, callback }: { coupon?: OrderCoupon | Coupon; callback?: () => void }): AppThunk => dispatch => {
	const user = firebase.auth().currentUser;
	if (user) {
		setCouponAsync({ coupon })
			.then(() => {
				if (callback) callback();
			})
			.catch(errorLogger);
		return;
	}
	if (coupon) {
		dispatch(orderSlice.actions.setCoupon({ coupon: couponToOrderCoupon({ coupon }) }));
	} else {
		dispatch(orderSlice.actions.setCoupon({}));
	}
	if (callback) callback();
};
