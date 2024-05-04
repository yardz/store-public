import { Order } from '@lab77store/domain';
import { dataLayer } from './dataLayer';

export const GoogleTagManagerRefund = ({ order }: { order: Order }) => {
	const event = {
		event: 'refund',
		ecommerce: {
			currencyCode: 'BRL',
			refund: {
				actionField: { id: order._id },
				products: order.items.map(item => ({
					name: item.name,
					id: item.productId,
					price: item.price,
					variant: item.variationId,
					quantity: 1,
				})),
			},
		},
	};
	dataLayer(event);
};
