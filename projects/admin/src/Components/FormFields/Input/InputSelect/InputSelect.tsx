import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

interface Options {
	value: string | number;
	label?: string;
}

interface Props {
	id?: string;
	label: string | JSX.Element;
	placeholder?: string;
	name: string;
	options: Options[];
	multiple?: boolean;
	tip?: string;
	disabled?: boolean;
	size?: 'large' | 'small';
	required?: boolean;
}

export const InputSelect: React.FC<Props> = ({ id, label, placeholder, name, options, multiple, tip, disabled, size, required }) => {
	const [field, meta] = useField(name);

	const danger = !!meta.touched && !!meta.error;
	const success = !!meta.touched && !meta.error;

	return (
		<div className="form-group row">
			<div className={`col`}>
				{!!label && (
					<label htmlFor={id}>
						{!!required && <span style={{ color: '#FF0000' }}>* </span>}
						{label}
					</label>
				)}
				<select
					className={classNames({
						'form-control': true,
						'form-control-lg': size === 'large',
						'form-control-sm': size === 'small',
						'is-invalid': danger,
						'is-valid': success,
					})}
					{...field}
					id={id}
					multiple={multiple}
					disabled={disabled}>
					{!!placeholder && <option value="">{placeholder}</option>}
					{options.map(option => (
						<option key={option.value} value={option.value}>
							{option.label || option.value}
						</option>
					))}
				</select>
			</div>
			{danger && <div className="invalid-feedback">{meta.error}</div>}
			{!!tip && (
				<small className="form-text text-muted" id={`${id}-small`}>
					{tip}
				</small>
			)}
		</div>
	);
};
