export const isIOS = () => {
	if (typeof window === 'undefined') {
		return false;
	}
	return (
		['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
		(navigator.userAgent.includes('Mac') && 'ontouchend' in document)
	);
};
