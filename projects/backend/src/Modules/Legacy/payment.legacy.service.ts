import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentLegacyModel as Payment } from './payment.legacy.types';
import { WhereOptions } from 'sequelize';

@Injectable()
export class PaymentLegacyService {
	constructor(
		@InjectModel(Payment)
		private readonly paymentLegacyModel: typeof Payment,
	) {}

	/** @deprecated deve ser removido assim que possível */
	findOne(where: WhereOptions) {
		return this.paymentLegacyModel.findOne({ where });
	}

	/** @deprecated deve ser removido assim que possível */
	findAll(where?: WhereOptions, limit?: number) {
		return this.paymentLegacyModel.findAll({ where, limit });
	}
}
