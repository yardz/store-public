import { OrderItem } from '@lab77store/domain';

interface Args {
	items: OrderItem[];
}

export const itemsCanHaveDiscount = ({ items }: Args) => items.filter(i => i.price > 0.01);
