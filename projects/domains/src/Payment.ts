export type PaymentStatus = 'pending' | 'approved' | 'refused' | 'partially canceled' | 'canceled' | 'refund' | 'not found';

export type PaymentGateway = 'pagarme' | 'paypal' | 'presential' | 'braspag' | 'not found';
export type PaymentMethod = 'billet' | 'credit card' | 'money' | 'not found';

export interface Payment {
	_id: string;
	order: string;
	gateway: PaymentGateway; // Pagar.me, Paypal, Paypal
	method: PaymentMethod; // Boleto, Cartão, ETC.
	status: PaymentStatus;
	installments: number; // parcelas
	price: number; // valor que foi pago
	meta?: {
		billet?: {
			url: string;
			barCode: string;
		};
	};
	approvedDate?: number; //  data de aprovação do pagamento
}
