import classNames from 'classnames';
import React from 'react';

import styles from './Bar.module.scss';

interface Props {
	active?: boolean;
	size: number;
}

export const Bar: React.FC<Props> = ({ active, size }) => (
	<div className={classNames(styles.bar, { [styles.active]: active })} style={{ width: size }} />
);
