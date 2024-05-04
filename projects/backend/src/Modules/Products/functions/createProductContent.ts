import { ProductLegacyModel } from '@App/Modules/Legacy/product.legacy.types';
import { ProductHint, ImageBothRequired } from '@lab77store/domain';
import { compact } from 'lodash';
import { createImageObject } from './createImageObject';

interface Input {
	productLegacy: ProductLegacyModel;
}

interface Content {
	description?: string;
	hints?: ProductHint[];
	measuresTable: ImageBothRequired;
	sustainability?: string;
}

/** @deprecated deve ser removido assim que possível */
export const createProductContent = ({ productLegacy }: Input): Content => {
	const { description } = productLegacy;
	const sustainability = productLegacy.descriptionSecondLine || undefined;

	const measuresTable = createImageObject({ path: productLegacy.measureTable.url });
	const wash: ProductHint | undefined = productLegacy.wash ? { icon: 'wash', hint: productLegacy.wash } : undefined;
	const model: ProductHint | undefined = productLegacy.modelMessage ? { icon: 'model', hint: productLegacy.modelMessage } : undefined;

	const hints = compact([wash, model]);
	const content: Content = {
		description,
		measuresTable,
		sustainability,
	};
	if (hints.length) {
		content.hints = hints;
	}
	return content;
};
