import { BadGatewayException, BadRequestException, HttpService, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaymentLegacyService } from '@Modules/Legacy/payment.legacy.service';
import { Order } from '@lab77store/domain';
import { Model } from 'mongoose';
import { CardPayment } from './payments.args';
import { PaymentDocument } from './payments.schema';

@Injectable()
export class PaymentsCheckoutService {
	constructor(
		private readonly logger: Logger,
		@InjectModel('Payments') private paymentModel: Model<PaymentDocument>,
		private readonly httpService: HttpService,
		private readonly paymentLegacyService: PaymentLegacyService,
	) {
		this.logger.setContext('PaymentsCheckoutService');
	}

	async createBilletPayment({ legacyId, order, uid }: { legacyId: number; order: Order; uid: string }) {
		const request = { key: '5ded0c6bca7f67b6dc6cf6698ca6307f', orderId: legacyId };

		this.logger.log({ message: 'Criando pagamento com boleto bancário', uid, request, order });
		const response = await this.httpService
			.post(`${process.env.LEGACY_LAB77_BASE_URL}/vendas/vendasSiteNovoBoleto.json`, request)
			.toPromise();

		if (!response?.data?.id) {
			this.logger.error({ message: 'Ocorreu um erro ao tentar efetuar a compra', uid, payload: request, type: 'billet' });
			throw new BadGatewayException();
		}
		if (!response?.data?.boleto_url || !response?.data?.id || !response?.data?.boleto_codigobarras) {
			this.logger.error({ message: 'Resposta do endpoint foi incompleta', uid, response: response.data });
			throw new BadGatewayException();
		}

		this.logger.log({ message: 'Atualizando compra no mysql', uid, 'response.data.id': response.data.id });
		const legacyPayment = await this.paymentLegacyService.findOne({ pagarmeId: response.data.id });
		if (!legacyPayment) {
			this.logger.error({
				message: 'Resposta do endpoint foi positivo, porem o pagamento não foi encontrado no mysql',
				uid,
				response: response.data,
				type: 'billet',
			});
			throw new BadGatewayException();
		}
		await new this.paymentModel({ legacyId: legacyPayment.id, order: order._id, uid, price: order.orderPrice }).save();
		this.logger.log({ message: 'Compra atualizada', uid });
	}

	async createCreditCardPayment({
		legacyId,
		cardPayment,
		order,
		uid,
	}: {
		legacyId: number;
		order: Order;
		cardPayment: CardPayment;
		uid: string;
	}) {
		this.logger.log({ message: 'Criando pagamento com cartão de crédito', uid, order });
		if (!cardPayment && !order) {
			this.logger.error({ message: 'Usuário enviou uma compra com parcelas inválidas', uid });
			throw new BadRequestException('invalid installments');
		}

		const request = {
			key: '5ded0c6bca7f67b6dc6cf6698ca6307f',
			orderId: legacyId,
			installments: cardPayment.installments,
			card: {
				numero: cardPayment.cardNumber,
				nome: cardPayment.holderName,
				mes: cardPayment.expirationMonth.toString().padStart(2, '0'),
				ano: cardPayment.expirationYear.toString().slice(-2),
			},
		};

		this.logger.log({ message: 'Enviando request', uid });
		const response = await this.httpService
			.post<{ id?: number }>(`${process.env.LEGACY_LAB77_BASE_URL}/vendas/vendasSiteNovoCartao.json`, request)
			.toPromise();

		if (!response?.data?.id) {
			const payload = { key: request.key, orderId: request.orderId, installments: request.installments };
			this.logger.error({
				message: 'Ocorreu um erro ao tentar efetuar a compra',
				uid,
				payload,
				respone: response.data,
				type: 'credit card',
			});
			return new BadGatewayException();
		}

		this.logger.log({ message: 'Atualizando compra no mysql', uid, 'response.data.id': response.data.id });
		const legacyPayment = await this.paymentLegacyService.findOne({ pagarmeId: response.data.id });
		if (!legacyPayment) {
			this.logger.error({
				message: 'Resposta do endpoint foi positivo, porem o pagamento não foi encontrado no mysql',
				uid,
				response: response.data,
				type: 'credit card',
			});
			return;
		}
		await new this.paymentModel({ legacyId: legacyPayment.id, order: order._id, uid, price: order.orderPrice }).save();
		this.logger.log({ message: 'Compra atualizada', uid });
	}
}
