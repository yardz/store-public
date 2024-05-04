import React from 'react';
import { SlideImage as ISlideImage } from '@lab77store/domain';
import { Image, ImageSizeOptions } from '@App/Components/Image';
import Link from 'next/link';

interface Props {
	slideImage: ISlideImage;
	size?: ImageSizeOptions;
}

export const SlideImage: React.FC<Props> = ({ slideImage, size }) => {
	if (slideImage.url) {
		return (
			<Link href={slideImage.url}>
				<a>
					<Image image={slideImage.image} size={size} />
				</a>
			</Link>
		);
	}
	return <Image image={slideImage.image} size={size} />;
};
