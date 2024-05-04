import { Order, Payment } from '@lab77store/domain';
import NP from 'number-precision';
import { IsActiveSmartHint } from './IsActiveSmartHint';

export const SmartHintOrderCompleted = ({ order, payment }: { order: Order; payment: Payment }) => {
	const isActive = IsActiveSmartHint();
	if (!isActive) return;

	window.SmartHint.Call('setOrder', {
		OrderId: order._id,
		Total: order.orderPrice,
		Freight: order.delivery.price,
		Discount: order.discountPrice,
		BillingMode: payment.method,
		Installments: payment.installments,
		InstallmentsValue: NP.divide(payment.price, payment.installments),
	});

	order.items.forEach(item => {
		window.SmartHint.Call('addItemOrder', {
			Id: item.productId,
			Name: item.name,
			Quantity: 1,
			UnitPrice: item.price,
		});
	});

	window.SmartHint.Call('sendOrder');
};
