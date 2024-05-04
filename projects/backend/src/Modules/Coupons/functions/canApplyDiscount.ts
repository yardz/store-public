import { OrderItem } from '@lab77store/domain';
import { itemsCanHaveDiscount } from '.';

interface Args {
	items: OrderItem[];
	discount: number;
}

export const canApplyDiscount = ({ items, discount }: Args) => {
	const hasDiscount = discount > 0;
	const hasItems = itemsCanHaveDiscount({ items }).length > 0;
	return hasDiscount && hasItems;
};
