import NP from 'number-precision';

interface Args {
	items: {
		quantity: number;
		price: number;
	};
}

export const minItemsPrice = ({ items }: Args) => NP.times(0.01, items.quantity);
