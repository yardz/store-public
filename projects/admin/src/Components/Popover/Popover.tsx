import React from 'react';

interface Props {
	id: string;
	label: string;
	placement: 'left' | 'right' | 'top' | 'bottom';
	hover?: string;
	title?: string;
}

export const Popover: React.FC<Props> = ({ id, label, placement, title, hover }) => {
	return (
		<button
			id={id}
			className="btn btn-secondary"
			type="button"
			title="teste"
			data-container="body"
			data-toggle="popover"
			data-placement={placement}
			data-content={hover}
			data-original-title={title}>
			{label}
		</button>
	);
};
