import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useOrder, usePayment } from '@App/Hooks';
import { authSelector } from '@App/Store/Reducers/AuthReducer';
import { useRouter } from 'next/router';
import { GoogleTagManagerPurchase } from '@App/Plugins/GoogleTagManager/GoogleTagManagerPurchase';
import { SmartHintOrderCompleted } from '@App/Plugins/SmartHint/SmartHintOrderCompleted';
import { useIsActiveSmartHint } from '@App/Plugins/SmartHint/useIsActiveSmartHint';

export const useApplicationHooksCreateOrder = ({ orderId }: { orderId: string }) => {
	const { isFallback } = useRouter();
	const auth = useSelector(authSelector.auth);
	const ready = !isFallback && auth === 'authenticated';
	const order = useOrder({ orderId, ready });
	const payment = usePayment({ orderId, ready });
	const isActiveSmartHint = useIsActiveSmartHint();

	useEffect(() => {
		if (!ready) return;
		if (!order?.data) return;
		GoogleTagManagerPurchase({ order: order.data });
	}, [order.data, ready]);

	useEffect(() => {
		if (!ready) return;
		if (!isActiveSmartHint) return;
		if (!order?.data) return;
		if (!payment.isReady || !payment.data) return;
		SmartHintOrderCompleted({ order: order.data, payment: payment.data });
	}, [isActiveSmartHint, order.data, payment.data, payment.isReady, ready]);
};
