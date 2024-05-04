import { Product, Variation } from '@lab77store/domain';
import isEqual from 'lodash/isEqual';
import { SelectProductOptions } from './useSelectProductOptions';

export const findVariation = ({
	product,
	selectProductOptions,
}: {
	product: Product;
	selectProductOptions: SelectProductOptions;
}): Variation | undefined => {
	if (!selectProductOptions.completed) return;
	const selectedVariation = product.variations.find(variation => {
		for (const variationAttribute of variation.attributes) {
			if (!isEqual(variationAttribute.option._id, selectProductOptions.selected[variationAttribute._id])) return false;
		}
		return true;
	});
	return selectedVariation;
};
