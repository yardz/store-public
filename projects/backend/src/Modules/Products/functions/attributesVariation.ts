import { VariationLegacyModel } from '@Modules/Legacy/variations.legacy.types';
import { VariationAttribute } from '@lab77store/domain';

/** @deprecated deve ser removido assim que possível */
export const attributesVariation = (variation?: VariationLegacyModel): VariationAttribute[] => {
	if (!variation) {
		return [];
	}

	const { color, model, size } = variation.matrix;
	return [
		{
			_id: '604797d17adc6482927a64ac',
			name: 'Cor',
			type: 'tag',
			option: {
				_id: color.value,
				value: color.value,
				label: color.name,
			},
		},
		{
			_id: '60479bdee0dc270d1a05ecd4',
			name: 'Modelo',
			type: 'tag',
			option: {
				_id: model.value,
				value: model.value,
				label: model.name,
			},
		},
		{
			_id: '60479be535b419f9d27b2794',
			name: 'Tamanho',
			type: 'small',
			option: {
				_id: size.value,
				value: size.value,
				label: size.name,
			},
		},
	];
};
