import { OrderItem } from '@lab77store/domain';
import { canApplyDiscount } from './canApplyDiscount';

test('Should apply discount when has valid items and discount greater then 0', () => {
	const items = ([
		{ _id: '1', price: 0 },
		{ _id: '2', price: 0.001 },
		{ _id: '3', price: 0.01 },
		{ _id: '4', price: 0.1 },
		{ _id: '5', price: 1 },
		{ _id: '6', price: 10 },
	] as unknown) as OrderItem[];

	const canApply = canApplyDiscount({ items, discount: 20 });
	expect(canApply).toBe(true);
});

test('Should apply discount when has valid items and discount greater then 0 (discount:0.01)', () => {
	const items = ([
		{ _id: '1', price: 0 },
		{ _id: '2', price: 0.001 },
		{ _id: '3', price: 0.01 },
		{ _id: '4', price: 0.1 },
		{ _id: '5', price: 1 },
		{ _id: '6', price: 10 },
	] as unknown) as OrderItem[];

	const canApply = canApplyDiscount({ items, discount: 0.01 });
	expect(canApply).toBe(true);
});

test('Should cannot apply discount when discount is less then 0', () => {
	const items = ([
		{ _id: '1', price: 0 },
		{ _id: '2', price: 0.001 },
		{ _id: '3', price: 0.01 },
		{ _id: '4', price: 0.1 },
		{ _id: '5', price: 1 },
		{ _id: '6', price: 10 },
	] as unknown) as OrderItem[];

	const canApply = canApplyDiscount({ items, discount: -1 });
	expect(canApply).toBe(false);
});

test('Should cannot apply discount when discount:0', () => {
	const items = ([
		{ _id: '1', price: 0 },
		{ _id: '2', price: 0.001 },
		{ _id: '3', price: 0.01 },
		{ _id: '4', price: 0.1 },
		{ _id: '5', price: 1 },
		{ _id: '6', price: 10 },
	] as unknown) as OrderItem[];

	const canApply = canApplyDiscount({ items, discount: 0 });
	expect(canApply).toBe(false);
});

test('Should cannot apply discount when has no valid items', () => {
	const items = ([
		{ _id: '1', price: 0 },
		{ _id: '2', price: 0.01 },
		{ _id: '3', price: 0.01 },
	] as unknown) as OrderItem[];

	const canApply = canApplyDiscount({ items, discount: 10 });
	expect(canApply).toBe(false);
});
