import { getCoupon } from '@App/Services';
import useSWR from 'swr';

export const useCoupon = ({ coupon }: { coupon: string }) => {
	const isReady = !!coupon && coupon.length > 3;
	const response = useSWR(isReady ? ['getCoupon', coupon] : null, () => getCoupon({ coupon }));
	const isLoading = isReady && !response.error && !response.data;
	return { ...response, isLoading, isReady };
};
