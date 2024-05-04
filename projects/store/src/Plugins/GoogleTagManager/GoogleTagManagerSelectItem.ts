import { ProductListItem } from '@lab77store/domain';
import { dataLayer } from './dataLayer';

export const GoogleTagManagerSelectItem = ({ product }: { product: ProductListItem }) => {
	const event = {
		event: 'select_item',
		ecommerce: {
			currencyCode: 'BRL',
			click: {
				products: [
					{
						name: product.name,
						id: product._id,
						price: product.price,
					},
				],
			},
		},
	};
	dataLayer(event);
};
