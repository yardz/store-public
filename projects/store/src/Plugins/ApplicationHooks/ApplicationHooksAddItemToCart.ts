import { CartItem } from '@lab77store/database';
import { GoogleTagManagerAddToCart } from '@App/Plugins/GoogleTagManager/GoogleTagManagerAddToCart';

export const ApplicationHooksAddItemToCart = ({ item }: { item: CartItem }) => {
	GoogleTagManagerAddToCart({ item });
};
