/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import React from 'react';

type StateColors = 'success' | 'danger' | 'warning' | 'info';
type Colors = 'primary' | 'secondary' | 'white';
type Themes = 'light' | 'dark';
type ThemeColors = StateColors | Colors | Themes;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color: ThemeColors;
	outline?: boolean;
	icon?: JSX.Element;
	type?: 'button' | 'submit' | 'reset';
	children: JSX.Element | number | string;
	className?: string;
	fullWidth?: boolean;
}

export const Button: React.FC<Props> = ({ outline, color, icon, type, className, children, fullWidth, ...props }) => {
	const outlineClass = !!outline ? 'outline-' : '';
	return (
		<button className={classNames('btn', `btn-${outlineClass}${color}`, className, { fullWidth })} type={type || 'button'} {...props}>
			{icon && <span> {icon} </span>}
			{children}
		</button>
	);
};
