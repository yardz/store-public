import { CartItem } from '@lab77store/database';
import { minStock } from './minStock';

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

describe('minStock', () => {
	it('get min value of list', () => {
		const sameItems = [
			{ ...item, stock: 6 },
			{ ...item, stock: 2 },
		];
		const merged = minStock({ sameItems });
		expect(merged).toEqual(2);
	});
});
