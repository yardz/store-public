import { ProductLegacyModel } from '@Modules/Legacy/product.legacy.types';

/** @deprecated deve ser removido assim que possível */
export const preSaleMapper = (product: ProductLegacyModel) => {
	const variationPreSale = product.variations.filter(variation => variation.preSale);

	if (!variationPreSale.length) {
		return undefined;
	}

	const additionalDaysDelivery = Math.max(...variationPreSale.map(variation => variation.additionalDaysDelivery));
	const { price } = product.variations[0]; // o primeiro preço de uma variação representa o preço de um produto

	return {
		btnPreSale: product.btnPreSale || undefined,
		textPreSale: product.phasePreSale || undefined,
		additionalDaysDelivery,
		price,
	};
};
