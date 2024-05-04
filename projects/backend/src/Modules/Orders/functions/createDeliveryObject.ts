import { DeliveryLegacyModel } from '@Modules/Legacy/delivery.legacy.types';
import { OrderDelivery } from '@lab77store/domain';
import { createAddressObject } from './createAddressObject';

/** @deprecated deve ser removido assim que possível */
export const createDeliveryObject = (delivery?: DeliveryLegacyModel): OrderDelivery => ({
	_id: `${delivery?.method || ''}`,
	recipientName: `${delivery?.name || ''} ${delivery?.lastName || ''}`.trim(),
	price: delivery?.value || 0,
	deliveryTime: 0, // verificar da onde vem essa informação
	method: delivery?.method || '',
	address: createAddressObject(delivery?.address),
	deliveryDate: 0, // TODO: Deve-se verificar quando a compra foi aprovada e então setar a tempo de entrega
});
