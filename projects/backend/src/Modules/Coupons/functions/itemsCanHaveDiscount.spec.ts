import { OrderItem } from '@lab77store/domain';
import { itemsCanHaveDiscount } from './itemsCanHaveDiscount';

const items = ([
	{ _id: '1', price: 0 },
	{ _id: '2', price: 0.001 },
	{ _id: '3', price: 0.01 },
	{ _id: '4', price: 0.1 },
	{ _id: '5', price: 1 },
	{ _id: '6', price: 10 },
] as unknown) as OrderItem[];

test('Should return only items with a value greater than 0.01', () => {
	const totalValue = itemsCanHaveDiscount({ items });
	expect(totalValue).toEqual([
		{ _id: '4', price: 0.1 },
		{ _id: '5', price: 1 },
		{ _id: '6', price: 10 },
	]);
});
