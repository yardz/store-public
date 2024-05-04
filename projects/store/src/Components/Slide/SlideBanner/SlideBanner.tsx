import React from 'react';
import { SlideImage as ISlideImage } from '@lab77store/domain';
import chunk from 'lodash/chunk';
import { ImageSizeOptions } from '@App/Components/Image';
import dynamic from 'next/dynamic';

const SlideImage = dynamic(() => import('../SlideImage').then(mod => mod.SlideImage));

interface Props {
	images: ISlideImage[];
	rowSize: number;
	size?: ImageSizeOptions;
}

export const SlideBanner: React.FC<Props> = ({ size, images, rowSize }) => {
	const banners = chunk(images, rowSize);
	return (
		<section className="container-fluid g-0 overflow-hidden">
			{banners.map((row, keyRow) => (
				<div key={keyRow} className="row g-0">
					{row.map(image => (
						<div key={image._id} className="col">
							<SlideImage slideImage={image} size={size} />
						</div>
					))}
				</div>
			))}
		</section>
	);
};
