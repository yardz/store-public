import { OrderItem } from '@lab77store/domain';
import { applyFixedDiscount } from './applyFixedDiscount';

const item = ({ _id: '4', price: 100 } as unknown) as OrderItem;

test('apply the discount when the item price is greater', () => {
	const discountedItem = applyFixedDiscount({ item, discount: 90 });
	expect(discountedItem.price).toBe(10);
});

test('set the item price to 0.01 when the discount is greater then price', () => {
	const discountedItem = applyFixedDiscount({ item, discount: 110 });
	expect(discountedItem.price).toBe(0.01);
});

test('set the item price to 0.01 when the discount is equals then price', () => {
	const discountedItem = applyFixedDiscount({ item, discount: 100 });
	expect(discountedItem.price).toBe(0.01);
});
