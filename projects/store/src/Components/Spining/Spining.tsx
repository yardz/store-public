import React from 'react';

import styles from './Spining.module.scss';

interface Props {}

export const Spining: React.FC<Props> = () => (
	<div className={styles.Spining}>
		<div>LOADING...</div>
	</div>
);
