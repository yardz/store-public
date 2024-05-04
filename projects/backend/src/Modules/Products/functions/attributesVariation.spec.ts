import { VariationLegacyModel } from '@App/Modules/Legacy/variations.legacy.types';
import { attributesVariation } from './attributesVariation';

const variation = ({
	id: 2,
	price: 90,
	quantity: 0,
	productId: 1,
	preSale: false,
	additionalDaysDelivery: 0,
	matriz_id: 2,
	produto_id: 1,
	matrix: {
		id: 2,
		name: 'Relax Grafite M',
		quantity: 0,
		modelId: 9,
		colorId: 7,
		sizeId: 9,
		modelo_id: 9,
		cor_id: 7,
		tamanho_id: 9,
		size: { id: 9, name: 'M', value: 'm' },
		model: { id: 9, name: 'Relax', value: 'relax' },
		color: { id: 7, name: 'Grafite', value: 'grafite' },
	},
} as unknown) as VariationLegacyModel;

test('Should return an VariationAttribute[]', async () => {
	expect(attributesVariation(variation)).toEqual([
		{ _id: '604797d17adc6482927a64ac', name: 'Cor', option: { _id: 'grafite', label: 'Grafite', value: 'grafite' }, type: 'tag' },
		{ _id: '60479bdee0dc270d1a05ecd4', name: 'Modelo', option: { _id: 'relax', label: 'Relax', value: 'relax' }, type: 'tag' },
		{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', option: { _id: 'm', label: 'M', value: 'm' }, type: 'small' },
	]);
});

test('Should return undefined when variation is undefined', async () => {
	expect(attributesVariation()).toEqual([]);
});
