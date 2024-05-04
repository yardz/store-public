import React from 'react';
import classNames from 'classnames';
import InputMask from 'react-input-mask';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useField } from 'formik';

dayjs.extend(utc);

interface Props {
	id?: string;
	type?: 'text' | 'number' | 'email' | 'password' | 'date';
	name: string;
	label?: string;
	tip?: string;
	placeholder?: string;
	disabled?: boolean;
	size?: 'large' | 'small';
	mask?: string;
	required?: boolean;
}

export const InputTextHorizontal: React.FC<Props> = ({ id, type, name, label, tip, placeholder, disabled, size, mask, required }) => {
	const [field, meta, helpers] = useField({ name });

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
		id: id || name,
		type,
		placeholder: placeholder || label || '',
		disabled,
	};
	if (type === 'date') {
		inputProps.value = field.value ? dayjs.utc(field.value).format('YYYY-MM-DD') : '';
		// tslint:disable-next-line: no-any
		inputProps.onChange = (e: React.ChangeEvent<any>) => {
			e.preventDefault();
			const date = dayjs.utc(e.target.value).unix() * 1000;
			helpers.setValue(date);
		};
	}

	return (
		<div className="form-group row">
			<div className="col">
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
		</div>
	);
};
