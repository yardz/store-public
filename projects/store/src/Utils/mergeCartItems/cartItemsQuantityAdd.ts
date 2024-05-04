import { MergeFunction } from './merge';
import { minStock } from './minStock';

export const cartItemsQuantityAdd: MergeFunction = ({ sameItems }) => {
	let quantity = sameItems.reduce((total, i) => total + i.quantity, 0);
	const stock = minStock({ sameItems });
	quantity = quantity > stock ? stock : quantity;
	return { ...sameItems[0], quantity, stock };
};
