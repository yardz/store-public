import { UserAddress, Address } from '@lab77store/domain';

type CompareAddress = UserAddress | Address;

export const isEqualAddress = (addressA: CompareAddress, addressB: CompareAddress): boolean =>
	addressA.zipCode === addressB.zipCode &&
	addressA.neighborhood === addressB.neighborhood &&
	addressA.street === addressB.street &&
	addressA.number === addressB.number &&
	addressA.complement === addressB.complement;
