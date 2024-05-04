import { OrderStatus } from '@lab77store/domain';

const displayStatus = (orderStatus: OrderStatus) => {
	switch (orderStatus) {
		case 'pending payment':
			return 'Aguardando pagamento';
		case 'processing':
			return 'Processando';
		case 'sent':
			return 'Enviado';
		case 'completed':
			return 'Completa';
		case 'returned':
		case 'partially returned':
			return 'Devolvida';
		case 'payment refused':
			return 'Pagamento recusado';
		case 'canceled':
			return 'Cancelada';
		default:
			return '';
	}
};

const status = (orderStatus: OrderStatus): 'warning' | 'success' | 'danger' | 'info' => {
	switch (orderStatus) {
		case 'pending payment':
			return 'warning';
		case 'processing':
			return 'success';
		case 'sent':
			return 'success';
		case 'completed':
			return 'success';
		case 'returned':
		case 'partially returned':
			return 'danger';
		case 'payment refused':
			return 'danger';
		case 'canceled':
			return 'danger';
		default:
			return 'info';
	}
};

export const orderDisplay = {
	displayStatus,
	status,
};
