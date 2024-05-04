import { CartItem } from '@lab77store/database';
import { GoogleTagManagerViewCart } from '@App/Plugins/GoogleTagManager/GoogleTagManagerViewCart';

export const ApplicationHooksViewCartItems = ({ items }: { items: CartItem[] }) => {
	GoogleTagManagerViewCart({ items });
};
