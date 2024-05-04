import { StatusLegacyModel } from '@App/Modules/Legacy/status.legacy.types';
import { processOrderStatus } from './processOrderStatus';

test('Should status:"Preparando pedido" equals "processing"', async () => {
	const order = { name: 'Preparando pedido' } as StatusLegacyModel;
	expect(processOrderStatus(order)).toBe('processing');
});

test('Should status:"Parcialmente Devolvido" equals "partially returned"', async () => {
	const order = { name: 'Parcialmente Devolvido' } as StatusLegacyModel;
	expect(processOrderStatus(order)).toBe('partially returned');
});

test('Should status:"Pagamento Recusado" equals "payment refused"', async () => {
	const order = { name: 'Pagamento Recusado' } as StatusLegacyModel;
	expect(processOrderStatus(order)).toBe('payment refused');
});

test('Should status:"Enviado" equals "sent"', async () => {
	const order = { name: 'Enviado' } as StatusLegacyModel;
	expect(processOrderStatus(order)).toBe('sent');
});

test('Should status:"Devolvido" equals "returned"', async () => {
	const order = { name: 'Devolvido' } as StatusLegacyModel;
	expect(processOrderStatus(order)).toBe('returned');
});

test('Should status:"Completo" equals "completed"', async () => {
	const order = { name: 'Completo' } as StatusLegacyModel;
	expect(processOrderStatus(order)).toBe('completed');
});

test('Should status:"Cancelado" equals "canceled"', async () => {
	const order = { name: 'Cancelado' } as StatusLegacyModel;
	expect(processOrderStatus(order)).toBe('canceled');
});

test('Should status:"Aguardando confirmação de pagamento" equals "pending payment"', async () => {
	const order = { name: 'Aguardando confirmação de pagamento' } as StatusLegacyModel;
	expect(processOrderStatus(order)).toBe('pending payment');
});

test('Should status:"SEM STATUS" equals "without status"', async () => {
	const order = { name: 'SEM STATUS' } as StatusLegacyModel;
	expect(processOrderStatus(order)).toBe('without status');
});

test('Should status:any equals "without status"', async () => {
	const order = { name: 'any-string' } as StatusLegacyModel;
	expect(processOrderStatus(order)).toBe('without status');
});

test('Should return "without status" has no status', async () => {
	expect(processOrderStatus()).toBe('without status');
});
