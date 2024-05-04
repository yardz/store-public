import { OrderItem } from '@lab77store/domain';
import { applyPercentageDiscount } from './applyPercentageDiscount';

const item = ({ _id: '1', price: 100 } as unknown) as OrderItem;

test('Apply valid discount', () => {
	expect(applyPercentageDiscount({ item, percentage: 0.0001 }).price).toBe(0.01);
	expect(applyPercentageDiscount({ item, percentage: 0.001 }).price).toBe(0.1);
	expect(applyPercentageDiscount({ item, percentage: 0.01 }).price).toBe(1);
	expect(applyPercentageDiscount({ item, percentage: 0.1 }).price).toBe(10);
	expect(applyPercentageDiscount({ item, percentage: 0.3 }).price).toBe(30);
	expect(applyPercentageDiscount({ item, percentage: 0.5 }).price).toBe(50);
	expect(applyPercentageDiscount({ item, percentage: 0.7 }).price).toBe(70);
	expect(applyPercentageDiscount({ item, percentage: 0.9 }).price).toBe(90);
	expect(applyPercentageDiscount({ item, percentage: 0.99 }).price).toBe(99);
	expect(applyPercentageDiscount({ item, percentage: 0.9999 }).price).toBe(99.99);
});

test('Discount cannot reduce the item price below to 0.01', () => {
	expect(applyPercentageDiscount({ item, percentage: 0.00009 }).price).toBe(0.01);
});

test('Discount cannot increase the item price', () => {
	expect(applyPercentageDiscount({ item, percentage: 1.1 }).price).toBe(100);
});

test('Very small discount does not change the item price', () => {
	expect(applyPercentageDiscount({ item, percentage: 0.99999 }).price).toBe(100);
});
