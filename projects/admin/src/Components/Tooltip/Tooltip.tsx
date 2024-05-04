import React from 'react';

interface Props {
	placement: 'left' | 'right' | 'top' | 'bottom';
	label: string;
	text: string;
}

export const Tooltip: React.FC<Props> = ({ placement, label, text }) => {
	return (
		<div className="bs-component">
			<button className="btn btn-secondary" type="button" data-toggle="tooltip" data-placement={placement} data-original-title={text}>
				{label}
			</button>
		</div>
	);
};
