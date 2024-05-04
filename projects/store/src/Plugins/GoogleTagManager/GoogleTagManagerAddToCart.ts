import { CartItem } from '@lab77store/database';
import { dataLayer } from './dataLayer';

export const GoogleTagManagerAddToCart = ({ item }: { item: CartItem }) => {
	const event = {
		event: 'add_to_cart',
		ecommerce: {
			currencyCode: 'BRL',
			add: {
				products: [
					{
						name: item.name,
						id: item.productId,
						price: item.price,
						variant: item.variationId,
						quantity: 1,
					},
				],
			},
		},
	};
	dataLayer(event);
};
