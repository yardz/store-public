import { validateCreditCard } from './validateCreditCard';

test('MasterCard', () => {
	const cardNumber = '5131504416009514';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(true);
});

test('Invalid MasterCard', () => {
	const cardNumber = '5131504416009500';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(false);
});

test('Visa 16 dígitos', () => {
	const cardNumber = '4485154126455311';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(true);
});

test('Invalid Visa 16 dígitos', () => {
	const cardNumber = '4485154126005311';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(false);
});

test('American Express', () => {
	const cardNumber = '344621770055539';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(true);
});

test('Invalid American Express', () => {
	const cardNumber = '344621770050039';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(false);
});

test('Diners Club', () => {
	const cardNumber = '30016622373439';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(true);
});

test('Invalid Diners Club', () => {
	const cardNumber = '30016622003439';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(false);
});

test('Discover', () => {
	const cardNumber = '6011349178971193';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(true);
});

test('Invalid Discover', () => {
	const cardNumber = '6011349178970093';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(false);
});

test('JBC', () => {
	const cardNumber = '3578249743059494';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(true);
});

test('Invalid JBC', () => {
	const cardNumber = '3578249743000494';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(false);
});

test('HiperCard', () => {
	const cardNumber = '6062826718011422';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(true);
});

test('Invalid HiperCard', () => {
	const cardNumber = '6062826718010022';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(false);
});

test('Aura', () => {
	const cardNumber = '5042929062172266';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(true);
});

test('Invalid Aura', () => {
	const cardNumber = '5042929062100266';
	const valid = validateCreditCard({ cardNumber });
	expect(valid).toBe(false);
});
