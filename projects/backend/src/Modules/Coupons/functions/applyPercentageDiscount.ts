import { OrderItem } from '@lab77store/domain';
import { cloneDeep } from 'lodash';
import NP from 'number-precision';

interface Args {
	item: OrderItem;
	percentage: number;
}

export const applyPercentageDiscount = (args: Args) => {
	const { percentage } = args;
	const item = cloneDeep(args.item);

	item.price = NP.round(NP.times(item.price, Math.min(percentage, 1)), 2);
	// eslint-disable-next-line no-unused-expressions
	item.price > 0.01 ? item.price : 0.01;
	return item;
};
