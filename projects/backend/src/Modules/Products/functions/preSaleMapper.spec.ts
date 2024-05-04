import { ProductLegacyModel } from '@App/Modules/Legacy/product.legacy.types';
import { preSaleMapper } from './preSaleMapper';

test('Should return te correct PreSale', async () => {
	expect(
		preSaleMapper({
			presaleButtom: 'Pre-Venda',
			btnPreSale: 'Pre-Venda',
			phasePreSale: 'Text-Pre-SALE',
			variations: [
				{
					price: 90,
					preSale: false,
				},
				{
					additionalDaysDelivery: 3,
					price: 100,
					preSale: true,
				},
			],
		} as ProductLegacyModel),
	).toEqual({
		additionalDaysDelivery: 3,
		btnPreSale: 'Pre-Venda',
		price: 90,
		textPreSale: 'Text-Pre-SALE',
	});
});

test('Should return te correct PreSale', async () => {
	expect(
		preSaleMapper({
			variations: [
				{
					price: 90,
					preSale: false,
				},
				{
					additionalDaysDelivery: 3,
					price: 100,
					preSale: true,
				},
			],
		} as ProductLegacyModel),
	).toEqual({
		btnPreSale: undefined,
		textPreSale: undefined,
		additionalDaysDelivery: 3,
		price: 90,
	});
});

test('Should return undefined when has no preSale', async () => {
	expect(
		preSaleMapper({
			variations: [
				{
					price: 90,
					preSale: false,
				},
			],
		} as ProductLegacyModel),
	).toBeUndefined();
});
