import React from 'react';

import { ThemeColors, Click } from 'Types';

interface Props {
	label: string;
	onClick?: Click;
	outline?: boolean;
	disabled?: boolean;
	icon?: JSX.Element;
	type?: 'button' | 'submit' | 'reset';
	color: ThemeColors;
	className?: string;
}

export const Button: React.FC<Props> = ({ outline, disabled, color, onClick, label, icon, type, className }) => {
	const outlineClass = !!outline ? 'outline-' : '';
	const classes = `btn btn-${outlineClass}${color} ${className}`;
	return (
		<button className={classes} type={type || 'button'} disabled={disabled} onClick={onClick}>
			{!!icon && <span> {icon} </span>}
			{label.toUpperCase()}
		</button>
	);
};
