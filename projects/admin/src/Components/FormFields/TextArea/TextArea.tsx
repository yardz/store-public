import React from 'react';
import { OnChange } from 'Types';
import { useField } from 'formik';
import classNames from 'classnames';

interface Props {
	id: string;
	name: string;
	label?: string;
	rows: number;
	onChange?: OnChange;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
}

export const TextArea: React.FC<Props> = ({ id, name, label, rows, placeholder, onChange, required, disabled }) => {
	const [field, meta] = useField({ id, name, rows, placeholder, onChange });

	const danger = !!meta.touched && !!meta.error;
	const success = !!meta.touched && !meta.error;

	return (
		<div className="form-group">
			{!!label && <label>{label}</label>}
			{!!required && <span style={{ color: '#FF0000' }}> *</span>}
			<textarea
				className={classNames({
					'form-control': true,
					'is-invalid': danger,
					'is-valid': success,
				})}
				{...field}
				rows={rows}
				placeholder={placeholder ? placeholder : ''}
				disabled={disabled ? disabled : false}
			/>
			{danger && <div className="invalid-feedback">{meta.error}</div>}
		</div>
	);
};
