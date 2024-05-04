import { CartItem } from '@lab77store/database';
import { PaymentMethod } from '@lab77store/domain';
import { dataLayer } from './dataLayer';

export const GoogleTagManagerAddPaymentInfo = ({ paymentMethod, items }: { paymentMethod: PaymentMethod; items: CartItem[] }) => {
	const products = items.map(product => ({
		name: product.name,
		id: product.productId,
		variant: product.variationId,
		price: product.price,
	}));
	const event = {
		event: 'add_payment_info',
		ecommerce: {
			currencyCode: 'BRL',
			checkout_option: {
				actionField: { step: 'select-payment-method', option: paymentMethod },
				products,
			},
		},
	};
	dataLayer(event);
};
