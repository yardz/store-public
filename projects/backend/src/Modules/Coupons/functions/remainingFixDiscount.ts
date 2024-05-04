import { OrderItem } from '@lab77store/domain';
import NP from 'number-precision';
import { itemsCanHaveDiscount } from '.';

interface Args {
	items: OrderItem[];
	discount: number;
}

export const remainingFixDiscount = ({ items, discount }: Args) => {
	const validItems = itemsCanHaveDiscount({ items });
	const totalPrice = validItems.reduce((total, item) => NP.plus(total, item.price), 0);
	const quantity = validItems.length;
	const itemsMinPrice = NP.times(0.01, quantity);
	const maxFixDiscount = NP.minus(totalPrice, itemsMinPrice);
	if (maxFixDiscount < discount) return maxFixDiscount;
	return discount;
};
