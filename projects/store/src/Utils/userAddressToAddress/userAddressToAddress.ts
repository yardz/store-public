import { UserAddress, Address } from '@lab77store/domain';

export const userAddressToAddress = ({ userAddress }: { userAddress: UserAddress | Address }): Address => ({
	zipCode: userAddress.zipCode,
	country: userAddress.country,
	state: userAddress.state,
	city: userAddress.city,
	neighborhood: userAddress.neighborhood,
	street: userAddress.street,
	number: userAddress.number,
	complement: userAddress.complement,
});
