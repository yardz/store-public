import { paymentStatusById } from './paymentStatusById';

test('Should status 0 equals "not found"', async () => {
	const status = paymentStatusById(0);
	expect(status).toBe('not found');
});

test('Should status 1 equals "pending"', async () => {
	const status = paymentStatusById(1);
	expect(status).toBe('pending');
});

test('Should status 2 equals "approved"', async () => {
	const status = paymentStatusById(2);
	expect(status).toBe('approved');
});

test('Should status 3 equals "approved"', async () => {
	const status = paymentStatusById(3);
	expect(status).toBe('approved');
});

test('Should status 4 equals "approved"', async () => {
	const status = paymentStatusById(4);
	expect(status).toBe('approved');
});

test('Should status 5 equals "canceled"', async () => {
	const status = paymentStatusById(5);
	expect(status).toBe('canceled');
});

test('Should status 6 equals "refused"', async () => {
	const status = paymentStatusById(6);
	expect(status).toBe('refused');
});

test('Should status 7 equals "refused"', async () => {
	const status = paymentStatusById(7);
	expect(status).toBe('refund');
});

test('Should status 8 equals "refused"', async () => {
	const status = paymentStatusById(8);
	expect(status).toBe('partially canceled');
});

test('Should status 9 equals "refused"', async () => {
	const status = paymentStatusById(9);
	expect(status).toBe('not found');
});
