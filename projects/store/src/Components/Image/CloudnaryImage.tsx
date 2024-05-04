import React from 'react';
import { ImageFile } from '@lab77store/domain';
import { Cloudinary } from '@cloudinary/base';
import {
	AdvancedImage,
	// placeholder
} from '@cloudinary/react';

// Import any actions required for transformations.
import { fill } from '@cloudinary/base/actions/resize';
import { dpr, quality, format } from '@cloudinary/base/actions/delivery';

import { ImageSize } from './ImageSize';
import classNames from 'classnames';

interface Props {
	image: ImageFile;
	size?: ImageSize;
	mode: 'mobile' | 'desktop';
}

export const CloudnaryImage: React.FC<Props> = ({ image, size, mode }) => {
	const cld = new Cloudinary({
		cloud: {
			cloudName: 'lab77',
		},
	});
	const cloudnaryImage = cld.image(image.file.public_id);
	cloudnaryImage
		.resize(fill().width(size?.width ? Math.ceil(size?.width) : 'auto'))
		.delivery(dpr(window.devicePixelRatio))
		.delivery(quality('auto'))
		.delivery(format('auto'));
	return (
		<AdvancedImage
			cldImg={cloudnaryImage}
			// plugins={[placeholder()]}
			className={classNames('img-fluid', {
				'd-block d-lg-none': mode === 'mobile',
				'd-none d-lg-block': mode === 'desktop',
			})}
			alt={image.alt}
		/>
	);
};
