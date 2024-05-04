import React from 'react';
import { IFile } from '@lab77store/database';
import { Image as ImageCloudnary, Transformation, Placeholder } from 'cloudinary-react';

interface Props {
	image?: IFile;
	size?: {
		width: string;
		height: string;
	};
}

export const Image: React.FC<Props> = ({ image, size }) => {
	if (!image) {
		return null;
	}
	return (
		<>
			<ImageCloudnary cloudName="lab77" publicId={image.public_id}>
				{size && <Transformation {...size} crop="fill" />}
				<Placeholder type="predominant" />
			</ImageCloudnary>
		</>
	);
};
