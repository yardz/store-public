import { useReduxOrderCoupon } from './useReduxOrderCoupon';
import { useReduxOrderDelivery } from './useReduxOrderDelivery';
import { useReduxOrderItems } from './useReduxOrderItems';
import { useReduxOrderResume } from './useReduxOrderResume';

export const useReduxOrderEffect = () => {
	useReduxOrderItems();
	useReduxOrderCoupon();
	useReduxOrderDelivery();
	useReduxOrderResume();
};
