import { OrderItem } from '@lab77store/domain';
import { maxFixDiscountPerItem } from './maxFixDiscountPerItem';

const items = ([
	{ _id: '1', price: 0 },
	{ _id: '2', price: 0.001 },
	{ _id: '3', price: 0.01 },
	{ _id: '4', price: 100 },
	{ _id: '5', price: 200 },
	{ _id: '6', price: 300 },
] as unknown) as OrderItem[];

test('The discountPerItem should be 33.33 when has 3 valid items and discount:100 ', () => {
	const discountPerItem = maxFixDiscountPerItem({ items, discount: 100 });
	expect(discountPerItem).toEqual(33.33);
});

test('The discountPerItem should be 50 when has 3 valid items and discount:150 ', () => {
	const discountPerItem = maxFixDiscountPerItem({ items, discount: 100 });
	expect(discountPerItem).toEqual(33.33);
});

test('The discountPerItem should be the cheapest valid item minus 0.01 when discount is greater than the cheapest item', () => {
	const discountPerItem = maxFixDiscountPerItem({ items, discount: 450 });
	expect(discountPerItem).toEqual(99.99);
});

test('The discountPerItem should be the cheapest valid item minus 0.01 when discount is greater than the total price', () => {
	const discountPerItem = maxFixDiscountPerItem({ items, discount: 600 });
	expect(discountPerItem).toEqual(99.99);
});
