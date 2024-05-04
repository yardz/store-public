import React from 'react';
import classNames from 'classnames';
import InputMask from 'react-input-mask';

import styles from './InputText.module.scss';

export type InputTextStatus = 'success' | 'warning' | 'error';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string | number | JSX.Element;
	mask?: string;
	status?: InputTextStatus;
}

export const InputText: React.FC<Props> = ({ status, label, mask, ...props }) => {
	const inputProps = {
		...props,
		className: classNames(props?.className, styles.input, {
			[styles.hasContent]: !!props?.value,
			[styles.dateField]: props?.type === 'date',
			[styles.success]: status === 'success',
			[styles.warning]: status === 'warning',
			[styles.error]: status === 'error',
		}),
	};
	return (
		<div className={styles.Input}>
			{!!mask ? <InputMask {...inputProps} mask={mask} /> : <input {...inputProps} />}
			<label htmlFor={props?.id}>{label}</label>
			<span className={styles.focusBorder} />
		</div>
	);
};
