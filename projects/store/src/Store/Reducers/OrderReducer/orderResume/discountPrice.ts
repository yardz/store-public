import NP from 'number-precision';

interface Args {
	originalItemsPrice: number;
	discountItemsPrice: number;
}
export const discountPrice = ({ originalItemsPrice, discountItemsPrice }: Args) => NP.minus(originalItemsPrice, discountItemsPrice);
