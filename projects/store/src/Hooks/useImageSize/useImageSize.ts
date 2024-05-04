import { useWindowSize } from '../useWindowSize';

export const useImageSize = () => {
	const windowSize = useWindowSize();

	const desktopWidth = windowSize.width || 1680;
	const mobileWidth = windowSize.width || 376;

	const IMAGE_SIZE_FULL_WIDTH = { desktop: { width: desktopWidth }, mobile: { width: mobileWidth } };
	const IMAGE_SIZE_HALF_WIDTH = { desktop: { width: desktopWidth / 2 }, mobile: { width: mobileWidth / 2 } };
	const IMAGE_SIZE_DESK_HALF_WIDTH_MOBILE_FULL_WIDTH = {
		desktop: { width: desktopWidth / 2 },
		mobile: { width: mobileWidth },
	};
	const IMAGE_SIZE_PRODUCT_LIST = { desktop: { width: desktopWidth / 4 }, mobile: { width: mobileWidth / 2 } };

	return { IMAGE_SIZE_FULL_WIDTH, IMAGE_SIZE_HALF_WIDTH, IMAGE_SIZE_DESK_HALF_WIDTH_MOBILE_FULL_WIDTH, IMAGE_SIZE_PRODUCT_LIST };
};
