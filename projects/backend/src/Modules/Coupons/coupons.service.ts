import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Coupon, OrderItem } from '@lab77store/domain';

import * as discountUtils from './functions';
import { DiscountsLegacyService } from '../Legacy/discounts.legacy.service';

@Injectable()
export class CouponsService {
	constructor(private readonly logger: Logger, private readonly discountsLegacyService: DiscountsLegacyService) {
		this.logger.setContext('CouponsService');
	}

	async getCoupon({ coupon }: { coupon: string }): Promise<Coupon | undefined> {
		const discountCoupon = await this.discountsLegacyService.findCoupon(coupon);
		if (!discountCoupon) {
			return undefined;
		}

		if (discountCoupon.quantityUsed >= discountCoupon.quantity) {
			return undefined;
		}

		// Se o cupom for válido, retorna o cupom
		return {
			code: discountCoupon.code,
			value: discountCoupon.fixedDiscount,
			percent: discountCoupon.percentDiscount,
			shipping: discountCoupon.shipping ? 'free' : 'normal',
			stock: {
				free: discountCoupon.quantity - discountCoupon.quantityUsed,
				locked: 0,
				total: discountCoupon.quantity - discountCoupon.quantityUsed,
			},
			active: true,
		};
	}

	private applyFixedDiscount({ items, discount }: { items: OrderItem[]; discount?: number }): OrderItem[] {
		if (!discount) {
			return items;
		}
		let finalItems: OrderItem[] = items;
		let remainingDiscount = discountUtils.remainingFixDiscount({ items, discount });
		let discountPerItem = discountUtils.maxFixDiscountPerItem({ discount: remainingDiscount, items: finalItems });
		while (discountPerItem && discountUtils.canApplyDiscount({ items: finalItems, discount: remainingDiscount })) {
			// eslint-disable-next-line no-loop-func
			finalItems = finalItems.map(item => {
				if (item.price === 0.01) return item;
				return discountUtils.applyFixedDiscount({ item, discount: discountPerItem });
			});
			remainingDiscount = discountUtils.remainingFixDiscount({ items: finalItems, discount: remainingDiscount });
			discountPerItem = discountUtils.maxFixDiscountPerItem({ items: finalItems, discount: remainingDiscount });
		}
		return finalItems;
	}

	private applyPercentageDiscount({ items, discount }: { items: OrderItem[]; discount?: number }): OrderItem[] {
		if (!discount) {
			return items;
		}
		const percentage = discountUtils.getPercentageDiscount({ discount });
		return items.map(item => discountUtils.applyPercentageDiscount({ item, percentage }));
	}

	async applyCoupon({ items, coupon, uid }: { items: OrderItem[]; coupon?: string; uid: string }): Promise<OrderItem[]> {
		if (!coupon) {
			return items;
		}
		const validCoupon = await this.getCoupon({ coupon });
		if (!validCoupon) {
			this.logger.error({ message: 'O usuário finalizou uma compra com um cupom que não existe ou é inválido', uid, coupon });
			throw new BadRequestException('This coupon is not valid');
		}
		const { value, percent } = validCoupon;
		const fixedDiscountItems = this.applyFixedDiscount({ items, discount: value });
		const percentageDiscountItems = this.applyPercentageDiscount({ items: fixedDiscountItems, discount: percent });
		return percentageDiscountItems;
	}
}
