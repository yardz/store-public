import { PaymentStatus } from '@lab77store/domain';

export const paymentStatusById = (status: number): PaymentStatus => {
	switch (status) {
		case 1:
			return 'pending';
		case 2:
		case 3:
		case 4:
			return 'approved';
		case 5:
			return 'canceled';
		case 6:
			return 'refused';
		case 7:
			return 'refund';
		case 8:
			return 'partially canceled';
		case 0:
			return 'not found';
		default:
			return 'not found';
	}
};
