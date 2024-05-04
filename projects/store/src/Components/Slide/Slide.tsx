import React from 'react';
import { Slide as ISlide } from '@lab77store/domain';
import { useDevice } from '@App/Hooks/useDevice';
import { ImageSizeOptions } from '@App/Components/Image';
import cloneDeep from 'lodash/cloneDeep';
import dynamic from 'next/dynamic';

const SlideCarousel = dynamic(() => import('./SlideCarousel').then(mod => mod.SlideCarousel));
const SlideBanner = dynamic(() => import('./SlideBanner').then(mod => mod.SlideBanner));

interface Props {
	slide: ISlide;
	size?: ImageSizeOptions;
}

const resize = (size: ImageSizeOptions | undefined, rows: number): ImageSizeOptions | undefined => {
	if (!size) return undefined;
	const resizeImage = cloneDeep(size);
	if (resizeImage.desktop?.width) resizeImage.desktop.width /= rows;
	if (resizeImage.desktop?.height) resizeImage.desktop.height /= rows;
	if (resizeImage.mobile?.width) resizeImage.mobile.width /= rows;
	if (resizeImage.mobile?.height) resizeImage.mobile.height /= rows;
	return resizeImage;
};

export const Slide: React.FC<Props> = ({ slide, size }) => {
	const device = useDevice();
	const desktopImages = slide.images.filter(i => i.publish.desktop);
	const mobileImages = slide.images.filter(i => i.publish.mobile);
	if (slide.type === 'banner') {
		const bannerMobile = <SlideBanner images={mobileImages} rowSize={slide.rows.mobile} size={resize(size, slide.rows.mobile)} />;
		const bannerDesktop = <SlideBanner images={desktopImages} rowSize={slide.rows.desktop} size={resize(size, slide.rows.desktop)} />;
		if (device === 'mobile') return bannerMobile;
		if (device === 'desktop') return bannerDesktop;
		return (
			<>
				{bannerMobile}
				{bannerDesktop}
			</>
		);
	}

	const carouselMobile = (
		<SlideCarousel _id={`mobile-${slide._id}`} images={mobileImages} rowSize={slide.rows.mobile} size={resize(size, slide.rows.mobile)} />
	);
	const carouselDesktop = (
		<SlideCarousel
			_id={`desktop-${slide._id}`}
			images={desktopImages}
			rowSize={slide.rows.desktop}
			size={resize(size, slide.rows.desktop)}
		/>
	);
	if (device === 'mobile') return carouselMobile;
	if (device === 'desktop') return carouselDesktop;
	return (
		<>
			{carouselMobile}
			{carouselDesktop}
		</>
	);
};
