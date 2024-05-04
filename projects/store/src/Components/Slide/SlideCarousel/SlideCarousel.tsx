import React from 'react';
import { SlideImage as ISlideImage } from '@lab77store/domain';
import chunk from 'lodash/chunk';
import { ImageSizeOptions } from '@App/Components/Image';
import dynamic from 'next/dynamic';

const SlideImage = dynamic(() => import('../SlideImage').then(mod => mod.SlideImage));
const Carousel = dynamic(() => import('@App/Components/Carousel').then(mod => mod.Carousel));

interface Props {
	_id: string;
	images: ISlideImage[];
	rowSize: number;
	size?: ImageSizeOptions;
}

export const SlideCarousel: React.FC<Props> = ({ _id, images, rowSize, size }) => {
	const slides = chunk(images, rowSize).map((row, rowKey) => (
		<div key={rowKey} className="row">
			{row.map(image => (
				<div className="col" key={image._id}>
					<SlideImage slideImage={image} size={size} />
				</div>
			))}
		</div>
	));

	return (
		<div className="container-fluid gx-0 overflow-hidden">
			<Carousel _id={`slide-carousel-${_id}`} items={slides} />
		</div>
	);
};
