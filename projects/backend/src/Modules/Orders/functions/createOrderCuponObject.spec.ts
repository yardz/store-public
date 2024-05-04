import { DiscountsLegacyModel } from '@App/Modules/Legacy/discounts.legacy.types';
import { createOrderCuponObject } from './createOrderCuponObject';

test('Should return undefined when discounts:undefined', async () => {
	expect(createOrderCuponObject()).toBeUndefined();
});

test('Should return formated discount (shipping:free)', async () => {
	const discount = ({
		id: 1,
		shipping: true,
		code: 'code',
		fixedDiscount: 10,
		percentDiscount: 20,
	} as unknown) as DiscountsLegacyModel;

	expect(createOrderCuponObject(discount)).toEqual({
		cuponId: '1',
		code: 'code',
		value: 10,
		percent: 20,
		shipping: 'free',
	});
});

test('Should return formated discount (shipping:normal)', async () => {
	const discount = ({
		id: 1,
		shipping: false,
		code: 'code',
		fixedDiscount: 10,
		percentDiscount: 20,
	} as unknown) as DiscountsLegacyModel;

	expect(createOrderCuponObject(discount)).toEqual({
		cuponId: '1',
		code: 'code',
		value: 10,
		percent: 20,
		shipping: 'normal',
	});
});
