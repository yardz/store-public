import { Address, Delivery } from '@lab77store/domain';
import { LegacyResponse } from '../deliveries.types';
import { mapLegacyResponseToAlert } from './mapLegacyResponseToAlert';

interface Args {
	legacyResponse: LegacyResponse;
	address: Address;
	preOrderAdditionalTime?: number;
}
export const mapLegacyResponseToDelivery = ({ address, legacyResponse, preOrderAdditionalTime }: Args): Delivery => {
	const deliveryTime = Number(legacyResponse.prazo) + (preOrderAdditionalTime || 0);
	return {
		_id: legacyResponse.codigo,
		price: Number(legacyResponse.valor.replace(',', '.').replace(/[^\d.-]/g, '')),
		method: legacyResponse.metodo,
		deliveryTime,
		address,
		alerts: mapLegacyResponseToAlert({ legacyResponse, preOrderAdditionalTime, deliveryTime }),
	};
};
