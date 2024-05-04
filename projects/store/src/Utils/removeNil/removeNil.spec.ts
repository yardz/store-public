import { removeNil } from './removeNil';

describe('removeUndefined', () => {
	it('clean playn object', () => {
		const plainObject = { a: 'a', b: null, c: undefined, d: {}, e: [], f: '' };
		const clean = removeNil(plainObject);
		expect(clean).toEqual({ a: 'a', e: [], f: '' });
	});
});
