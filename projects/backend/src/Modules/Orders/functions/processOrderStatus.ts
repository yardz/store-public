import { StatusLegacyModel } from '@Modules/Legacy/status.legacy.types';
import { OrderStatus } from '@lab77store/domain';

/** @deprecated deve ser removido assim que possível */
export const processOrderStatus = (statusOrder?: StatusLegacyModel): OrderStatus => {
	switch (statusOrder?.name) {
		case 'Preparando pedido':
			return 'processing';
		case 'Parcialmente Devolvido':
			return 'partially returned';
		case 'Pagamento Recusado':
			return 'payment refused';
		case 'Enviado':
			return 'sent';
		case 'Devolvido':
			return 'returned';
		case 'Completo':
			return 'completed';
		case 'Cancelado':
			return 'canceled';
		case 'Aguardando confirmação de pagamento':
			return 'pending payment';
		case 'SEM STATUS':
			return 'without status';
		default:
			return 'without status';
	}
};
