import { getDeliveryOptions } from '@App/Services';
import { onlyNumbers } from '@App/Utils';
import useSWR from 'swr';

export const useDeliveryOptions = ({ zipCode, total, coupon }: { zipCode: string; total: number; coupon?: string }) => {
	const isReady = onlyNumbers(zipCode).length === 8;
	const deliveryOptions = useSWR(isReady ? ['getDeliveryOptions', zipCode, total, coupon] : null, () =>
		getDeliveryOptions({ zipCode, total, coupon }),
	);
	const isLoading = isReady && !deliveryOptions.error && !deliveryOptions.data;
	return { ...deliveryOptions, isLoading, isReady };
};
