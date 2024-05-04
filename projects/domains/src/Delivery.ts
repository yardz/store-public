import { Address } from './Address';

export interface DeliveryAlert {
	order: number;
	content: string;
	type: 'tip' | 'warning' | 'danger';
}

export interface Delivery {
	_id: string;
	price: number;
	deliveryTime: number; // numero de dias que a entrega vai demorar (após o pedido aprovado!!!)
	method: string; // PAC / SEDEX-10 / ETotal / Flash / Motoboy / etc
	address: Address;
	deliveryDate?: number;
	alerts?: DeliveryAlert[];
}
