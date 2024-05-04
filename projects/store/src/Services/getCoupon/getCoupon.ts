import { Coupon } from '@lab77store/domain';
import axios from 'axios';

export const getCoupon = async ({ coupon }: { coupon: string }): Promise<Coupon> => {
	const response = await axios.get<Coupon>(`/coupons/${coupon}`);
	return response.data;
};
