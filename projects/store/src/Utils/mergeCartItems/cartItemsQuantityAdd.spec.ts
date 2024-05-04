import { CartItem } from '@lab77store/database';
import { cartItemsQuantityAdd } from './cartItemsQuantityAdd';

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

test('add quantity', () => {
	const sameItems = [item, item];
	const merged = cartItemsQuantityAdd({ sameItems });
	expect(merged).toEqual({ ...item, quantity: 2 });
});

test('quantity cannot be greater than stock', () => {
	const sameItems = [item, item, item, item];
	const merged = cartItemsQuantityAdd({ sameItems });
	expect(merged).toEqual({ ...item, quantity: 3 });
});

test('stock is the smallest item on the list', () => {
	const sameItems = [item, item, item, item, { ...item, stock: 2 }];
	const merged = cartItemsQuantityAdd({ sameItems });
	expect(merged).toEqual({ ...item, stock: 2, quantity: 2 });
});
