import React from 'react';
import { useField } from 'formik';
import { InputSelect, SelectStatus } from '../../InputSelect';

import styles from './Input.module.scss';

interface Options {
	value: string | number;
	label?: string;
}

interface Props {
	id?: string;
	placeholder?: string;
	name: string;
	options: Options[];
	multiple?: boolean;
	tip?: string;
	disabled?: boolean;
	size?: 'large' | 'small';
	required?: boolean;
}

export const FormFieldSelect: React.FC<Props> = ({ id, placeholder, name, options, multiple, tip, disabled, required }) => {
	const [field, meta] = useField(name);

	const danger = !!meta.touched && !!meta.error;
	const success = !!meta.touched && !meta.error;
	let status: SelectStatus | undefined;
	if (success) {
		status = 'success';
	}
	if (danger) {
		status = 'error';
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
			<InputSelect {...field} label={inputLabel} status={status} id={id} multiple={multiple} disabled={disabled}>
				{!field.value && <option value="">&nbsp;</option>}
				{options.map(option => (
					<option key={option.value} value={option.value}>
						{option.label || option.value}
					</option>
				))}
			</InputSelect>

			{danger && <div className="invalid-feedback">{meta.error}</div>}
			{!!tip && (
				<small className="form-text text-muted" id={`${id}-small`}>
					{tip}
				</small>
			)}
		</div>
	);
};
