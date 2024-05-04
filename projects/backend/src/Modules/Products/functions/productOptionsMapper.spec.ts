import { VariationLegacyModel } from '@App/Modules/Legacy/variations.legacy.types';
import { productOptionsMapper } from './productOptionsMapper';

test('Should return te correct ProductAttributes[]', async () => {
	const variations = [
		{
			matrix: {
				color: { value: 'color-value', name: 'color-name' },
				size: { value: 'size-value', name: 'size-name' },
				model: { value: 'model-value', name: 'model-name' },
			},
		},
		{
			matrix: {
				color: { value: 'color-value', name: 'color-name' },
				size: { value: 'size-value', name: 'size-name' },
				model: { value: 'model-value', name: 'model-name' },
			},
		},
		{
			matrix: {
				color: { value: 'color-value-2', name: 'color-name' },
				size: { value: 'size-value-2', name: 'size-name' },
				model: { value: 'model-value-2', name: 'model-name' },
			},
		},
		{
			matrix: {
				color: { value: 'color-value-3', name: 'color-name' },
				size: { value: 'size-value-3', name: 'size-name' },
				model: { value: 'model-value-3', name: 'model-name' },
			},
		},
	] as VariationLegacyModel[];
	expect(productOptionsMapper(variations)).toEqual([
		{
			_id: '60479be535b419f9d27b2794',
			name: 'Tamanho',
			options: [
				{ _id: 'size-value', label: 'size-name', value: 'size-value' },
				{ _id: 'size-value-2', label: 'size-name', value: 'size-value-2' },
				{ _id: 'size-value-3', label: 'size-name', value: 'size-value-3' },
			],
			type: 'small',
		},
		{
			_id: '604797d17adc6482927a64ac',
			name: 'Cor',
			options: [
				{ _id: 'color-value', label: 'color-name', value: 'color-value' },
				{ _id: 'color-value-2', label: 'color-name', value: 'color-value-2' },
				{ _id: 'color-value-3', label: 'color-name', value: 'color-value-3' },
			],
			type: 'tag',
		},
		{
			_id: '60479bdee0dc270d1a05ecd4',
			name: 'Modelo',
			options: [
				{ _id: 'model-value', label: 'model-name', value: 'model-value' },
				{ _id: 'model-value-2', label: 'model-name', value: 'model-value-2' },
				{ _id: 'model-value-3', label: 'model-name', value: 'model-value-3' },
			],
			type: 'tag',
		},
	]);
});

test('Should return te correct order on sizes', async () => {
	const variations = [
		{
			matrix: {
				color: { value: 'color-value-2', name: 'color-name' },
				size: { value: 'm', name: 'M' },
				model: { value: 'model-value-2', name: 'model-name' },
			},
		},
		{
			matrix: {
				color: { value: 'color-value', name: 'color-name' },
				size: { value: 'GGG', name: 'GGG' },
				model: { value: 'model-value', name: 'model-name' },
			},
		},
		{
			matrix: {
				color: { value: 'color-value', name: 'color-name' },
				size: { value: 'xgg', name: 'XGG' },
				model: { value: 'model-value', name: 'model-name' },
			},
		},
		{
			matrix: {
				color: { value: 'color-value-3', name: 'color-name' },
				size: { value: 'p', name: 'P' },
				model: { value: 'model-value-3', name: 'model-name' },
			},
		},
	] as VariationLegacyModel[];
	const sizes = productOptionsMapper(variations)[0].options;
	expect(sizes[0]).toEqual({ _id: 'p', value: 'p', label: 'P' });
	expect(sizes[1]).toEqual({ _id: 'm', value: 'm', label: 'M' });
	expect(sizes[2]).toEqual({ _id: 'GGG', value: 'GGG', label: 'GGG' });
	expect(sizes[3]).toEqual({ _id: 'xgg', value: 'xgg', label: 'XGG' });
});
