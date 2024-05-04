import { OrderItem } from '@lab77store/domain';

interface Args {
	items: OrderItem[];
}

export const lowestItemPrice = ({ items }: Args) => {
	const prices = items.map(i => i.price);
	return Math.min(...prices);
};
