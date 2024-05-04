import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Address, Delivery } from '@lab77store/domain';
import to from 'await-to-js';
import { CouponsService } from '@Modules/Coupons/coupons.service';
import { getTotalItemsValue, mapLegacyResponseToDelivery } from './functions';
import { LegacyResponse } from './deliveries.types';

@Injectable()
export class DeliveriesService {
	constructor(private readonly logger: Logger, private readonly couponsService: CouponsService, private httpService: HttpService) {
		this.logger.setContext('DeliveriesService');
	}

	async getDeliveryOptions({
		address,
		items,
		coupon,
		preOrderAdditionalTime,
	}: {
		address: Address;
		items: { price: number; quantity?: number }[];
		coupon?: string;
		preOrderAdditionalTime?: number;
	}): Promise<Delivery[]> {
		let free = false;
		if (coupon) {
			const validCoupon = await this.couponsService.getCoupon({ coupon });
			free = validCoupon?.shipping === 'free';
		}

		// se tiver cupom gratis, considera que o valor da compra é muito alto, para poder habilitar o frete grátis
		const valor = free ? 99999 : getTotalItemsValue({ items });
		const payload = { valor, cep: address.zipCode };

		const [err, response] = await to(
			this.httpService.post<LegacyResponse[]>(`${process.env.LEGACY_LAB77_BASE_URL}/logistica/frete.json`, payload).toPromise(),
		);
		if (err || !response) {
			this.logger.error({ message: 'Erro ao tentar buscar opções de frete', err, payload });
			return [];
		}

		const deliveryOptions = response.data.map(legacyResponse =>
			mapLegacyResponseToDelivery({ legacyResponse, address, preOrderAdditionalTime }),
		);

		return deliveryOptions;
	}
}
