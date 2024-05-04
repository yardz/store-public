import React from 'react';
import classNames from 'classnames';
import InputMask from 'react-input-mask';

import { useField } from 'formik';

interface Props {
	id?: string;
	type?: 'text' | 'number' | 'email' | 'password';
	name: string;
	label: string | JSX.Element;
	tip?: string;
	placeholder?: string;
	disabled?: boolean;
	size?: 'large' | 'small';
	mask?: string;
	required?: boolean;
}

export const InputText: React.FC<Props> = ({ id, type, name, label, tip, placeholder, disabled, size, mask, required }) => {
	const [field, meta] = useField(name);

	const danger = !!meta.touched && !!meta.error;
	const success = !!meta.touched && !meta.error;

	const inputProps = {
		...field,
		className: classNames({
			'form-control': true,
			'form-control-lg': size === 'large',
			'form-control-sm': size === 'small',
			'is-invalid': danger,
			'is-valid': success,
		}),
		id,
		type,
		placeholder: placeholder || '',
		disabled,
	};

	return (
		<div className="form-group">
			{!!label && <label htmlFor={id}>{label}</label>}
			{!!required && <span style={{ color: '#FF0000' }}> *</span>}
			{!!mask ? <InputMask {...inputProps} mask={mask} /> : <input {...inputProps} />}
			{danger && <div className="invalid-feedback">{meta.error}</div>}
			{!!tip && (
				<small className="form-text text-muted" id={`${id}-small`}>
					{tip}
				</small>
			)}
		</div>
	);
};
