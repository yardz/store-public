/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ImageFile } from '@lab77store/domain';
import classNames from 'classnames';
import { ImageSize } from './ImageSize';

interface Props {
	image?: ImageFile;
	size?: ImageSize;
	mode: 'mobile' | 'desktop';
}

export const CommonImage: React.FC<Props> = ({ image, size, mode }) => {
	if (!image?.file?.url) {
		return null;
	}
	return (
		<img
			src={image.file.url}
			alt={image?.alt}
			loading="lazy"
			className={classNames('img-fluid', {
				'd-block d-lg-none': mode === 'mobile',
				'd-none d-lg-block': mode === 'desktop',
			})}
			{...size}
		/>
	);
};
