import { CartItem } from '@lab77store/database';
import { dataLayer } from './dataLayer';

export const GoogleTagManagerRemoveToCart = ({ item }: { item: CartItem }) => {
	const event = {
		event: 'remove_from_cart',
		ecommerce: {
			currencyCode: 'BRL',
			remove: {
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
