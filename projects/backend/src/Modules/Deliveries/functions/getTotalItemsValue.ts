import NP from 'number-precision';

interface Args {
	items: {
		price: number;
		quantity?: number | undefined;
	}[];
}

export const getTotalItemsValue = ({ items }: Args): number =>
	items.reduce((total, i) => {
		const quantity = i.quantity || 1;
		const itemsPrice = NP.times(i.price, quantity);
		return NP.plus(total, itemsPrice);
	}, 0);
