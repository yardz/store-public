import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DiscountsLegacyModel } from './discounts.legacy.types';

@Injectable()
export class DiscountsLegacyService {
	constructor(
		@InjectModel(DiscountsLegacyModel)
		private readonly discountsLegacyModel: typeof DiscountsLegacyModel,
	) {}

	/** @deprecated deve ser removido assim que possível */
	findCoupon(code: string) {
		return this.discountsLegacyModel.findOne({
			where: {
				code,
				deleted: false,
			},
		});
	}
}
