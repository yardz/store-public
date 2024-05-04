import React from 'react';

import { ThemeColors, Click } from 'Types';
interface Props {
	type: ThemeColors;
	title?: string;
	message: string | JSX.Element;
	onClose: Click;
}

export const Alert: React.FC<Props> = ({ type, title, message, onClose }) => {
	return (
		<div className={`alert alert-dismissible alert-${type}`}>
			<button className="close" type="button" data-dismiss="alert" onClick={onClose}>
				×
			</button>
			{!!title && <h4>{title}</h4>}
			{message}
		</div>
	);
};
