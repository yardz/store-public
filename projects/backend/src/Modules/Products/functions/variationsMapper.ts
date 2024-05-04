import { ProductLegacyModel } from '@Modules/Legacy/product.legacy.types';
import { createImageObject } from './createImageObject';
import { attributesVariation } from './attributesVariation';
import { Variation } from '@lab77store/domain';
import { createStockObject } from './createStockObject';
import { Schema } from 'mongoose';

/** @deprecated deve ser removido assim que possível */
export const variationsMapper = (
	variation: { _id: string | Schema.Types.ObjectId; legacyId: number },
	productLegacy: ProductLegacyModel,
): Variation => {
	const variationLegacy = productLegacy.variations.find(v => v.id === variation.legacyId);
	const imageVariation = productLegacy.imagesCartVariations.find(i => i.colorId === variationLegacy?.matrix.color.id);
	const stock = variationLegacy ? createStockObject(variationLegacy) : { free: 0, locked: 0, total: 0 };
	return {
		_id: variation._id.toString(),
		name: variationLegacy?.matrix.name || '',
		additionalPrice: 0, // definido pelo bruno
		attributes: attributesVariation(variationLegacy),
		stock,
		cart: imageVariation ? createImageObject({ path: imageVariation.img }) : undefined,
	};
};
