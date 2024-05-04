import { CartItem } from '@lab77store/database';
import { Delivery } from '@lab77store/domain';
import { dataLayer } from './dataLayer';

export const GoogleTagManagerAddShippingInfo = ({ delivery, items }: { delivery: Delivery; items: CartItem[] }) => {
	const products = items.map(product => ({
		name: product.name,
		id: product.productId,
		variant: product.variationId,
		price: product.price,
	}));
	const event = {
		event: 'add_shipping_info',
		ecommerce: {
			currencyCode: 'BRL',
			checkout_option: {
				actionField: {
					step: 'select-delivery-method',
					option: delivery.method,
					prive: delivery.price,
					id: delivery._id,
					days: delivery.deliveryTime,
				},
				products,
			},
		},
	};
	dataLayer(event);
};
