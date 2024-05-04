import { dataLayer } from './dataLayer';

export interface GoogleTagManagerPromotion {
	id: string;
	name: string;
	creative?: string; // banner1
	position?: string; // slot1
}

// sim, o click pode ser em multiplos itens
export const GoogleTagManagerSelectPromotion = ({ promotions }: { promotions: GoogleTagManagerPromotion[] }) => {
	const event = {
		event: 'select_promotion',
		ecommerce: { promoClick: { promotions } },
	};
	dataLayer(event);
};
