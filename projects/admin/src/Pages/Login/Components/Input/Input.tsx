import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import { useField } from 'formik';

export interface Item {
	value: string;
	url: string;
	label?: string;
}
interface Props {
	id: string;
	name: string;
	placeholder?: string;
	label?: string;
	type?: 'text' | 'password' | 'email';
}

export const Input: FunctionComponent<Props> = ({ name, id, label, type = 'text', placeholder }) => {
	const [field, meta] = useField(name);

	const danger = !!meta.touched && !!meta.error;
	const success = !!meta.touched && !meta.error;

	return (
		<div
			className={classNames({
				'form-group': true,
				'has-danger': danger,
				'has-success': success,
			})}>
			{label && (
				<label id={id} className={classNames({ 'control-label': true })}>
					{label}
				</label>
			)}
			<input
				{...field}
				id={id}
				className={classNames({
					'form-control': true,
					'is-invalid': danger,
					'is-valid': success,
				})}
				type={type}
				placeholder={placeholder}
			/>
			{danger && <div className="invalid-feedback">{meta.error}</div>}
		</div>
	);
};
