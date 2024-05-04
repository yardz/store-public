import { Delivery } from './Delivery';
import { VariationAttribute } from './Variation';
import { ImageBothRequired } from './Image';

export interface OrderDelivery extends Delivery {
	recipientName: string;
	track?: {
		redirect?: string; // redireciona para o site dos correios ou seja qual for
		/**
		 * Ainda não sei como faremos essa parte de rastreamento.
		 * Precisamos ter uma idéia da API do serviço que vamos utilizar para saber como construir isso.
		 *  - A princípio vamos assumir que o back vai montar uma URL e enviar para o front, e no front precisamos apenas redirecionar
		 */
	};
}

export interface OrderItem {
	productId: string; // id da produto (mongo)
	variationId: string; // id do variação (mongo)
	name: string; // nome do prduto // "Camiseta Lab 77"
	originalPrice: number; // preço original por perça // Essa camiseta originalmente custaria 100
	price: number; // preço original por perça // mas eu tenho desconto e paguei apenas 90 reais.
	attributes: VariationAttribute[]; // atributo dessa variação // ex: Modelo: Relax, Cor: Vermelho, Tamanho: P
	photo: ImageBothRequired; // usa a imagem do carrinho (da variação)
}

export type OrderStatus =
	| 'pending payment'
	| 'processing'
	| 'sent'
	| 'completed'
	| 'returned'
	| 'partially returned'
	| 'payment refused'
	| 'canceled'
	| 'without status'
	| 'others';

export interface Order {
	_id: string;
	uid: string;

	items: OrderItem[]; // se eu comprar 2 itens iguais, eu coloco 2 itens dentro dessa lisa. O motivo disso é pq se tiver um desconto em apenas 1 item fica mais fácil de tratar
	packages: number;

	originalItemsPrice: number; // valor bruto dos itens da compra, sem descontos
	itemsPrice: number; // valor liquido dos itens da compra, com os descontos

	originalOrderPrice: number; // valor total da compra bruta (sem descontos) = itens + frete (sem desonto)
	discountPrice: number; // qual o valor total dos descontos aplicados na compra

	orderPrice: number; // quanto vc pagou de verdade nessa compra = itens + frete - descontos
	delivery: OrderDelivery; // (Aqui contem a previsão de entrega) -> delivery.deliveryDate

	cupon?: {
		cuponId: string;
		code: string;
		value: number;
		percent: number;
		shipping: 'free' | 'normal';
	};

	status: OrderStatus;

	invoice?: { number: string; url: string }; // nota fiscal
	date: number; // data da compra // timestamp
	approvedDate?: number; // data que a compra foi aprovada (se foi) // timestamp
	deliveryDateSent?: number; // data que a compra foi enviada (se foi) // timestamp

	note?: string; // observação que o cliente escreveu
}

export interface OrderAdmin {
	_id: string;
	legacyId: string;
	client: { name: string; email: string };
	cupon?: string;
	createdAt: number;
}

export interface OrderAdminListItem {
	_id: string;
	legacyId: string;
	client: { name: string; email: string };
	cupon?: string;
	createdAt: number;
}

export interface OrderAdminListFilter {
	orderId?: string;
	legacyId?: string;
	purshaseDate?: string;
}
