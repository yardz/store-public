import NP from 'number-precision';

interface Args {
	discountItemsPrice: number;
	deliveryPrice: number;
}
export const orderTotal = ({ discountItemsPrice, deliveryPrice }: Args) => NP.plus(discountItemsPrice, deliveryPrice);
