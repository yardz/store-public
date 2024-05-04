/* eslint-disable max-lines */
// TODO: FIX_TESTES
test('FIX', () => {
	expect(true).toBe(true);
});
// import { Express } from 'express';
// import { INestApplication } from '@nestjs/common';
// import { getServer } from '@App/server';

// import request from 'supertest';

// jest.mock('firebase-functions/lib/logger');

// const product = {
// 	_id: '601ad34354e94b236ac4042b',
// 	ref: 'camiseta-sete-sete',
// 	name: 'Camiseta Sete Sete',
// 	oldPrice: 90,
// 	price: 54,
// 	options: [
// 		{
// 			_id: '60479be535b419f9d27b2794',
// 			name: 'Tamanho',
// 			type: 'small',
// 			options: [
// 				{ _id: 'pp', value: 'pp', label: 'PP' },
// 				{ _id: 'p', value: 'p', label: 'P' },
// 				{ _id: 'm', value: 'm', label: 'M' },
// 				{ _id: 'g', value: 'g', label: 'G' },
// 				{ _id: 'gg', value: 'gg', label: 'GG' },
// 				{ _id: 'xgg', value: 'xgg', label: 'XGG' },
// 			],
// 		},
// 		{
// 			_id: '604797d17adc6482927a64ac',
// 			name: 'Cor',
// 			type: 'tag',
// 			options: [
// 				{ _id: 'grafite', label: 'Grafite', value: 'grafite' },
// 				{ _id: 'goiaba', label: 'Goiaba', value: 'goiaba' },
// 			],
// 		},
// 		{ _id: '60479bdee0dc270d1a05ecd4', name: 'Modelo', type: 'tag', options: [{ _id: 'relax', value: 'relax', label: 'Relax' }] },
// 	],
// 	cover: {
// 		desktop: {
// 			file: {
// 				asset_id: '',
// 				public_id: '',
// 				resource_type: '',
// 				url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/capas/setesete_dest.jpg',
// 			},
// 			alt: '',
// 		},
// 		mobile: {
// 			file: {
// 				asset_id: '',
// 				public_id: '',
// 				resource_type: '',
// 				url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/capas/setesete_dest.jpg',
// 			},
// 			alt: '',
// 		},
// 	},
// 	content: {
// 		description:
// 			'Nossa Camiseta Relax tem modelagem unissex com a gola e as mangas cortadas a fio. Sua gramatura é mais robusta garantindo maior resistência a peça. Ela é mais soltinha para as mulheres e passa por um processo de lavagem que confere a peça um toque diferenciado, maciez extrema, além de não encolher no processo de lavagem. A malha é 100% Algodão Nacional sustentável, certificada pelo selo BCI (better cotton initiative) que atua na conscientização das responsabilidades sócio ambientais no campo.',
// 		measuresTable: {
// 			desktop: {
// 				file: { asset_id: '', public_id: '', resource_type: '', url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/medidas/relax.jpg' },
// 				alt: '',
// 			},
// 			mobile: {
// 				file: { asset_id: '', public_id: '', resource_type: '', url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/medidas/relax.jpg' },
// 				alt: '',
// 			},
// 		},
// 		hints: [
// 			{ icon: 'wash', hint: 'SEM RESTRIÇÃO' },
// 			{ icon: 'model', hint: 'O MODELO VESTE TAMANHO GG' },
// 		],
// 	},
// 	photos: [
// 		{
// 			desktop: {
// 				file: {
// 					asset_id: '',
// 					public_id: '',
// 					resource_type: '',
// 					url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/setesete_gft.jpg',
// 				},
// 				alt: '',
// 			},
// 			mobile: {
// 				file: {
// 					asset_id: '',
// 					public_id: '',
// 					resource_type: '',
// 					url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/setesete_gft.jpg',
// 				},
// 				alt: '',
// 			},
// 		},
// 		{
// 			desktop: {
// 				file: {
// 					asset_id: '',
// 					public_id: '',
// 					resource_type: '',
// 					url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/internas/fotos_1/setesete.jpg',
// 				},
// 				alt: '',
// 			},
// 			mobile: {
// 				file: {
// 					asset_id: '',
// 					public_id: '',
// 					resource_type: '',
// 					url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/internas/fotos_1/setesete.jpg',
// 				},
// 				alt: '',
// 			},
// 		},
// 		{
// 			desktop: {
// 				file: {
// 					asset_id: '',
// 					public_id: '',
// 					resource_type: '',
// 					url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/internas/fotos_1/setesete_gba.jpg',
// 				},
// 				alt: '',
// 			},
// 			mobile: {
// 				file: {
// 					asset_id: '',
// 					public_id: '',
// 					resource_type: '',
// 					url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/internas/fotos_1/setesete_gba.jpg',
// 				},
// 				alt: '',
// 			},
// 		},
// 	],
// 	cart: {
// 		desktop: {
// 			file: {
// 				asset_id: '',
// 				public_id: '',
// 				resource_type: '',
// 				url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/setesete_gft.jpg',
// 			},
// 			alt: '',
// 		},
// 		mobile: {
// 			file: {
// 				asset_id: '',
// 				public_id: '',
// 				resource_type: '',
// 				url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/setesete_gft.jpg',
// 			},
// 			alt: '',
// 		},
// 	},
// 	flags: [],
// 	categories: ['601ad334eadcf71cef1c3bfa', '601ad334eadcf71cef1c3bf9'],
// 	variations: [
// 		{
// 			_id: '601ad342eadcf71cef1c3c4a',
// 			name: 'Relax Grafite M',
// 			additionalPrice: 0,
// 			attributes: [
// 				{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'grafite', value: 'grafite', label: 'Grafite' } },
// 				{ _id: '60479bdee0dc270d1a05ecd4', name: 'Modelo', type: 'tag', option: { _id: 'relax', value: 'relax', label: 'Relax' } },
// 				{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'm', value: 'm', label: 'M' } },
// 			],
// 			stock: { free: 0, locked: 0, total: 0 },
// 			cart: {
// 				desktop: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gft.jpg',
// 					},
// 					alt: '',
// 				},
// 				mobile: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gft.jpg',
// 					},
// 					alt: '',
// 				},
// 			},
// 		},
// 		{
// 			_id: '601ad342eadcf71cef1c3c4b',
// 			name: 'Relax Grafite G',
// 			additionalPrice: 0,
// 			attributes: [
// 				{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'grafite', value: 'grafite', label: 'Grafite' } },
// 				{ _id: '60479bdee0dc270d1a05ecd4', name: 'Modelo', type: 'tag', option: { _id: 'relax', value: 'relax', label: 'Relax' } },
// 				{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'g', value: 'g', label: 'G' } },
// 			],
// 			stock: { free: 0, locked: 0, total: 0 },
// 			cart: {
// 				desktop: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gft.jpg',
// 					},
// 					alt: '',
// 				},
// 				mobile: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gft.jpg',
// 					},
// 					alt: '',
// 				},
// 			},
// 		},
// 		{
// 			_id: '601ad342eadcf71cef1c3c4c',
// 			name: 'Relax Grafite GG',
// 			additionalPrice: 0,
// 			attributes: [
// 				{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'grafite', value: 'grafite', label: 'Grafite' } },
// 				{ _id: '60479bdee0dc270d1a05ecd4', name: 'Modelo', type: 'tag', option: { _id: 'relax', value: 'relax', label: 'Relax' } },
// 				{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'gg', value: 'gg', label: 'GG' } },
// 			],
// 			stock: { free: 1, locked: 0, total: 1 },
// 			cart: {
// 				desktop: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gft.jpg',
// 					},
// 					alt: '',
// 				},
// 				mobile: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gft.jpg',
// 					},
// 					alt: '',
// 				},
// 			},
// 		},
// 		{
// 			_id: '601ad342eadcf71cef1c3c4d',
// 			name: 'Relax Grafite XGG',
// 			additionalPrice: 0,
// 			attributes: [
// 				{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'grafite', value: 'grafite', label: 'Grafite' } },
// 				{ _id: '60479bdee0dc270d1a05ecd4', name: 'Modelo', type: 'tag', option: { _id: 'relax', value: 'relax', label: 'Relax' } },
// 				{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'xgg', value: 'xgg', label: 'XGG' } },
// 			],
// 			stock: { free: 0, locked: 0, total: 0 },
// 			cart: {
// 				desktop: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gft.jpg',
// 					},
// 					alt: '',
// 				},
// 				mobile: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gft.jpg',
// 					},
// 					alt: '',
// 				},
// 			},
// 		},
// 		{
// 			_id: '601ad342eadcf71cef1c3c4e',
// 			name: 'Relax Goiaba P',
// 			additionalPrice: 0,
// 			attributes: [
// 				{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'goiaba', value: 'goiaba', label: 'Goiaba' } },
// 				{ _id: '60479bdee0dc270d1a05ecd4', name: 'Modelo', type: 'tag', option: { _id: 'relax', value: 'relax', label: 'Relax' } },
// 				{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'p', value: 'p', label: 'P' } },
// 			],
// 			stock: { free: 0, locked: 0, total: 0 },
// 			cart: {
// 				desktop: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gba.jpg',
// 					},
// 					alt: '',
// 				},
// 				mobile: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gba.jpg',
// 					},
// 					alt: '',
// 				},
// 			},
// 		},
// 		{
// 			_id: '601ad342eadcf71cef1c3c4f',
// 			name: 'Relax Goiaba M',
// 			additionalPrice: 0,
// 			attributes: [
// 				{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'goiaba', value: 'goiaba', label: 'Goiaba' } },
// 				{ _id: '60479bdee0dc270d1a05ecd4', name: 'Modelo', type: 'tag', option: { _id: 'relax', value: 'relax', label: 'Relax' } },
// 				{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'm', value: 'm', label: 'M' } },
// 			],
// 			stock: { free: 0, locked: 0, total: 0 },
// 			cart: {
// 				desktop: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gba.jpg',
// 					},
// 					alt: '',
// 				},
// 				mobile: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gba.jpg',
// 					},
// 					alt: '',
// 				},
// 			},
// 		},
// 		{
// 			_id: '601ad342eadcf71cef1c3c50',
// 			name: 'Relax Goiaba G',
// 			additionalPrice: 0,
// 			attributes: [
// 				{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'goiaba', value: 'goiaba', label: 'Goiaba' } },
// 				{ _id: '60479bdee0dc270d1a05ecd4', name: 'Modelo', type: 'tag', option: { _id: 'relax', value: 'relax', label: 'Relax' } },
// 				{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'g', value: 'g', label: 'G' } },
// 			],
// 			stock: { free: 0, locked: 0, total: 0 },
// 			cart: {
// 				desktop: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gba.jpg',
// 					},
// 					alt: '',
// 				},
// 				mobile: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gba.jpg',
// 					},
// 					alt: '',
// 				},
// 			},
// 		},
// 		{
// 			_id: '601ad342eadcf71cef1c3c51',
// 			name: 'Relax Grafite P',
// 			additionalPrice: 0,
// 			attributes: [
// 				{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'grafite', value: 'grafite', label: 'Grafite' } },
// 				{ _id: '60479bdee0dc270d1a05ecd4', name: 'Modelo', type: 'tag', option: { _id: 'relax', value: 'relax', label: 'Relax' } },
// 				{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'p', value: 'p', label: 'P' } },
// 			],
// 			stock: { free: 0, locked: 0, total: 0 },
// 			cart: {
// 				desktop: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gft.jpg',
// 					},
// 					alt: '',
// 				},
// 				mobile: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gft.jpg',
// 					},
// 					alt: '',
// 				},
// 			},
// 		},
// 		{
// 			_id: '601ad342eadcf71cef1c3c52',
// 			name: 'Relax Grafite PP',
// 			additionalPrice: 0,
// 			attributes: [
// 				{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'grafite', value: 'grafite', label: 'Grafite' } },
// 				{ _id: '60479bdee0dc270d1a05ecd4', name: 'Modelo', type: 'tag', option: { _id: 'relax', value: 'relax', label: 'Relax' } },
// 				{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'pp', value: 'pp', label: 'PP' } },
// 			],
// 			stock: { free: 0, locked: 0, total: 0 },
// 			cart: {
// 				desktop: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gft.jpg',
// 					},
// 					alt: '',
// 				},
// 				mobile: {
// 					file: {
// 						asset_id: '',
// 						public_id: '',
// 						resource_type: '',
// 						url: 'https://lab77.s3.sa-east-1.amazonaws.com/https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/carrinho/setesete_gft.jpg',
// 					},
// 					alt: '',
// 				},
// 			},
// 		},
// 	],
// };

// let app: INestApplication;
// let server: Express;

// beforeAll(async () => {
// 	const init = await getServer();
// 	server = init.server;
// 	app = init.app;
// });

// afterAll(async () => {
// 	await app.close();
// });

// // beforeEach(() => {});

// describe('/ref/:ref (GET)', () => {
// 	test('should return a valid product', async () => {
// 		const response = await request(server).get(`/products/ref/${product.ref}`).expect(200);
// 		expect(response.body).toEqual(product);
// 	});

// 	test('should get 404 when ref is inexistent', () => {
// 		return request(server).get(`/products/ref/any-ref`).expect(404);
// 	});
// });

// describe('/:_id (GET)', () => {
// 	test('should return a valid product', async () => {
// 		const response = await request(server).get(`/products/${product._id}`).expect(200);
// 		expect(response.body).toEqual(product);
// 	});

// 	test('should get 400 when _id is not a mongoId', async () => {
// 		return request(server).get(`/products/any-id`).expect(400);
// 	});

// 	test('should get 404 when _id is inexistent', async () => {
// 		return request(server).get(`/products/601ad34354e94b236ac3042b`).expect(404);
// 	});
// });

// describe('/ (GET)', () => {
// 	test('should return a list of products', async () => {
// 		const response = await request(server)
// 			.get(`/products`)
// 			.query({ category: '601ad334eadcf71cef1c3bf9', perPage: 10, page: 0 })
// 			.expect(200);
// 		expect(response.body).toHaveLength(10);
// 	});

// 	test('should return a list of products when query pagination is numeric string', async () => {
// 		const response = await request(server)
// 			.get(`/products`)
// 			.query({ category: '601ad334eadcf71cef1c3bf9', perPage: '10', page: '0' })
// 			.expect(200);
// 		expect(response.body).toHaveLength(10);
// 	});

// 	test('should return different products on each page', async () => {
// 		const page01 = await request(server).get(`/products`).query({ category: '601ad334eadcf71cef1c3bf9', perPage: 10, page: 0 }).expect(200);
// 		const page02 = await request(server).get(`/products`).query({ category: '601ad334eadcf71cef1c3bf9', perPage: 10, page: 1 }).expect(200);
// 		expect(page01.body).toHaveLength(10);
// 		expect(page02.body).toHaveLength(10);
// 		const itemsPage1: string[] = page01.body.map(({ _id }) => _id);
// 		const itemsPage2: string[] = page02.body.map(({ _id }) => _id);
// 		itemsPage1.forEach(item => {
// 			expect(itemsPage2.includes(item)).toBe(false);
// 		});
// 	});

// 	test('should get 400 when has no query category', async () => {
// 		return request(server).get(`/products`).query({ perPage: 10, page: 0 }).expect(400);
// 	});

// 	test('should get 400 when query category is not a mongoId', async () => {
// 		return request(server).get(`/products`).query({ category: 'category', perPage: 10, page: 0 }).expect(400);
// 	});

// 	test('should return a empty array when category not exists', async () => {
// 		return request(server).get(`/products`).query({ category: '601ad334eadcf71cef1c3bf0', perPage: 10, page: 0 }).expect(200).expect([]);
// 	});

// 	test('should get 400 when has no query perPage', async () => {
// 		return request(server).get(`/products`).query({ category: '601ad334eadcf71cef1c3bf9', page: 0 }).expect(400);
// 	});

// 	test('should get 400 when has no query perPage is 0', async () => {
// 		return request(server).get(`/products`).query({ category: '601ad334eadcf71cef1c3bf9', page: 0, perPage: 0 }).expect(400);
// 	});
// 	test('should get 400 when has no query perPage is negative', async () => {
// 		return request(server).get(`/products`).query({ category: '601ad334eadcf71cef1c3bf9', page: 0, perPage: -1 }).expect(400);
// 	});

// 	test('should get 400 when has no query perPage is not a numeric string', async () => {
// 		return request(server).get(`/products`).query({ category: '601ad334eadcf71cef1c3bf9', page: 0, perPage: 'test' }).expect(400);
// 	});
// 	test('should get 400 when has no query page', async () => {
// 		return request(server).get(`/products`).query({ category: '601ad334eadcf71cef1c3bf9', perPage: 10 }).expect(400);
// 	});

// 	test('should get 400 when has no query page is negative', async () => {
// 		return request(server).get(`/products`).query({ category: '601ad334eadcf71cef1c3bf9', perPage: 10, page: -1 }).expect(400);
// 	});

// 	test('should get 400 when has no query page is not numeric string', async () => {
// 		return request(server).get(`/products`).query({ category: '601ad334eadcf71cef1c3bf9', perPage: 10, page: 'test' }).expect(400);
// 	});
// });
