import React from 'react';
import classNames from 'classnames';

import { useField } from 'formik';

interface Props {
	id?: string;
	label: string | JSX.Element;
	name: string;
	large?: boolean;
	disabled?: boolean;
	required?: boolean;
}

export const InputToggle: React.FC<Props> = ({ id, name, large, disabled, label, required }) => {
	const [field, meta] = useField({ name, type: 'checkbox' });

	const danger = !!meta.touched && !!meta.error;
	const success = !!meta.touched && !meta.error;

	const inputProps = {
		...field,
		className: classNames({
			'form-control': true,
			'is-invalid': danger,
			'is-valid': success,
		}),
		id,
		type: 'checkbox',
		disabled,
	};

	return (
		<div className="form-group">
			{!!label && <label htmlFor={id}>{label}</label>}
			{!!required && <span style={{ color: '#FF0000' }}> *</span>}
			<div className={`toggle ${!!large && 'lg'}`}>
				<label>
					<input {...inputProps} id={id} />
					<span className={`button-indecator`} />
				</label>
			</div>
			{danger && <div className="invalid-feedback">{meta.error}</div>}
		</div>
	);
};
