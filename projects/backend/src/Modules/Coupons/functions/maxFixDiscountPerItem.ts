import { OrderItem } from '@lab77store/domain';
import { itemsCanHaveDiscount } from './itemsCanHaveDiscount';
import { lowestItemPrice } from './lowestItemPrice';
import NP from 'number-precision';

interface Args {
	items: OrderItem[];
	discount: number;
}

const calcDiscount = ({ discount, quantity }) => {
	NP.enableBoundaryChecking(false);
	const divide = NP.divide(discount, quantity);
	const round = NP.round(divide, 2);
	NP.enableBoundaryChecking(true);
	return round;
};

export const maxFixDiscountPerItem = ({ items, discount }: Args) => {
	const validItems = itemsCanHaveDiscount({ items });
	const quantity = validItems.length;

	const maxDiscountPerItem = NP.minus(lowestItemPrice({ items: validItems }), 0.01);
	const currentDiscountPerItem = calcDiscount({ discount, quantity });
	if (maxDiscountPerItem < currentDiscountPerItem) {
		return maxDiscountPerItem;
	}
	return currentDiscountPerItem;
};
