import { useWindowSize } from '../useWindowSize';

export const useDevice = () => {
	const { width } = useWindowSize();
	if (!width) {
		return undefined;
	}
	return width < 992 ? 'mobile' : 'desktop';
};
