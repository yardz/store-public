import { OrderItem } from '@lab77store/domain';
import { lowestItemPrice } from './lowestItemPrice';

const items = ([
	{ _id: '2', price: 0.001 },
	{ _id: '3', price: 0.01 },
	{ _id: '4', price: 0.1 },
	{ _id: '5', price: 1 },
	{ _id: '6', price: 10 },
] as unknown) as OrderItem[];

test('Should return lowest price', () => {
	const totalValue = lowestItemPrice({ items });
	expect(totalValue).toBe(0.001);
});
