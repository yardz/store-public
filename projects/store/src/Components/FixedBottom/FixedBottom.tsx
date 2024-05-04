import React from 'react';
import { isIOS } from '@App/Utils';
import classNames from 'classnames';

import styles from './FixedBottom.module.scss';

interface Props {
	children?: JSX.Element | JSX.Element[];
}

export const FixedBottom: React.FC<Props> = ({ children }) => {
	const ios = isIOS();

	return (
		<div className={classNames('fixed-bottom')}>
			{children}
			{ios && <div className={styles.ios} />}
		</div>
	);
};
