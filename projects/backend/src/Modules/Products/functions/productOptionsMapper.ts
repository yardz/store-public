import { VariationLegacyModel } from '@Modules/Legacy/variations.legacy.types';
import { ProductAttributes, Attribute } from '@lab77store/domain';
import { uniqBy } from 'lodash';

const sizeOrder = {
	'30': 1,
	'32': 2,
	'34': 3,
	'36': 4,
	'38': 5,
	'40': 6,
	'42': 7,
	'44': 8,
	'46': 9,
	'48': 10,
	'50': 11,
	'52': 12,
	'54': 13,
	'56': 14,

	tamanhounico: 115,

	pp: 216,
	p: 217,
	m: 218,
	g: 219,
	gg: 220,
	ggg: 221,
	xgg: 222,

	'20x20': 322,
	'40x40': 323,
	'40x60': 324,
};

/** @deprecated deve ser removido assim que possível */
export const productOptionsMapper = (variations: VariationLegacyModel[]): ProductAttributes[] => {
	const colors: Attribute[] = [];
	const models: Attribute[] = [];
	const sizes: Attribute[] = [];

	variations.forEach(variation => {
		const { color, size, model } = variation.matrix;
		colors.push({
			_id: color.value,
			label: color.name,
			value: color.value,
		});
		sizes.push({
			_id: size.value,
			value: size.value,
			label: size.name,
		});
		models.push({
			_id: model.value,
			value: model.value,
			label: model.name,
		});
	});

	const attrColor: ProductAttributes = {
		_id: '604797d17adc6482927a64ac',
		name: 'Cor',
		type: 'tag',
		options: uniqBy(colors, '_id'),
	};
	const attrModel: ProductAttributes = {
		_id: '60479bdee0dc270d1a05ecd4',
		name: 'Modelo',
		type: 'tag',
		options: uniqBy(models, '_id'),
	};

	const optionsSize = uniqBy(sizes, '_id');
	optionsSize.sort((a, b) => sizeOrder[a.value.toLowerCase()] - sizeOrder[b.value.toLowerCase()]);

	const attrSize: ProductAttributes = {
		_id: '60479be535b419f9d27b2794',
		name: 'Tamanho',
		type: 'small',
		options: optionsSize,
	};

	return [attrSize, attrColor, attrModel];
};
