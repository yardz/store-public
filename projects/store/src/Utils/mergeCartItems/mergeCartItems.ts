import { CartItem } from '@lab77store/database';
import { cartItemsQuantityAdd } from './cartItemsQuantityAdd';
import { cartItemsQuantityMerge } from './cartItemsQuantityMerge';
import { merge } from './merge';

interface Args {
	items: CartItem[];
}

export const mergeCartItems = {
	add: ({ items }: Args) => merge({ items, mergeFunction: cartItemsQuantityAdd }),
	merge: ({ items }: Args) => merge({ items, mergeFunction: cartItemsQuantityMerge }),
};
