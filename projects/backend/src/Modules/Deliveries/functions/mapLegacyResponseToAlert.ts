import { LegacyResponse } from '../deliveries.types';
import { DeliveryAlert } from '@lab77store/domain';

interface Args {
	legacyResponse: LegacyResponse;
	deliveryTime: number;
	preOrderAdditionalTime?: number;
}
export const mapLegacyResponseToAlert = ({ legacyResponse, preOrderAdditionalTime, deliveryTime }: Args): DeliveryAlert[] => {
	let preOrderAdditionalTimeMessage = '';
	if (preOrderAdditionalTime) {
		preOrderAdditionalTimeMessage = `Um dos itens do seu carrinho será confeccionado para você e por isso precisamos adicionar ${preOrderAdditionalTime} dias no prazo de entrega para produzi-lo, somado ao tempo do frete o prazo total será de ${deliveryTime} dias.`;
	}

	// eslint-disable-next-line no-shadow
	enum Type {
		tip = 'tip',
		warning = 'warning',
		danger = 'danger',
	}

	const alerts = [
		{ order: 1, content: legacyResponse.aviso || '', type: Type.danger },
		{ order: 2, content: legacyResponse.aviso_6 || '', type: Type.tip },
		{ order: 3, content: legacyResponse.aviso_2 || '', type: Type.danger },
		{ order: 4, content: preOrderAdditionalTimeMessage, type: Type.tip },
		{ order: 5, content: legacyResponse.aviso_4 || '', type: Type.tip },
		{ order: 6, content: legacyResponse.aviso_5 || '', type: Type.tip },
	].filter(({ content }) => !!content);

	return alerts;
};
