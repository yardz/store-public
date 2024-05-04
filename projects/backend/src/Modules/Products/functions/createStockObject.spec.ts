import { VariationLegacyModel } from '@App/Modules/Legacy/variations.legacy.types';
import { createStockObject } from './createStockObject';

const variation = { quantity: 1, matrix: { quantity: 2 } };

test('Should return an Stock', async () => {
	expect(createStockObject(variation as VariationLegacyModel)).toEqual({ free: 3, locked: 0, total: 3 });
});
