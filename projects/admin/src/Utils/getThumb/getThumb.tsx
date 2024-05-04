import React from 'react';
import { Image } from 'Components/Image';
import { ImageBothOptional, File } from '@lab77store/domain';

export const getThumb = (image: ImageBothOptional): JSX.Element | string => {
	let file: File | undefined;
	if (image?.mobile?.file.asset_id) {
		file = image.mobile.file;
	} else if (image?.desktop?.file.asset_id) {
		file = image.desktop.file;
	}
	return file ? <Image image={file} size={{ height: '100', width: '100' }} /> : 'Sem Imagem';
};
