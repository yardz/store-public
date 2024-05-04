import { AddressLegacyModel } from '@App/Modules/Legacy/address.legacy.types';
import { createAddressObject } from './createAddressObject';

test('Should return a empty Address', async () => {
	expect(createAddressObject()).toEqual({
		zipCode: '',
		country: 'Brasil',
		state: '',
		city: '',
		neighborhood: '',
		street: '',
		number: '',
		complement: '',
	});
});

test('Should return formated Address', async () => {
	const addressLegacy = ({
		zipCode: '31035-203',
		state: 'MG',
		city: 'Belo Horizonte',
		neighborhood: 'Santa Inês',
		street: 'Rua Gustavo da Silveira',
		number: '1000',
		complement: '',
	} as unknown) as AddressLegacyModel;

	expect(createAddressObject(addressLegacy)).toEqual({
		country: 'Brasil',
		zipCode: '31035-203',
		state: 'MG',
		city: 'Belo Horizonte',
		neighborhood: 'Santa Inês',
		street: 'Rua Gustavo da Silveira',
		number: '1000',
		complement: '',
	});
});
