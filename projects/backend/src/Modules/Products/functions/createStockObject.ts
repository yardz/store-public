import { VariationLegacyModel } from '@Modules/Legacy/variations.legacy.types';

/** @deprecated deve ser removido assim que possível */
export const createStockObject = (variation: VariationLegacyModel) => {
	const stock = variation.quantity + variation.matrix.quantity;

	return {
		free: stock,
		locked: 0,
		total: stock,
	};
};
