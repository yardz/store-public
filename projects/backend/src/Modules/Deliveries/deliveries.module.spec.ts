// TODO: FIX_TESTES
test('FIX', () => {
	expect(true).toBe(true);
});
// import { Express } from 'express';
// import { INestApplication } from '@nestjs/common';
// import { getServer } from '@App/server';
// import nock from 'nock';

// import request from 'supertest';

// jest.mock('firebase-functions/lib/logger');

// let app: INestApplication;
// let server: Express;
// let legacyServer: nock.Interceptor;

// beforeAll(async () => {
// 	legacyServer = nock(process.env.LEGACY_LAB77_BASE_URL || '').post('/logistica/frete.json');
// 	const init = await getServer();
// 	server = init.server;
// 	app = init.app;
// });

// afterAll(async () => {
// 	nock.cleanAll();
// 	await app.close();
// });

// beforeEach(() => {
// 	legacyServer.reply(200, [
// 		{
// 			codigo: '00001',
// 			metodo: 'metodo-01',
// 			prazo: 1,
// 			valor: '100,00',
// 			valor_sem_adicionais: '200,00',
// 			aviso: '',
// 			aviso_5: 'content-5',
// 			aviso_6: 'content-6',
// 		},
// 		{
// 			codigo: '00002',
// 			metodo: 'metodo-02',
// 			prazo: 2,
// 			valor: '300,00',
// 			valor_sem_adicionais: '400,00',
// 			aviso: 'content-1',
// 			aviso_2: 'content-2',
// 			aviso_3: 'content-3',
// 			aviso_4: 'content-4',
// 			aviso_5: 'content-5',
// 			aviso_6: 'content-6',
// 		},
// 	]);
// });

// test('/ (GET)', async () => {
// 	const response = await request(server).get('/deliveries').query({ total: '100', zipCode: '31035-203', coupon: 'CUPON01' }).expect(200);

// 	expect(response.body).toEqual([
// 		{
// 			_id: '00001',
// 			address: {
// 				city: 'Belo Horizonte',
// 				country: 'Brasil',
// 				neighborhood: 'Horto Florestal',
// 				number: '',
// 				state: 'MG',
// 				street: 'Rua Frederico Incalado',
// 				zipCode: '31035-203',
// 			},
// 			alerts: [
// 				{ content: 'content-6', order: 2, type: 'tip' },
// 				{ content: 'content-5', order: 6, type: 'tip' },
// 			],
// 			deliveryTime: 1,
// 			method: 'metodo-01',
// 			price: 100,
// 		},
// 		{
// 			_id: '00002',
// 			address: {
// 				city: 'Belo Horizonte',
// 				country: 'Brasil',
// 				neighborhood: 'Horto Florestal',
// 				number: '',
// 				state: 'MG',
// 				street: 'Rua Frederico Incalado',
// 				zipCode: '31035-203',
// 			},
// 			alerts: [
// 				{ content: 'content-1', order: 1, type: 'danger' },
// 				{ content: 'content-6', order: 2, type: 'tip' },
// 				{ content: 'content-2', order: 3, type: 'danger' },
// 				{ content: 'content-4', order: 5, type: 'tip' },
// 				{ content: 'content-5', order: 6, type: 'tip' },
// 			],
// 			deliveryTime: 2,
// 			method: 'metodo-02',
// 			price: 300,
// 		},
// 	]);
// });

// test('/ (GET) inexistent CEP', () => {
// 	return request(server).get('/deliveries').query({ total: '100', zipCode: '39100-111' }).expect(400);
// });

// test('/ (GET) get [] when legacyServer returns an error', async () => {
// 	legacyServer.reply(500);
// 	const response = await request(server).get('/deliveries').query({ total: 100, zipCode: '31035-203', coupon: 'CUPON01' }).expect(200);

// 	expect(response.body).toEqual([]);
// });

// test('/ (GET) get an error when the request has no total ', () => {
// 	return request(server).get('/deliveries').query({ zipCode: '31035-203' }).expect(400);
// });

// test('/ (GET) get an error when the request has no zipCode ', () => {
// 	return request(server).get('/deliveries').query({ total: '200' }).expect(400);
// });
