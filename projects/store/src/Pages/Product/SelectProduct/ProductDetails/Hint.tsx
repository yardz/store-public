import React from 'react';
import { ProductHintIcons } from '@lab77store/domain';
import styles from './Hint.module.scss';
import { WashIcoSvg } from '@App/Assets/images/WashIcoSvg';
import { ModelIcoSvg } from '@App/Assets/images/ModelIcoSvg';
import { PersonalizeIcoSvg } from '@App/Assets/images/PersonalizeIcoSvg';
import { FeaturedIcoSvg } from '@App/Assets/images/FeaturedIcoSvg';

interface Props {
	icon: ProductHintIcons;
	text: string;
}

export const Hint: React.FC<Props> = ({ text, icon }) => {
	let iconElement: JSX.Element;
	switch (icon) {
		case 'wash':
			iconElement = <WashIcoSvg />;
			break;
		case 'model':
			iconElement = <ModelIcoSvg />;
			break;
		case 'personalize':
			iconElement = <PersonalizeIcoSvg />;
			break;
		default:
			iconElement = <FeaturedIcoSvg />;
			break;
	}

	return (
		<div className={styles.hint}>
			{iconElement}
			<p className={styles.text}>{text}</p>
		</div>
	);
};
