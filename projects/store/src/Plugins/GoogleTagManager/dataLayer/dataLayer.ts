/* eslint-disable @typescript-eslint/ban-types */
declare global {
	interface Window {
		dataLayer: object[];
	}
}

export const dataLayer = (dataLayerEvent: object) => {
	if (typeof window === 'undefined') return;
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(dataLayerEvent);
};
