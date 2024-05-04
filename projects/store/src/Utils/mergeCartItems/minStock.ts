import { CartItem } from '@lab77store/database';
import min from 'lodash/min';

export const minStock = ({ sameItems }: { sameItems: CartItem[] }): number => {
	const stocks = sameItems.map(i => i.stock);
	return min(stocks) || stocks[0];
};
