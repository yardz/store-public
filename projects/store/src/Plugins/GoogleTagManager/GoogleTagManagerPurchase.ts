import { Order } from '@lab77store/domain';
import { dataLayer } from './dataLayer';

export const GoogleTagManagerPurchase = ({ order }: { order: Order }) => {
	const event = {
		event: 'purchase',
		ecommerce: {
			currencyCode: 'BRL',
			purchase: {
				actionField: {
					id: order._id,
					revenue: order.orderPrice,
					shipping: order.delivery.price,
					coupon: order.cupon?.code,
				},
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
