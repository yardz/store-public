import NP from 'number-precision';

interface Args {
	originalItemsPrice: number;
	deliveryPrice: number;
}
export const originalTotalPrice = ({ originalItemsPrice, deliveryPrice }: Args) => NP.plus(originalItemsPrice, deliveryPrice);
