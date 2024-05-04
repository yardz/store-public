import { CartItem } from '@lab77store/database';
import { dataLayer } from './dataLayer';

export const GoogleTagManagerAddToWishlist = ({ item }: { item: CartItem }) => {
	const event = {
		event: 'add_to_wishlist',
		ecommerce: {
			items: [
				{
					item_name: item.name,
					item_id: item.productId,
					price: item.price,
					quantity: 1,
				},
			],
		},
	};
	dataLayer(event);
};
