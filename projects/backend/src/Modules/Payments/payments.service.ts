import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaymentLegacyService } from '@Modules/Legacy/payment.legacy.service';
import { Pagination, Payment } from '@lab77store/domain';
import dayjs from 'dayjs';
import { FilterQuery, Model } from 'mongoose';
import { paymentGateway, paymentStatusById } from './functions';
import { PaymentDocument } from './payments.schema';
import { documentQueryPaginate } from '@Utils/functions/documentQueryPaginate';

@Injectable()
export class PaymentsService {
	constructor(
		private readonly logger: Logger,
		@InjectModel('Payments') private paymentModel: Model<PaymentDocument>,
		private readonly paymentLegacyService: PaymentLegacyService,
	) {
		this.logger.setContext('PaymentsService');
	}

	/** @deprecated deve ser removido assim que possível */
	private async hidratePayment(paymentMongoDb: PaymentDocument): Promise<Payment> {
		const payment = await this.paymentLegacyService.findOne({ id: paymentMongoDb.legacyId });
		if (!payment) {
			this.logger.error({ message: 'Pagamento existe no mongo mas não existe no mysql', mongodb: paymentMongoDb });
			throw new NotFoundException();
		}
		const [gateway, method] = paymentGateway(payment.method);
		const status = paymentStatusById(payment.statusId);
		let meta:
			| {
					billet?: {
						url: string;
						barCode: string;
					};
			  }
			| undefined;
		if (method === 'billet') {
			meta = {
				...meta,
				...{
					billet: {
						url: payment.billingReceiptUrl,
						barCode: payment.barCode,
					},
				},
			};
		}
		return {
			_id: paymentMongoDb._id.toString(),
			order: paymentMongoDb.order.toString(),
			price: paymentMongoDb.price,
			gateway,
			method,
			status,
			installments: payment.installments,
			meta,
			approvedDate: [2, 3, 4, 7, 8].includes(payment.statusId) && payment.updatedAt ? dayjs(payment.updatedAt).unix() * 1000 : undefined,
		};
	}

	async find({ filter, paginate }: { filter: FilterQuery<PaymentDocument>; paginate?: Pagination }): Promise<Payment[]> {
		let documentQuery = this.paymentModel.find(filter).sort({ _id: 1 });
		if (paginate) {
			documentQuery = documentQueryPaginate(documentQuery, paginate);
		}
		const list = await documentQuery.exec();
		return Promise.all(list.map(i => this.hidratePayment(i)));
	}

	async findOne(filter: FilterQuery<PaymentDocument>): Promise<Payment | void> {
		const document = await this.paymentModel.findOne(filter).exec();
		if (document) {
			return this.hidratePayment(document);
		}
	}
}
