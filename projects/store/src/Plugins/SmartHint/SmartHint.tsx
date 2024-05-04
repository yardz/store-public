import React from 'react';

interface Props {
	position: 1 | 2 | 3 | 4 | 5;
}
export const SmartHint: React.FC<Props> = ({ position }) => <div id={`smarthint-position-${position}`} />;
