import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useField } from 'formik';
import React, { useEffect, useRef } from 'react';
import { InputText, InputTextStatus } from '../../InputText';
import styles from './Input.module.scss';

dayjs.extend(utc);

interface Props {
	id?: string;
	type?: 'text' | 'number' | 'email' | 'password' | 'date';
	name: string;
	tip?: string;
	placeholder?: string;
	disabled?: boolean;
	mask?: string;
	required?: boolean;
}

export const FormFieldText: React.FC<Props> = ({ id, type, name, tip, placeholder, disabled, mask, required }) => {
	const [field, meta, helpers] = useField({ name });
	const value = useRef(field.value);
	useEffect(() => {
		if (type === 'date' && value.current !== field.value && !meta.touched) {
			helpers.setTouched(true, true);
			value.current = field.value;
		}
	}, [field.value, helpers, meta.touched, type]);

	const danger = !!meta.touched && !!meta.error;
	const success = !!meta.touched && !meta.error;
	let status: InputTextStatus | undefined;
	if (success) {
		status = 'success';
	}
	if (danger) {
		status = 'error';
	}

	const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
		...field,
		id: id || name,
		type,
		disabled,
	};

	if (type === 'date') {
		inputProps.value = undefined;
		inputProps.onChange = undefined;
		inputProps.defaultValue = field.value ? dayjs.utc(field.value).format('YYYY-MM-DD') : '';
		inputProps.onBlur = e => {
			e.preventDefault();
			if (typeof window === 'undefined') return;
			const date = dayjs.utc(e.target.value).unix() * 1000;
			helpers.setValue(date, true);
		};
	}

	const inputLabel: JSX.Element = required ? (
		<>
			{placeholder} <span style={{ color: '#FF0000' }}> *</span>
		</>
	) : (
		<>{placeholder}</>
	);

	return (
		<div className={styles.inputGroup}>
			<InputText status={status} label={inputLabel} mask={mask} {...inputProps} />

			{danger && <div className="invalid-feedback display-block">{meta.error}</div>}
			{!!tip && (
				<small className="form-text text-muted" id={`${id}-small`}>
					{tip}
				</small>
			)}
		</div>
	);
};
