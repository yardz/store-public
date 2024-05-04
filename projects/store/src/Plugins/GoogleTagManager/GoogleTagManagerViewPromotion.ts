import { dataLayer } from './dataLayer';

export interface GoogleTagManagerPromotion {
	id: string;
	name: string;
	creative?: string; // banner1
	position?: string; // slot1
}

export const GoogleTagManagerViewPromotion = ({ promotions }: { promotions: GoogleTagManagerPromotion[] }) => {
	const event = {
		event: 'view_promotion',
		ecommerce: { promoView: { promotions } },
	};

	dataLayer(event);
};
