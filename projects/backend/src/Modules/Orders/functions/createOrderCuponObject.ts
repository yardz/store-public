import { DiscountsLegacyModel } from '@Modules/Legacy/discounts.legacy.types';

type shippingType = 'free' | 'normal';

/** @deprecated deve ser removido assim que possível */
export const createOrderCuponObject = (discounts?: DiscountsLegacyModel) => {
	if (!discounts) {
		return undefined;
	}

	const shipping: shippingType = discounts.shipping ? 'free' : 'normal';

	return {
		cuponId: discounts.id.toString(),
		code: discounts.code,
		value: discounts.fixedDiscount,
		percent: discounts.percentDiscount,
		shipping,
	};
};
