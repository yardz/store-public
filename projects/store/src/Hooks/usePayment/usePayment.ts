import { getPayment } from '@App/Services';
import useSWR from 'swr';

export const usePayment = ({ orderId, ready = true }: { orderId: string; ready?: boolean }) => {
	const isReady = !!orderId && ready;
	const payment = useSWR(isReady ? ['getPayment', orderId] : null, () => getPayment({ order: orderId }));
	const isLoading = isReady && !payment.error && !payment.data;
	return { ...payment, isLoading, isReady };
};
