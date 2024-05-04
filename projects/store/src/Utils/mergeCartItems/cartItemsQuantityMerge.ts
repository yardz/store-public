import { MergeFunction } from './merge';
import { minStock } from './minStock';

export const cartItemsQuantityMerge: MergeFunction = ({ sameItems }) => {
	const quantityList = sameItems.map(i => i.quantity);
	const stock = minStock({ sameItems });
	let quantity = Math.max(...quantityList);
	quantity = quantity > stock ? stock : quantity;
	return { ...sameItems[0], quantity, stock };
};
