import { OrderDelivery } from '@lab77store/database';
import { Delivery } from '@lab77store/domain';

export const deliveryToOrderDelivery = ({ delivery }: { delivery: Delivery }): OrderDelivery => ({
	_id: delivery._id,
	zipCode: delivery.address.zipCode,
	price: delivery.price,
	deliveryTime: delivery.deliveryTime,
});
