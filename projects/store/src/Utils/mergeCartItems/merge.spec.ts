import { CartItem } from '@lab77store/database';
import { merge } from './merge';

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
const item03: CartItem = {
	ref: 'c',
	name: 'C',
	productId: 'a',
	variationId: 'c',
	price: 0,
	quantity: 1,
	stock: 10,
	image: {},
	attributes: { '0': { name: 'Teste', value: 'Teste' } },
};

test('Should call the function for each item in the array', () => {
	const mergeFunction = jest.fn();
	merge({ items: [item01, item02, item03], mergeFunction });
	expect(mergeFunction).toBeCalledTimes(3);
	expect(mergeFunction).toHaveBeenNthCalledWith(1, { sameItems: [item03] });
	expect(mergeFunction).toHaveBeenNthCalledWith(2, { sameItems: [item02] });
	expect(mergeFunction).toHaveBeenNthCalledWith(3, { sameItems: [item01] });
});

test('Should call the function for each item only once', () => {
	const mergeFunction = jest.fn();
	mergeFunction.mockImplementation(arg => arg.sameItems[0]);
	merge({ items: [item01, item01, item01, item02, item02, item03, item03], mergeFunction });
	expect(mergeFunction).toBeCalledTimes(3);
});
