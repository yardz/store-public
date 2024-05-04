import { Product } from '@lab77store/domain';

interface Args {
	products: Product[];
}

export const getPreOrderAdditionalTime = ({ products }: Args): number | undefined => {
	const additionalDaysDelivery = products.map(({ preSale }) => preSale?.additionalDaysDelivery || 0);
	const preOrderAdditionalTime = Math.max(...additionalDaysDelivery);
	return preOrderAdditionalTime || undefined;
};
