import { cleanObject } from './cleanObject';

describe('cleanObject', () => {
	it('clean playn object', () => {
		const plainObject = { a: 'a', b: 1, c: 0, d: true, e: false, f: undefined, g: null, h: '', i: {}, j: [] };
		const clean = cleanObject(plainObject);
		expect(clean).toEqual({ a: 'a', b: 1, c: 0, d: true, e: false });
	});

	it('clean deep object', () => {
		const plainObject = {
			a: 'a',
			b: 1,
			c: 0,
			d: [1, 2, undefined, null],
			e: { a: '', b: ' ', c: 1, d: 'd', e: undefined, f: null, g: {}, h: { a: ' ', b: undefined, c: {} } },
		};
		const clean = cleanObject(plainObject);
		expect(clean).toEqual({ a: 'a', b: 1, c: 0, d: [1, 2], e: { b: ' ', c: 1, d: 'd', h: { a: ' ' } } });
	});
});
