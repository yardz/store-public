import React from 'react';
import { ImageBothOptional } from '@lab77store/domain';
import { ShowOnDevice } from '../ShowOnDevice';
import { ImageSizeOptions } from './ImageSize';
import dynamic from 'next/dynamic';

const CloudnaryImage = dynamic(() => import('./CloudnaryImage').then(mod => mod.CloudnaryImage), { ssr: false });
const CommonImage = dynamic(() => import('./CommonImage').then(mod => mod.CommonImage));

interface Props {
	image?: ImageBothOptional;
	size?: ImageSizeOptions;
}

export const Image: React.FC<Props> = ({ image, size }) => {
	let mobile: JSX.Element | null = null;
	if (image?.mobile?.file) {
		mobile = image.mobile.file?.public_id ? (
			<CloudnaryImage image={image.mobile} mode="mobile" size={size?.mobile} />
		) : (
			<CommonImage image={image.mobile} mode="mobile" size={size?.mobile} />
		);
	}

	let desktop: JSX.Element | null = null;
	if (image?.desktop?.file) {
		desktop = image.desktop.file?.public_id ? (
			<CloudnaryImage image={image.desktop} mode="desktop" size={size?.desktop} />
		) : (
			<CommonImage image={image.desktop} mode="desktop" size={size?.desktop} />
		);
	}

	return (
		<>
			<ShowOnDevice.ShowMobile>
				<>{mobile}</>
			</ShowOnDevice.ShowMobile>
			<ShowOnDevice.ShowDesktop>
				<>{desktop}</>
			</ShowOnDevice.ShowDesktop>
		</>
	);
};
