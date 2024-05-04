import { Product } from '@lab77store/domain';
import { dataLayer } from './dataLayer';

export const GoogleTagManagerViewProduct = ({ product }: { product: Product }) => {
	const event = {
		event: 'view_item',
		ecommerce: {
			currencyCode: 'BRL',
			detail: {
				products: [
					{
						id: product._id,
						name: product.name,
						price: product.price,
					},
				],
			},
		},
	};
	dataLayer(event);
};
