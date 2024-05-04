import { GoogleTagManagerPurchase } from '@App/Plugins/GoogleTagManager/GoogleTagManagerPurchase';
import { Order } from '@lab77store/domain';

export const ApplicationHooksOrderCompleted = ({ order }: { order: Order }) => {
	GoogleTagManagerPurchase({ order });
};
