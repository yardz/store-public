import React from 'react';

import { ThemeColors } from 'Types';
interface Props {
	type: ThemeColors;
	label: string;
}

export const Badge: React.FC<Props> = ({ type, label }) => {
	return <span className={`badge badge-${type}`}>{label}</span>;
};
