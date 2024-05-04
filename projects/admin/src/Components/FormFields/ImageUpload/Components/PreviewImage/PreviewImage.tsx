import React from 'react';
import { IFile } from '@lab77store/database';
import { Image } from 'Components/Image';

interface Props {
	file?: IFile;
}

export const PreviewImage: React.FC<Props> = ({ file }) => {
	return <Image image={file} size={{ height: '100', width: '100' }} />;
};
