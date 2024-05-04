import { ProductLegacyModel } from '@App/Modules/Legacy/product.legacy.types';
import { createProductContent } from './createProductContent';

test('Should return an ProductContent with only description', async () => {
	expect(
		createProductContent({
			productLegacy: {
				description: 'first-line',
				modelMessage: 'O MODELO VESTE TAMANHO GG',
				wash: 'SEM RESTRIÇÃO',
				measureTable: { url: 'img/medidas/relax.jpg' },
			} as ProductLegacyModel,
		}),
	).toEqual({
		description: 'first-line',
		hints: [
			{ hint: 'SEM RESTRIÇÃO', icon: 'wash' },
			{ hint: 'O MODELO VESTE TAMANHO GG', icon: 'model' },
		],
		measuresTable: {
			desktop: {
				file: {
					asset_id: '',
					public_id: '',
					resource_type: '',
					url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/medidas/relax.jpg',
				},
			},
			mobile: {
				file: {
					asset_id: '',
					public_id: '',
					resource_type: '',
					url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/medidas/relax.jpg',
				},
			},
		},
	});
});

test('Should return an ProductContent with 2 lines', async () => {
	expect(
		createProductContent({
			productLegacy: {
				description: 'first-line',
				descriptionSecondLine: 'second-line',
				modelMessage: 'O MODELO VESTE TAMANHO GG',
				wash: 'SEM RESTRIÇÃO',
				measureTable: { url: 'img/medidas/relax.jpg' },
			} as ProductLegacyModel,
		}),
	).toEqual({
		description: 'first-line',
		sustainability: 'second-line',
		hints: [
			{ hint: 'SEM RESTRIÇÃO', icon: 'wash' },
			{ hint: 'O MODELO VESTE TAMANHO GG', icon: 'model' },
		],
		measuresTable: {
			desktop: {
				file: {
					asset_id: '',
					public_id: '',
					resource_type: '',
					url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/medidas/relax.jpg',
				},
			},
			mobile: {
				file: {
					asset_id: '',
					public_id: '',
					resource_type: '',
					url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/medidas/relax.jpg',
				},
			},
		},
	});
});

test('Should return an ProductContent with has only second line', async () => {
	expect(
		createProductContent({
			productLegacy: {
				descriptionSecondLine: 'second-line',
				measureTable: { url: 'img/medidas/relax.jpg' },
			} as ProductLegacyModel,
		}),
	).toEqual({
		sustainability: 'second-line',
		measuresTable: {
			desktop: {
				file: {
					asset_id: '',
					public_id: '',
					resource_type: '',
					url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/medidas/relax.jpg',
				},
			},
			mobile: {
				file: {
					asset_id: '',
					public_id: '',
					resource_type: '',
					url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/medidas/relax.jpg',
				},
			},
		},
	});
});
