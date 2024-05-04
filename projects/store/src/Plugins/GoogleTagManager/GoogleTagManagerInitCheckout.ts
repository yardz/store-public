import { CartItem } from '@lab77store/database';
import { dataLayer } from './dataLayer';

export const GoogleTagManagerInitCheckout = ({ items }: { items: CartItem[] }) => {
	const products = items.map(product => ({
		name: product.name,
		id: product.productId,
		variant: product.variationId,
		price: product.price,
	}));
	const event = {
		event: 'begin_checkout',
		ecommerce: {
			currencyCode: 'BRL',
			checkout: { products },
		},
	};
	dataLayer(event);
};
