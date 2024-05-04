import { useDevice } from '@App/Hooks';
import { checkoutSelector } from '@App/Store/Reducers/CheckoutReducer';
import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from './Bar';
import { Circle } from './Circle';

import styles from './ProgressBar.module.scss';

interface Props {}

export const ProgressBar: React.FC<Props> = () => {
	const device = useDevice();
	const step = useSelector(checkoutSelector.step);

	const barSize = device === 'mobile' ? 100 : 135;

	return (
		<div className={styles.ProgressBar}>
			<Circle size={17} active={step >= 1} />
			<Bar size={barSize} active={step >= 2} />
			<Circle size={17} active={step >= 2} />
			<Bar size={barSize} active={step >= 3} />
			<Circle size={17} active={step >= 3} />
		</div>
	);
};
