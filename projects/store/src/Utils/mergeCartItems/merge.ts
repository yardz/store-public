import { CartItem } from '@lab77store/database';
import cloneDeep from 'lodash/cloneDeep';
import orderBy from 'lodash/orderBy';
import { sameItems } from './sameItems';

export type MergeFunction = (args: { sameItems: CartItem[] }) => CartItem;

interface Args {
	items: CartItem[];
	mergeFunction: MergeFunction;
}

export const merge = ({ items, mergeFunction }: Args): CartItem[] => {
	let list = cloneDeep(items);
	const merged: CartItem[] = [];
	while (list.length > 0) {
		let item = list.pop();
		if (!item) break;
		const sameItemsToMerge = sameItems({ item, items: [...list, item] });
		item = mergeFunction({ sameItems: sameItemsToMerge });
		list = list.filter(i => i.variationId !== item?.variationId);
		merged.push(item);
	}
	return orderBy(merged, ['name', 'variationId']);
};
