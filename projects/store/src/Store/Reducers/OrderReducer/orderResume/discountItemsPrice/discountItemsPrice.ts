import { itemsFixedDiscount } from './itemsFixedDiscount';
import { itemsPercentageDiscount } from './itemsPercentageDiscount';
import { minItemsPrice } from './minItemsPrice';

interface Args {
	items: {
		quantity: number;
		price: number;
	};
	coupon?: {
		value?: number;
		percent?: number;
	};
}

export const discountItemsPrice = ({ items, coupon }: Args) => {
	if (!coupon) {
		return items.price;
	}
	let itemsPrice = items.price;
	itemsPrice = itemsFixedDiscount({ items, fixedDiscount: coupon.value });
	itemsPrice = itemsPercentageDiscount({ itemsPrice, percent: coupon.percent });

	const minPrice = minItemsPrice({ items });
	if (minPrice > itemsPrice) {
		return minPrice;
	}

	return itemsPrice;
};
