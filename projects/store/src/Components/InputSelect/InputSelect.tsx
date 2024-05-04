/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef } from 'react';
import classNames from 'classnames';
import { uniqueId } from 'lodash';

import styles from './InputSelect.module.scss';

export type SelectStatus = 'success' | 'warning' | 'error';

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
	label: string | number | JSX.Element;
	status?: SelectStatus;
}

export const InputSelect: React.FC<Props> = ({ status, label, children, ...props }) => {
	const inputProps = {
		...props,
		className: classNames(props?.className, styles.input, {
			[styles.hasContent]: !!props?.value,
			[styles.success]: status === 'success',
			[styles.warning]: status === 'warning',
			[styles.error]: status === 'error',
		}),
	};
	const id = useRef<string>(uniqueId());
	if (props.id) {
		id.current = props.id;
	}
	return (
		<div className={styles.Select}>
			<select {...inputProps} id={id.current}>
				{children}
			</select>
			<label className={styles.label} htmlFor={id.current}>
				{label}
			</label>
			<span className={styles.focusBorder} />
		</div>
	);
};
