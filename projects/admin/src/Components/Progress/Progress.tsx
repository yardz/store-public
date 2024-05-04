import React from 'react';

import { ThemeColors } from 'Types';
interface Props {
	type: ThemeColors;
	min: number;
	max: number;
	current: number;
	stripped?: boolean;
	animated?: boolean;
}

export const Progress: React.FC<Props> = ({ type, min, max, stripped, animated, current }) => {
	return (
		<div className="progress w-100">
			<div
				className={`progress-bar ${!!stripped ? 'progress-bar-striped' : ''} bg-${type} ${!!animated ? 'progress-bar-animated' : ''}`}
				role="progressbar"
				style={{ width: `${current}%` }}
				aria-valuenow={current}
				aria-valuemin={min}
				aria-valuemax={max}
			/>
		</div>
	);
};
