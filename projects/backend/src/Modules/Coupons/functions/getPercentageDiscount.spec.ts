import { getPercentageDiscount } from './getPercentageDiscount';

test('Should return the remaining value of the item in percentage number', () => {
	expect(getPercentageDiscount({ discount: 10 })).toEqual(0.9);
	expect(getPercentageDiscount({ discount: 30 })).toEqual(0.7);
	expect(getPercentageDiscount({ discount: 50 })).toEqual(0.5);
	expect(getPercentageDiscount({ discount: 70 })).toEqual(0.3);
	expect(getPercentageDiscount({ discount: 90 })).toEqual(0.1);
	expect(getPercentageDiscount({ discount: 99 })).toEqual(0.01);
});

test('Should return the remaining value of the item in percentage number minumum 0.0001', () => {
	expect(getPercentageDiscount({ discount: 100 })).toEqual(0.0001);
	expect(getPercentageDiscount({ discount: 110 })).toEqual(0.0001);
	expect(getPercentageDiscount({ discount: 200 })).toEqual(0.0001);
});

test('Should return 1 when discount is 0', () => {
	expect(getPercentageDiscount({ discount: 0 })).toEqual(1);
});
