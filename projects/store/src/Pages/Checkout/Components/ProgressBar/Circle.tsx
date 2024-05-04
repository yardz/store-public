import classNames from 'classnames';
import React from 'react';

import styles from './Circle.module.scss';

interface Props {
	active?: boolean;
	size: number;
}

export const Circle: React.FC<Props> = ({ active, size }) => (
	<div className={classNames(styles.circle, { [styles.active]: active })} style={{ width: size, height: size }} />
);
