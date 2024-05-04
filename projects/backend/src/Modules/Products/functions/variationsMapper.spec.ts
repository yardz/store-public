import { ProductLegacyModel } from '@App/Modules/Legacy/product.legacy.types';
import { variationsMapper } from './variationsMapper';

const variation = { legacyId: 4362, _id: '601ad342eadcf71cef1c3c52' };
const productLegacy = ({
	id: 1,
	cover: 'img/produtos/capas/setesete_dest.jpg',
	hover: null,
	mainPhoto: 'img/produtos/principais/setesete_gft.jpg',
	imagesCartVariations: [
		{ id: 81, img: 'img/produtos/carrinho/setesete_gft.jpg', colorId: 7, productId: 1 },
		{ id: 82, img: 'img/produtos/carrinho/setesete_gba.jpg', colorId: 11, productId: 1 },
	],
	measureTable: {
		url: 'img/medidas/relax.jpg',
	},
	variations: [
		{
			id: 2,
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
		},
		{
			id: 4362,
			price: 90,
			quantity: 0,
			productId: 1,
			preSale: false,
			additionalDaysDelivery: 0,
			matriz_id: 576,
			produto_id: 1,
			matrix: {
				id: 576,
				name: 'Relax Grafite PP',
				quantity: 0,
				modelId: 9,
				colorId: 7,
				sizeId: 7,
				modelo_id: 9,
				cor_id: 7,
				tamanho_id: 7,
				size: { id: 7, name: 'PP', value: 'pp' },
				model: { id: 9, name: 'Relax', value: 'relax' },
				color: { id: 7, name: 'Grafite', value: 'grafite' },
			},
		},
	],
} as unknown) as ProductLegacyModel;

test('Should return te correct ProductAttributes[]', async () => {
	expect(variationsMapper(variation, productLegacy)).toEqual({
		_id: '601ad342eadcf71cef1c3c52',
		additionalPrice: 0,
		attributes: [
			{ _id: '604797d17adc6482927a64ac', name: 'Cor', option: { _id: 'grafite', label: 'Grafite', value: 'grafite' }, type: 'tag' },
			{ _id: '60479bdee0dc270d1a05ecd4', name: 'Modelo', option: { _id: 'relax', label: 'Relax', value: 'relax' }, type: 'tag' },
			{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', option: { _id: 'pp', label: 'PP', value: 'pp' }, type: 'small' },
		],
		cart: {
			desktop: {
				file: {
					asset_id: '',
					public_id: '',
					resource_type: '',
					url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gft.jpg',
				},
			},
			mobile: {
				file: {
					asset_id: '',
					public_id: '',
					resource_type: '',
					url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gft.jpg',
				},
			},
		},
		name: 'Relax Grafite PP',
		stock: { free: 0, locked: 0, total: 0 },
	});
});

test('Should return te when has no variation', async () => {
	expect(variationsMapper(variation, ({ ...productLegacy, variations: [] } as unknown) as ProductLegacyModel)).toEqual({
		_id: '601ad342eadcf71cef1c3c52',
		additionalPrice: 0,
		attributes: [],
		cart: undefined,
		name: '',
		stock: { free: 0, locked: 0, total: 0 },
	});
});
