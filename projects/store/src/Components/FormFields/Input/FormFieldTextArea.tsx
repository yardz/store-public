import { InputTextarea } from '@App/Components/InputTextarea';
import { useField } from 'formik';
import React from 'react';
import { InputTextStatus } from '../../InputText';
import styles from './Input.module.scss';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	id?: string;
	name: string;
	tip?: string;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
}

export const FormFieldTextArea: React.FC<Props> = ({ id, name, tip, placeholder, disabled, required, ...props }) => {
	const [field, meta] = useField({ name });

	const danger = !!meta.touched && !!meta.error;
	const success = !!meta.touched && !meta.error;
	let status: InputTextStatus | undefined;
	if (success) {
		status = 'success';
	}
	if (danger) {
		status = 'error';
	}

	const inputProps: React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
		...props,
		...field,
		id: id || name,
		disabled,
	};

	const inputLabel: JSX.Element = required ? (
		<>
			{placeholder} <span style={{ color: '#FF0000' }}> *</span>
		</>
	) : (
		<>{placeholder}</>
	);

	return (
		<div className={styles.inputGroup}>
			<InputTextarea status={status} label={inputLabel} {...inputProps} />
			{danger && <div className="invalid-feedback display-block">{meta.error}</div>}
			{!!tip && (
				<small className="form-text text-muted" id={`${id}-small`}>
					{tip}
				</small>
			)}
		</div>
	);
};
