import NP from 'number-precision';

interface Args {
	itemsPrice: number;
	percent?: number;
}

export const itemsPercentageDiscount = ({ itemsPrice, percent }: Args) => {
	if (!percent) {
		return itemsPrice;
	}

	let percentage = percent > 99.99 ? 99.99 : percent;
	percentage = NP.divide(NP.minus(100, percentage), 100);
	return NP.round(NP.times(itemsPrice, percentage), 2);
};
