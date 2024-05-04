import React from 'react';
import { FacebookIcoSvg } from '@App/Assets/images/FacebookIcoSvg';
import { InstagramIcoSvg } from '@App/Assets/images/InstagramIcoSvg';
import { LinkedinIcoSvg } from '@App/Assets/images/LinkedinIcoSvg';
import { TwitterIcoSvg } from '@App/Assets/images/TwitterIcoSvg';

import styles from './SocialMedia.module.scss';

interface Props {
	media: 'twitter' | 'facebook' | 'linkedin' | 'instagram';
}

export const SocialMedia: React.FC<Props> = ({ media }) => {
	let icon: JSX.Element;
	switch (media) {
		case 'facebook':
			icon = (
				<a href="https://www.facebook.com/lab77store" target="_blank" rel="noreferrer" title="Facebook Lab77">
					<FacebookIcoSvg />
				</a>
			);
			break;
		case 'instagram':
			icon = (
				<a href="https://www.instagram.com/lab77store/" target="_blank" rel="noreferrer" title="Instagram Lab77">
					<InstagramIcoSvg />
				</a>
			);
			break;
		case 'linkedin':
			icon = (
				<a href="https://www.linkedin.com/company/lab77/" target="_blank" rel="noreferrer" title="Linkedin Lab77">
					<LinkedinIcoSvg />
				</a>
			);
			break;
		case 'twitter':
			icon = (
				<a href="http://www.twitter.com/Labsetesete" target="_blank" rel="noreferrer" title="Twitter Lab77">
					<TwitterIcoSvg />
				</a>
			);
			break;
		default:
			icon = <></>;
	}
	return <div className={styles.mediaContent}>{icon}</div>;
};
