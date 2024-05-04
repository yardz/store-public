import { getOrder } from '@App/Services';
import useSWR from 'swr';

export const useOrder = ({ orderId, ready = true }: { orderId: string; ready?: boolean }) => {
	const isReady = !!orderId && ready;
	const order = useSWR(isReady ? ['getOrder', orderId] : null, () => getOrder({ _id: orderId }));

	const isLoading = isReady && !order.error && !order.data;
	return { ...order, isLoading, isReady };
};
