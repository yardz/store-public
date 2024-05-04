import { CartItem } from '@lab77store/database';
import { sameItems } from './sameItems';

const item01: CartItem = {
	ref: 'a',
	name: 'A',
	productId: 'a',
	variationId: 'a',
	price: 90,
	quantity: 1,
	stock: 10,
	image: {},
	attributes: { '0': { name: 'Teste', value: 'Teste' } },
};
const item02: CartItem = {
	ref: 'b',
	name: 'B',
	productId: 'a',
	variationId: 'b',
	price: 0,
	quantity: 1,
	stock: 10,
	image: {},
	attributes: { '0': { name: 'Teste', value: 'Teste' } },
};

test('Find all repeated items', () => {
	const merged = sameItems({ item: item01, items: [item01, item01, item02, item02] });
	expect(merged).toEqual([item01, item01]);
});

test('If the item is not in the list', () => {
	const merged = sameItems({ item: item01, items: [item02, item02, item02] });
	expect(merged).toEqual([]);
});
