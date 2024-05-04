import React from 'react';
import { useField } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';

import styles from './FormFieldToggle.module.scss';

interface Props {
	id?: string;
	label: string | JSX.Element;
	name: string;
	disabled?: boolean;
	required?: boolean;
}

export const FormFieldToggle: React.FC<Props> = ({ id, name, disabled, label, required }) => {
	const [field, meta] = useField({ name, type: 'checkbox' });

	const danger = !!meta.touched && !!meta.error;

	const inputProps = {
		...field,
		id,
		type: 'checkbox',
		disabled,
	};

	return (
		<div className={styles.inputGroup}>
			<div className={styles.select}>
				<FontAwesomeIcon className={styles.square} icon={inputProps.value ? faCheckSquare : faSquare} />
				{!!label && (
					<label htmlFor={id}>
						{label} {!!required && <span style={{ color: '#FF0000' }}> *</span>}
					</label>
				)}
				<input {...inputProps} className={styles.input} id={id} />
			</div>
			{danger && <div className="invalid-feedback">{meta.error}</div>}
		</div>
	);
};
