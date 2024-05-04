import { dataLayer } from './dataLayer';

export const GoogleTagManagerPageView = () => {
	dataLayer({ event: 'page_view' });
};
