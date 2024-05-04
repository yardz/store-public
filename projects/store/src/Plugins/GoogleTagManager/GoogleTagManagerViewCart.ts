import { CartItem } from '@lab77store/database';
import { dataLayer } from './dataLayer';

export const GoogleTagManagerViewCart = ({ items }: { items: CartItem[] }) => {
	const impressions = items.map((product, index) => ({
		name: product.name,
		id: product.productId,
		variant: product.variationId,
		price: product.price,
		position: index,
	}));
	const event = {
		event: 'view_cart',
		ecommerce: {
			currencyCode: 'BRL',
			impressions,
		},
	};
	dataLayer(event);
};
