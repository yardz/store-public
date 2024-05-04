import React from 'react';
import classNames from 'classnames';

import styles from './InputTextarea.module.scss';

export type InputTextareaStatus = 'success' | 'warning' | 'error';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string | number | JSX.Element;
	mask?: string;
	status?: InputTextareaStatus;
}

export const InputTextarea: React.FC<Props> = ({ status, label, ...props }) => {
	const inputProps = {
		...props,
		className: classNames(props?.className, styles.input, {
			[styles.hasContent]: !!props?.value,
			[styles.success]: status === 'success',
			[styles.warning]: status === 'warning',
			[styles.error]: status === 'error',
		}),
	};
	return (
		<div className={styles.Input}>
			<textarea {...inputProps} />
			<label htmlFor={props?.id}>{label}</label>
			<span className={styles.focusBorder} />
		</div>
	);
};
