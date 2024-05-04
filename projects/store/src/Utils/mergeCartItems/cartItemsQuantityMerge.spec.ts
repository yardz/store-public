import { CartItem } from '@lab77store/database';
import { cartItemsQuantityMerge } from './cartItemsQuantityMerge';

const item: CartItem = {
	ref: 'a',
	name: 'A',
	productId: 'a',
	variationId: 'a',
	price: 90,
	quantity: 1,
	stock: 3,
	image: {},
	attributes: { '0': { name: 'Teste', value: 'Teste' } },
};

test('Uses greater quantity of items', () => {
	const sameItems = [{ ...item, quantity: 3 }, item, { ...item, quantity: 2 }];
	const merged = cartItemsQuantityMerge({ sameItems });
	expect(merged).toEqual({ ...item, quantity: 3 });
});

test('quantity cannot be greater than stock', () => {
	const sameItems = [
		{ ...item, quantity: 3 },
		{ ...item, quantity: 2 },
		{ ...item, stock: 1 },
	];
	const merged = cartItemsQuantityMerge({ sameItems });
	expect(merged).toEqual({ ...item, quantity: 1, stock: 1 });
});

test('stock is the smallest item on the list', () => {
	const sameItems = [item, item, item, item, { ...item, stock: 2 }];
	const merged = cartItemsQuantityMerge({ sameItems });
	expect(merged).toEqual({ ...item, stock: 2, quantity: 1 });
});
