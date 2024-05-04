import { OrderItem } from '@lab77store/domain';
import { remainingFixDiscount } from './remainingFixDiscount';

const items = ([
	{ _id: '3', price: 0.01 },
	{ _id: '4', price: 100 },
	{ _id: '5', price: 200 },
	{ _id: '6', price: 300 },
] as unknown) as OrderItem[];

test('the remaining discount should not be greater than items total price, each item must cost at least 0.01 (discount is equal items price)', () => {
	const discountPerItem = remainingFixDiscount({ items, discount: 600 });
	expect(discountPerItem).toBe(599.97);
});

test('the remaining discount should not be greater than items total price, each item must cost at least 0.01 (discount is greater than items price)', () => {
	const discountPerItem = remainingFixDiscount({ items, discount: 900 });
	expect(discountPerItem).toBe(599.97);
});

test('the remaining discount should be initial value when items price are greater than discount', () => {
	const discountPerItem = remainingFixDiscount({ items, discount: 300 });
	expect(discountPerItem).toBe(300);
});
