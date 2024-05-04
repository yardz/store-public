import NP from 'number-precision';

interface Args {
	discount: number;
}

export const getPercentageDiscount = ({ discount }: Args) => {
	const maxDiscount = discount > 99.99 ? 99.99 : discount;
	return NP.divide(NP.minus(100, maxDiscount), 100);
};
