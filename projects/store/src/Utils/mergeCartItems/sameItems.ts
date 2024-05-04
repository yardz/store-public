import { CartItem } from '@lab77store/database';

export const sameItems = ({ item, items }: { item: CartItem; items: CartItem[] }): CartItem[] =>
	items.filter(i => i.variationId === item.variationId);
