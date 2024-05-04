import { store } from '@App/Store/Store';
import { GoogleTagManagerAddPaymentInfo } from '@App/Plugins/GoogleTagManager/GoogleTagManagerAddPaymentInfo';
import { PaymentMethod } from '@lab77store/domain';

export const ApplicationHooksSelectPaymentMethod = ({ paymentMethod }: { paymentMethod: PaymentMethod }) => {
	const { items } = store.getState().cart;
	GoogleTagManagerAddPaymentInfo({ items, paymentMethod });
};
