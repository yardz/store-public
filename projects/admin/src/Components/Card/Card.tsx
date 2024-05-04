import React from 'react';

import { ThemeColors } from 'Types';
interface Props {
	type: ThemeColors;
	template: 'white' | 'black';
}

export const Card: React.FC<Props> = ({ type, template, children }) => {
	return (
		<div className={`card text-${template} bg-${type} w-100`}>
			<div className="card-body">
				<blockquote className="card-blockquote">{children}</blockquote>
			</div>
		</div>
	);
};
