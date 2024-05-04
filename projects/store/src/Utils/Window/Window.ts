const getSize = () => ({
	width: window.innerWidth,
	height: window.innerHeight,
});

const getDevice = (width?: number) => {
	const size = width || getSize().width;
	if (size < 364) {
		return 'Mobile';
	}
	if (size < 1024) {
		return 'Tablet';
	}
	return 'Desktop';
};

export const WindowUtils = { getSize, getDevice };
