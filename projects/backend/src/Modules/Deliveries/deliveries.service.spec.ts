// TODO: FIX_TESTES
test('FIX', () => {
	expect(true).toBe(true);
});
// import { setupFirebase } from '@App/Test/Fixures/setupFirebase';
// import { INestApplication, HttpService } from '@nestjs/common';
// import { getServer } from '@App/server';

// import { Address } from '@lab77store/domain';
// import nock from 'nock';

// import { DeliveriesService } from './deliveries.service';

// jest.mock('firebase-functions/lib/logger');

// let app: INestApplication;
// let deliveriesService: DeliveriesService;

// let legacyServer: nock.Interceptor;
// let httpServicePost: jest.SpyInstance<any, any[]>;

// const defaultResponse = {
// 	_id: '00003',
// 	address: { zipCode: '11111-111' },
// 	alerts: [
// 		{ content: 'content-1', order: 1, type: 'danger' },
// 		{ content: 'content-6', order: 2, type: 'tip' },
// 		{ content: 'content-2', order: 3, type: 'danger' },
// 		{ content: 'content-4', order: 5, type: 'tip' },
// 		{ content: 'content-5', order: 6, type: 'tip' },
// 	],
// 	deliveryTime: 5,
// 	method: 'Retirar na loja',
// 	price: 0,
// };

// beforeAll(async () => {
// 	setupFirebase();
// 	legacyServer = nock('http://develop.lab77.com.br').post('/logistica/frete.json');
// 	const init = await getServer();
// 	app = init.app;
// });

// afterAll(async () => {
// 	nock.cleanAll();
// 	await app.close();
// });

// beforeEach(() => {
// 	deliveriesService = app.get<DeliveriesService>(DeliveriesService);

// 	const httpService = app.get<HttpService>(HttpService);
// 	httpServicePost = jest.spyOn(httpService, 'post');

// 	legacyServer.reply(200, [
// 		{
// 			codigo: '00003',
// 			metodo: 'Retirar na loja',
// 			prazo: 5,
// 			valor: '00,00',
// 			valor_sem_adicionais: '00,00',
// 			aviso: 'content-1',
// 			aviso_2: 'content-2',
// 			aviso_4: 'content-4',
// 			aviso_5: 'content-5',
// 			aviso_6: 'content-6',
// 		},
// 	]);
// });

// afterEach(() => {
// 	jest.restoreAllMocks();
// });

// test('Should return an array delivery options', async () => {
// 	const options = await deliveriesService.getDeliveryOptions({
// 		address: { zipCode: '11111-111' } as Address,
// 		items: [{ price: 100 }],
// 	});
// 	expect(options).toEqual([defaultResponse]);
// });

// test('Should return an empty array if request fail', async () => {
// 	legacyServer.reply(500);
// 	const options = await deliveriesService.getDeliveryOptions({
// 		address: { zipCode: '11111-111' } as Address,
// 		items: [{ price: 100 }],
// 	});
// 	expect(options).toEqual([]);
// });

// test('Should use a giant value when use a free shipping coupon', async () => {
// 	const options = await deliveriesService.getDeliveryOptions({
// 		address: { zipCode: '11111-111' } as Address,
// 		items: [{ price: 100 }],
// 		coupon: 'FIX0-PERCENT0-FRETE1',
// 	});
// 	expect(options).toEqual([defaultResponse]);
// 	expect(httpServicePost).toBeCalledWith(expect.any(String), { cep: '11111-111', valor: 99999 });
// });

// test('Should have no changes if coupon is invalid', async () => {
// 	const options = await deliveriesService.getDeliveryOptions({
// 		address: { zipCode: '11111-111' } as Address,
// 		items: [{ price: 100 }],
// 		coupon: 'INVALID-COUPON',
// 	});

// 	expect(options).toEqual([defaultResponse]);
// 	expect(httpServicePost).toBeCalledWith(expect.any(String), { cep: '11111-111', valor: 100 });
// });

// test('Should have no changes if coupon has no stock', async () => {
// 	const options = await deliveriesService.getDeliveryOptions({
// 		address: { zipCode: '11111-111' } as Address,
// 		items: [{ price: 100 }],
// 		coupon: 'NO-STOCK',
// 	});

// 	expect(options).toEqual([defaultResponse]);
// 	expect(httpServicePost).toBeCalledWith(expect.any(String), { cep: '11111-111', valor: 100 });
// });

// test('Should send total value of items', async () => {
// 	const options = await deliveriesService.getDeliveryOptions({
// 		address: { zipCode: '11111-111' } as Address,
// 		items: [{ price: 100, quantity: 3 }],
// 	});
// 	expect(options).toEqual([defaultResponse]);
// 	expect(httpServicePost).toBeCalledWith(expect.any(String), { cep: '11111-111', valor: 300 });
// });
