import { IsActiveSmartHint } from './IsActiveSmartHint';

type SmartHintPages = 'home' | 'category' | 'product' | 'cart' | 'checkout' | 'search' | 'searchWithResults' | 'notfound';

export const SmartHintSetPage = ({ page, data = {} }: { page: SmartHintPages; data?: { content?: string } }) => {
	const isActive = IsActiveSmartHint();
	if (!isActive) return;
	window.SmartHint.Call('setPage', { type: page, data });
};
