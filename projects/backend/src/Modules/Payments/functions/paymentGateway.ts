import { PaymentGateway, PaymentMethod } from '@lab77store/domain';

export const paymentGateway = (method: string | undefined): [PaymentGateway, PaymentMethod] => {
	switch (method) {
		case 'Boleto Bancário':
			return ['pagarme', 'billet'];
		case 'Cartão de Crédito':
			return ['pagarme', 'credit card'];
		case 'Paypal':
			return ['paypal', 'credit card'];
		case 'Pagamento na Loja':
			return ['presential', 'money'];
		default:
			return ['not found', 'not found'];
	}
};
