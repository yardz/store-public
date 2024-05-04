import { store } from '@App/Store/Store';
import { GoogleTagManagerAddShippingInfo } from '@App/Plugins/GoogleTagManager/GoogleTagManagerAddShippingInfo';
import { Delivery } from '@lab77store/domain';

export const ApplicationHooksSelectDelivery = ({ delivery }: { delivery: Delivery }) => {
	const { items } = store.getState().cart;
	GoogleTagManagerAddShippingInfo({ delivery, items });
};
