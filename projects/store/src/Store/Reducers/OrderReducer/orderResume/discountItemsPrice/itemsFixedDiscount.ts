import NP from 'number-precision';
import { minItemsPrice } from './minItemsPrice';

interface Args {
	items: {
		quantity: number;
		price: number;
	};
	fixedDiscount?: number;
}

export const itemsFixedDiscount = ({ items, fixedDiscount }: Args) => {
	if (!fixedDiscount) {
		return items.price;
	}

	if (fixedDiscount > items.price) {
		return minItemsPrice({ items });
	}

	return NP.minus(items.price, fixedDiscount);
};
