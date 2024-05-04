import { OrderCoupon } from '@lab77store/database';
import { Coupon } from '@lab77store/domain';

export const couponToOrderCoupon = ({ coupon }: { coupon: OrderCoupon | Coupon }): OrderCoupon => ({
	code: coupon.code,
	percent: coupon.percent,
	value: coupon.value,
});
