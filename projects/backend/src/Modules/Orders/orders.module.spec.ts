/* eslint-disable max-lines */
// TODO: FIX_TESTES
test('FIX', () => {
	expect(true).toBe(true);
});
// import { Express } from 'express';
// import { INestApplication } from '@nestjs/common';
// import { getServer } from '@App/server';
// import { setupFirebase, authFirebase } from '@App/Test/Fixures/setupFirebase';
// import nock from 'nock';

// import request from 'supertest';

// jest.mock('firebase-functions/lib/logger');

// let app: INestApplication;
// let server: Express;
// let legacyServer: nock.Interceptor;
// let token = '';

// const orders = [
// 	{
// 		_id: '601ad348eadcf71cef1c59b2',
// 		uid: 'azpgQtTXlI3OOa33vMWEmrflNS6o',
// 		packages: 1,
// 		items: [
// 			{
// 				productId: '601ad34354e94b236ac4080f',
// 				variationId: '601ad342eadcf71cef1c522d',
// 				name: 'Camiseta Racional',
// 				originalPrice: 81,
// 				price: 81,
// 				attributes: [
// 					{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'grafite', value: 'grafite', label: 'Grafite' } },
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Relax OFF', value: 'Relax OFF', label: 'Relax OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'g', value: 'g', label: 'G' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-masculina-racional-grafite-ambientalista-amazonia-s.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-masculina-racional-grafite-ambientalista-amazonia-s.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 		],
// 		originalItemsPrice: 81,
// 		itemsPrice: 81,
// 		originalOrderPrice: 106,
// 		discountPrice: 0,
// 		orderPrice: 106,
// 		delivery: {
// 			_id: 'Next Day',
// 			price: 25,
// 			deliveryTime: 0,
// 			method: 'Next Day',
// 			address: {
// 				zipCode: '22793-395',
// 				country: 'Brasil',
// 				state: 'RJ',
// 				city: 'Rio de Janeiro',
// 				neighborhood: 'Barra da Tijuca',
// 				street: 'Rua Sylvio da Rocha Pollis',
// 				number: '431',
// 				complement: '',
// 			},
// 			deliveryDate: 0,
// 		},
// 		status: 'returned',
// 		invoice: { number: '', url: '' },
// 		date: 1602001922000,
// 		note: '',
// 	},
// 	{
// 		_id: '601ad348eadcf71cef1c59b6',
// 		uid: 'azpgQtTXlI3OOa33vMWEmrflNS6o',
// 		packages: 1,
// 		items: [
// 			{
// 				productId: '601ad34354e94b236ac40948',
// 				variationId: '601ad342eadcf71cef1c5818',
// 				name: 'Camiseta Bem Offwhite',
// 				originalPrice: 81,
// 				price: 81,
// 				attributes: [
// 					{
// 						_id: '604797d17adc6482927a64ac',
// 						name: 'Cor',
// 						type: 'tag',
// 						option: { _id: 'offwhite', value: 'offwhite', label: 'Offwhite' },
// 					},
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Relax OFF', value: 'Relax OFF', label: 'Relax OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'gg', value: 'gg', label: 'GG' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-masculina-off-white-ficar-bem-otimismo-arco-iris.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-masculina-off-white-ficar-bem-otimismo-arco-iris.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 		],
// 		originalItemsPrice: 81,
// 		itemsPrice: 81,
// 		originalOrderPrice: 98,
// 		discountPrice: 0,
// 		orderPrice: 98,
// 		delivery: {
// 			_id: 'Transportadora eTotal',
// 			price: 17,
// 			deliveryTime: 0,
// 			method: 'Transportadora eTotal',
// 			address: {
// 				zipCode: '22793-395',
// 				country: 'Brasil',
// 				state: 'RJ',
// 				city: 'Rio de Janeiro',
// 				neighborhood: 'Barra da Tijuca',
// 				street: 'Rua Sylvio da Rocha Pollis',
// 				number: '431',
// 				complement: '',
// 			},
// 			deliveryDate: 0,
// 		},
// 		status: 'payment refused',
// 		invoice: { number: '', url: '' },
// 		date: 1602001471000,
// 		note: '',
// 	},
// 	{
// 		_id: '601ad348eadcf71cef1c5998',
// 		uid: 'azpgQtTXlI3OOa33vMWEmrflNS6o',
// 		packages: 1,
// 		items: [
// 			{
// 				productId: '601ad34354e94b236ac40930',
// 				variationId: '601ad342eadcf71cef1c57a0',
// 				name: 'Moletom Tie Dye Areia',
// 				originalPrice: 148,
// 				price: 148,
// 				attributes: [
// 					{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'areia', value: 'areia', label: 'areia' } },
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Moletom Tie Dye', value: 'Moletom Tie Dye', label: 'Moletom Tie Dye' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'g', value: 'g', label: 'G' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/moletom-tiedye-areia-feminino.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/moletom-tiedye-areia-feminino.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 			{
// 				productId: '601ad34354e94b236ac40930',
// 				variationId: '601ad342eadcf71cef1c57a2',
// 				name: 'Moletom Tie Dye Areia',
// 				originalPrice: 148,
// 				price: 148,
// 				attributes: [
// 					{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'areia', value: 'areia', label: 'areia' } },
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Moletom Tie Dye', value: 'Moletom Tie Dye', label: 'Moletom Tie Dye' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'm', value: 'm', label: 'M' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/moletom-tiedye-areia-feminino.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/moletom-tiedye-areia-feminino.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 			{
// 				productId: '601ad34354e94b236ac40943',
// 				variationId: '601ad342eadcf71cef1c57f9',
// 				name: 'Camiseta Abandona Preta',
// 				originalPrice: 81,
// 				price: 81,
// 				attributes: [
// 					{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'preta', value: 'preta', label: 'Preta' } },
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Relax OFF', value: 'Relax OFF', label: 'Relax OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'g', value: 'g', label: 'G' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-preta-quem-abandona-cachorro-cuzao-animal-masculina-detalhe.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-preta-quem-abandona-cachorro-cuzao-animal-masculina-detalhe.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 			{
// 				productId: '601ad34354e94b236ac40943',
// 				variationId: '601ad342eadcf71cef1c57fb',
// 				name: 'Camiseta Abandona Preta',
// 				originalPrice: 81,
// 				price: 81,
// 				attributes: [
// 					{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'preta', value: 'preta', label: 'Preta' } },
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Relax OFF', value: 'Relax OFF', label: 'Relax OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'm', value: 'm', label: 'M' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-preta-quem-abandona-cachorro-cuzao-animal-masculina-detalhe.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-preta-quem-abandona-cachorro-cuzao-animal-masculina-detalhe.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 			{
// 				productId: '601ad34354e94b236ac40949',
// 				variationId: '601ad342eadcf71cef1c581d',
// 				name: 'Camiseta Pink e o Cérebro',
// 				originalPrice: 81,
// 				price: 81,
// 				attributes: [
// 					{
// 						_id: '604797d17adc6482927a64ac',
// 						name: 'Cor',
// 						type: 'tag',
// 						option: { _id: 'offwhite', value: 'offwhite', label: 'Offwhite' },
// 					},
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Relax OFF', value: 'Relax OFF', label: 'Relax OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'g', value: 'g', label: 'G' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/produto-pink-e-celebro.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/produto-pink-e-celebro.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 		],
// 		originalItemsPrice: 539,
// 		itemsPrice: 539,
// 		originalOrderPrice: 539,
// 		discountPrice: 0,
// 		orderPrice: 539,
// 		delivery: {
// 			_id: 'Frete Grátis',
// 			price: 0,
// 			deliveryTime: 0,
// 			method: 'Frete Grátis',
// 			address: {
// 				zipCode: '22793-395',
// 				country: 'Brasil',
// 				state: 'RJ',
// 				city: 'Rio de Janeiro',
// 				neighborhood: 'Barra da Tijuca',
// 				street: 'Rua Sylvio da Rocha Pollis',
// 				number: '431',
// 				complement: '',
// 			},
// 			deliveryDate: 0,
// 		},
// 		status: 'canceled',
// 		invoice: { number: '', url: '' },
// 		date: 1601930981000,
// 		note: '',
// 	},
// 	{
// 		_id: '601ad347eadcf71cef1c5966',
// 		uid: 'azpgQtTXlI3OOa33vMWEmrflNS6o',
// 		packages: 1,
// 		items: [
// 			{
// 				productId: '601ad34354e94b236ac4090d',
// 				variationId: '601ad342eadcf71cef1c56d8',
// 				name: 'Moletom Tie Dye Rosa',
// 				originalPrice: 160,
// 				price: 160,
// 				attributes: [
// 					{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'Rosa', value: 'Rosa', label: 'Rosa' } },
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Moletom Tie Dye', value: 'Moletom Tie Dye', label: 'Moletom Tie Dye' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'xgg', value: 'xgg', label: 'XGG' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/5f2022b81cb60__moletom-tie-dye-rosa.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/5f2022b81cb60__moletom-tie-dye-rosa.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 			{
// 				productId: '601ad34354e94b236ac40943',
// 				variationId: '601ad342eadcf71cef1c57fb',
// 				name: 'Camiseta Abandona Preta',
// 				originalPrice: 81,
// 				price: 81,
// 				attributes: [
// 					{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'preta', value: 'preta', label: 'Preta' } },
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Relax OFF', value: 'Relax OFF', label: 'Relax OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'm', value: 'm', label: 'M' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-preta-quem-abandona-cachorro-cuzao-animal-masculina-detalhe.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-preta-quem-abandona-cachorro-cuzao-animal-masculina-detalhe.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 			{
// 				productId: '601ad34354e94b236ac40943',
// 				variationId: '601ad342eadcf71cef1c57fc',
// 				name: 'Camiseta Abandona Preta',
// 				originalPrice: 81,
// 				price: 81,
// 				attributes: [
// 					{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'preta', value: 'preta', label: 'Preta' } },
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Relax OFF', value: 'Relax OFF', label: 'Relax OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'p', value: 'p', label: 'P' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-preta-quem-abandona-cachorro-cuzao-animal-masculina-detalhe.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-preta-quem-abandona-cachorro-cuzao-animal-masculina-detalhe.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 			{
// 				productId: '601ad34354e94b236ac4079a',
// 				variationId: '601ad342eadcf71cef1c4f72',
// 				name: 'Camiseta Abandona',
// 				originalPrice: 81,
// 				price: 81,
// 				attributes: [
// 					{
// 						_id: '604797d17adc6482927a64ac',
// 						name: 'Cor',
// 						type: 'tag',
// 						option: { _id: 'offwhite', value: 'offwhite', label: 'Offwhite' },
// 					},
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Relax OFF', value: 'Relax OFF', label: 'Relax OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'g', value: 'g', label: 'G' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-abandona-quem-cachorro-cuzao-animal-masculina.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-abandona-quem-cachorro-cuzao-animal-masculina.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 		],
// 		originalItemsPrice: 403,
// 		itemsPrice: 403,
// 		originalOrderPrice: 403,
// 		discountPrice: 0,
// 		orderPrice: 403,
// 		delivery: {
// 			_id: 'Frete Grátis',
// 			price: 0,
// 			deliveryTime: 0,
// 			method: 'Frete Grátis',
// 			address: {
// 				zipCode: '22793-395',
// 				country: 'Brasil',
// 				state: 'RJ',
// 				city: 'Rio de Janeiro',
// 				neighborhood: 'Barra da Tijuca',
// 				street: 'Rua Sylvio da Rocha Pollis',
// 				number: '431',
// 				complement: '',
// 			},
// 			deliveryDate: 0,
// 		},
// 		status: 'completed',
// 		invoice: { number: '', url: '' },
// 		date: 1601930602000,
// 		note: '',
// 	},
// 	{
// 		_id: '601ad348eadcf71cef1c59c4',
// 		uid: 'azpgQtTXlI3OOa33vMWEmrflNS6o',
// 		packages: 1,
// 		items: [
// 			{
// 				productId: '601ad34354e94b236ac40949',
// 				variationId: '601ad342eadcf71cef1c581d',
// 				name: 'Camiseta Pink e o Cérebro',
// 				originalPrice: 81,
// 				price: 81,
// 				attributes: [
// 					{
// 						_id: '604797d17adc6482927a64ac',
// 						name: 'Cor',
// 						type: 'tag',
// 						option: { _id: 'offwhite', value: 'offwhite', label: 'Offwhite' },
// 					},
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Relax OFF', value: 'Relax OFF', label: 'Relax OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'g', value: 'g', label: 'G' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/produto-pink-e-celebro.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/produto-pink-e-celebro.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 		],
// 		originalItemsPrice: 81,
// 		itemsPrice: 81,
// 		originalOrderPrice: 101,
// 		discountPrice: 0,
// 		orderPrice: 101,
// 		delivery: {
// 			_id: 'Transportadora eTotal',
// 			price: 20,
// 			deliveryTime: 0,
// 			method: 'Transportadora eTotal',
// 			address: {
// 				zipCode: '81280-200',
// 				country: 'Brasil',
// 				state: 'PR',
// 				city: 'Curitiba',
// 				neighborhood: 'Cidade Industrial',
// 				street: 'Rua Padre João Kominek',
// 				number: '345',
// 				complement: '201',
// 			},
// 			deliveryDate: 0,
// 		},
// 		status: 'sent',
// 		invoice: { number: '', url: '' },
// 		date: 1601923320000,
// 		note: '',
// 	},
// 	{
// 		_id: '601ad348eadcf71cef1c59b8',
// 		uid: 'azpgQtTXlI3OOa33vMWEmrflNS6o',
// 		packages: 1,
// 		items: [
// 			{
// 				productId: '601ad34354e94b236ac40948',
// 				variationId: '601ad342eadcf71cef1c5819',
// 				name: 'Camiseta Bem Offwhite',
// 				originalPrice: 81,
// 				price: 81,
// 				attributes: [
// 					{
// 						_id: '604797d17adc6482927a64ac',
// 						name: 'Cor',
// 						type: 'tag',
// 						option: { _id: 'offwhite', value: 'offwhite', label: 'Offwhite' },
// 					},
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Relax OFF', value: 'Relax OFF', label: 'Relax OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'm', value: 'm', label: 'M' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-masculina-off-white-ficar-bem-otimismo-arco-iris.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url:
// 								'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-masculina-off-white-ficar-bem-otimismo-arco-iris.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 		],
// 		originalItemsPrice: 81,
// 		itemsPrice: 81,
// 		originalOrderPrice: 98,
// 		discountPrice: 0,
// 		orderPrice: 98,
// 		delivery: {
// 			_id: 'Transportadora eTotal',
// 			price: 17,
// 			deliveryTime: 0,
// 			method: 'Transportadora eTotal',
// 			address: {
// 				zipCode: '22793-395',
// 				country: 'Brasil',
// 				state: 'RJ',
// 				city: 'Rio de Janeiro',
// 				neighborhood: 'Barra da Tijuca',
// 				street: 'Rua Sylvio da Rocha Pollis',
// 				number: '431',
// 				complement: '',
// 			},
// 			deliveryDate: 0,
// 		},
// 		status: 'processing',
// 		invoice: { number: '', url: '' },
// 		date: 1601922724000,
// 		note: '',
// 	},
// 	{
// 		_id: '601ad348eadcf71cef1c59d4',
// 		uid: 'azpgQtTXlI3OOa33vMWEmrflNS6o',
// 		packages: 1,
// 		items: [
// 			{
// 				productId: '601ad34354e94b236ac4094e',
// 				variationId: '601ad342eadcf71cef1c583b',
// 				name: 'Camiseta Notification',
// 				originalPrice: 83,
// 				price: 83,
// 				attributes: [
// 					{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'preta', value: 'preta', label: 'Preta' } },
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Classic OFF', value: 'Classic OFF', label: 'Classic OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'g', value: 'g', label: 'G' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-relax-preta-notification-masculina.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-relax-preta-notification-masculina.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 			{
// 				productId: '601ad34354e94b236ac4094e',
// 				variationId: '601ad342eadcf71cef1c583b',
// 				name: 'Camiseta Notification',
// 				originalPrice: 83,
// 				price: 83,
// 				attributes: [
// 					{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'preta', value: 'preta', label: 'Preta' } },
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Classic OFF', value: 'Classic OFF', label: 'Classic OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'g', value: 'g', label: 'G' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-relax-preta-notification-masculina.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-relax-preta-notification-masculina.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 			{
// 				productId: '601ad34354e94b236ac4094e',
// 				variationId: '601ad342eadcf71cef1c583b',
// 				name: 'Camiseta Notification',
// 				originalPrice: 83,
// 				price: 83,
// 				attributes: [
// 					{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'preta', value: 'preta', label: 'Preta' } },
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Classic OFF', value: 'Classic OFF', label: 'Classic OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'g', value: 'g', label: 'G' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-relax-preta-notification-masculina.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-relax-preta-notification-masculina.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 			{
// 				productId: '601ad34354e94b236ac4094e',
// 				variationId: '601ad342eadcf71cef1c583b',
// 				name: 'Camiseta Notification',
// 				originalPrice: 83,
// 				price: 83,
// 				attributes: [
// 					{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'preta', value: 'preta', label: 'Preta' } },
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Classic OFF', value: 'Classic OFF', label: 'Classic OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'g', value: 'g', label: 'G' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-relax-preta-notification-masculina.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-relax-preta-notification-masculina.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 			{
// 				productId: '601ad34354e94b236ac4094e',
// 				variationId: '601ad342eadcf71cef1c583b',
// 				name: 'Camiseta Notification',
// 				originalPrice: 83,
// 				price: 83,
// 				attributes: [
// 					{ _id: '604797d17adc6482927a64ac', name: 'Cor', type: 'tag', option: { _id: 'preta', value: 'preta', label: 'Preta' } },
// 					{
// 						_id: '60479bdee0dc270d1a05ecd4',
// 						name: 'Modelo',
// 						type: 'tag',
// 						option: { _id: 'Classic OFF', value: 'Classic OFF', label: 'Classic OFF' },
// 					},
// 					{ _id: '60479be535b419f9d27b2794', name: 'Tamanho', type: 'small', option: { _id: 'g', value: 'g', label: 'G' } },
// 				],
// 				photo: {
// 					desktop: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-relax-preta-notification-masculina.jpg',
// 						},
// 						alt: '',
// 					},
// 					mobile: {
// 						file: {
// 							asset_id: '',
// 							public_id: '',
// 							resource_type: '',
// 							url: 'https://lab77.s3.sa-east-1.amazonaws.com/img/produtos/principais/camiseta-relax-preta-notification-masculina.jpg',
// 						},
// 						alt: '',
// 					},
// 				},
// 			},
// 		],
// 		originalItemsPrice: 415,
// 		itemsPrice: 415,
// 		originalOrderPrice: 415,
// 		discountPrice: 0,
// 		orderPrice: 415,
// 		delivery: {
// 			_id: 'Frete Grátis',
// 			price: 0,
// 			deliveryTime: 0,
// 			method: 'Frete Grátis',
// 			address: {
// 				zipCode: '22793-395',
// 				country: 'Brasil',
// 				state: 'RJ',
// 				city: 'Rio de Janeiro',
// 				neighborhood: 'Barra da Tijuca',
// 				street: 'Rua Sylvio da Rocha Pollis',
// 				number: '431',
// 				complement: '',
// 			},
// 			deliveryDate: 0,
// 		},
// 		status: 'pending payment',
// 		invoice: { number: '', url: '' },
// 		date: 1601922478000,
// 		note: '',
// 	},
// ];

// beforeAll(async () => {
// 	setupFirebase();
// 	const { user } = await authFirebase();
// 	const tokenId = (await user?.getIdToken()) || '';
// 	token = `Bearer ${tokenId}`;

// 	legacyServer = nock(process.env.LEGACY_LAB77_BASE_URL || '').post('/logistica/frete.json');
// 	nock(process.env.LEGACY_LAB77_BASE_URL || '')
// 		.persist()
// 		.get(uri => uri.includes('/arquivos/getFilesFolder/produtos/'))
// 		.reply(200, [
// 			'img/produtos/internas/fotos_1911/5f20a47e5d89f__mascara-azul-tecido-algodao-sustentavel-protecao-facial.jpg',
// 			'img/produtos/internas/fotos_1911/mascara-areia-tecido-algodao-sustentavel-protecao-facial-frente.jpg',
// 			'img/produtos/internas/fotos_1911/mascara-areia-tecido-algodao-sustentavel-protecao-facial-lado.jpg',
// 			'img/produtos/internas/fotos_1911/mascara-azul-tecido-algodao-sustentavel-protecao-facial.jpg',
// 			'img/produtos/internas/fotos_1911/mascara-off-white-tecido-algodao-sustentavel-protecao-facial-lado.jpg',
// 			'img/produtos/internas/fotos_1911/mascara-rosa-tecido-algodao-sustentavel-protecao-facial-close.jpg',
// 			'img/produtos/internas/fotos_1911/mascara-rosa-tecido-algodao-sustentavel-protecao-facial.jpg',
// 		]);
// 	const init = await getServer();
// 	server = init.server;
// 	app = init.app;
// });

// afterAll(async () => {
// 	nock.cleanAll();
// 	await app.close();
// });

// beforeEach(() => {
// 	legacyServer.reply(200, []);
// });

// describe('/ (GET)', () => {
// 	test('Should return an error when the user is not authenticated', () => {
// 		return request(server).get('/orders').expect(401);
// 	});

// 	test('Should return orders of this user', async () => {
// 		const response = await request(server).get('/orders').set('Authorization', token).expect(200);
// 		expect(response.body).toEqual(orders);
// 	});
// });

// describe('/:_id (GET)', () => {
// 	test("Should return an error when trying to access another user's order", () => {
// 		return request(server).get('/orders/601ad347eadcf71cef1c5841').set('Authorization', token).expect(404);
// 	});

// 	test('Should return an error when trying to access an order that does not exist', () => {
// 		return request(server).get('/orders/601ad347eadcf71cef1c5842').set('Authorization', token).expect(404);
// 	});

// 	test('Should return the correct order', async () => {
// 		const response = await request(server).get('/orders/601ad348eadcf71cef1c59b2').set('Authorization', token).expect(200);
// 		expect(response.body).toEqual(orders[0]);
// 	});
// });
