import React from 'react';
import classNames from 'classnames';
import { useField } from 'formik';

interface Props {
	id?: string;
	name: string;
	label?: string;
	disabled?: boolean;
	inline?: boolean;
	type: 'checkbox' | 'radio';
	value?: string | number;
}

export const OptionItem: React.FC<Props> = ({ id, name, label, disabled, type, inline, value }) => {
	const [field] = useField({ name, type, value });
	return (
		<div
			className={classNames({
				'form-check': true,
				'form-check-inline': inline,
			})}>
			<input className="form-check-input" {...field} id={id} type={type} disabled={disabled} />
			<label className="form-check-label" htmlFor={id}>
				{label}
			</label>
		</div>
	);
};
