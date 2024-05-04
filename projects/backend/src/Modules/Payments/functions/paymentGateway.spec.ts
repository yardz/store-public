import { paymentGateway } from './paymentGateway';

test('Should method:"Boleto Bancário"', async () => {
	const status = paymentGateway('Boleto Bancário');
	expect(status).toEqual(['pagarme', 'billet']);
});

test('Should method:"Cartão de Crédito"', async () => {
	const status = paymentGateway('Cartão de Crédito');
	expect(status).toEqual(['pagarme', 'credit card']);
});

test('Should method:"Paypal"', async () => {
	const status = paymentGateway('Paypal');
	expect(status).toEqual(['paypal', 'credit card']);
});

test('Should method:"Pagamento na Loja"', async () => {
	const status = paymentGateway('Pagamento na Loja');
	expect(status).toEqual(['presential', 'money']);
});

test('Should method:"any-string"', async () => {
	const status = paymentGateway('any-string');
	expect(status).toEqual(['not found', 'not found']);
});
