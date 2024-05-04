import { OrderItem } from '@lab77store/domain';
import { cloneDeep } from 'lodash';
import NP from 'number-precision';

interface Args {
	item: OrderItem;
	discount: number;
}

export const applyFixedDiscount = (args: Args) => {
	const { discount } = args;
	const item = cloneDeep(args.item);
	if (discount >= item.price) {
		item.price = 0.01;
		return item;
	}
	item.price = NP.minus(item.price, discount);
	return item;
};
