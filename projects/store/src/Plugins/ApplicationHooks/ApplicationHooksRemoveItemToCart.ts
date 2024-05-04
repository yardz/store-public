import { CartItem } from '@lab77store/database';
import { GoogleTagManagerRemoveToCart } from '@App/Plugins/GoogleTagManager/GoogleTagManagerRemoveToCart';

export const ApplicationHooksRemoveItemToCart = ({ item }: { item: CartItem }) => {
	GoogleTagManagerRemoveToCart({ item });
};
