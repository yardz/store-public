import { DeliveryLegacyModel } from '@App/Modules/Legacy/delivery.legacy.types';
import { createDeliveryObject } from './createDeliveryObject';

test('Should return a empty Delivery', async () => {
	expect(createDeliveryObject()).toEqual({
		_id: '',
		recipientName: '',
		price: 0,
		deliveryTime: 0, // verificar da onde vem essa informação
		method: '',
		address: {
			zipCode: '',
			country: 'Brasil',
			state: '',
			city: '',
			neighborhood: '',
			street: '',
			number: '',
			complement: '',
		},
		deliveryDate: 0, // verificar da onde vem essa informação
	});
});

test('Should return formated Delivery', async () => {
	const deliveryLegacy = ({
		name: 'Lucita',
		lastName: 'de Aragão',
		price: 0,
		deliveryTime: 0,
		method: 'method',
		deliveryDate: 0,
		address: {
			zipCode: '31035-203',
			state: 'MG',
			city: 'Belo Horizonte',
			neighborhood: 'Santa Inês',
			street: 'Rua Gustavo da Silveira',
			number: '1000',
			complement: '',
		},
	} as unknown) as DeliveryLegacyModel;

	expect(createDeliveryObject(deliveryLegacy)).toEqual({
		_id: 'method',
		recipientName: 'Lucita de Aragão',
		deliveryDate: 0,
		deliveryTime: 0,
		method: 'method',
		price: 0,
		address: {
			country: 'Brasil',
			zipCode: '31035-203',
			state: 'MG',
			city: 'Belo Horizonte',
			neighborhood: 'Santa Inês',
			street: 'Rua Gustavo da Silveira',
			number: '1000',
			complement: '',
		},
	});
});
