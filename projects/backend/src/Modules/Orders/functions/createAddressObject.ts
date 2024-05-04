import { AddressLegacyModel } from '@Modules/Legacy/address.legacy.types';

/** @deprecated deve ser removido assim que possível */
export const createAddressObject = (address?: AddressLegacyModel) => ({
	zipCode: address?.zipCode || '',
	country: 'Brasil',
	state: address?.state || '',
	city: address?.city || '',
	neighborhood: address?.neighborhood || '',
	street: address?.street || '',
	number: address?.number || '',
	complement: address?.complement || '',
});
