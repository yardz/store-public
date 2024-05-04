import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';
import { cloneDeep, includes } from 'lodash';

import { Typeahead } from 'react-bootstrap-typeahead';

interface Options {
	value: string | number;
	label: string;
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

export const InputSelectHorizontal: React.FC<Props> = ({
	id,
	label,
	placeholder,
	name,
	options,
	multiple,
	tip,
	disabled,
	size,
	required,
}) => {
	const [field, meta, helpers] = useField(name);
	const optionsOrdered = cloneDeep(options).sort((a, b) => a.label.localeCompare(b.label));
	const selected = optionsOrdered.filter(option => (multiple ? includes(field.value, option.value) : option.value === field.value));

	const danger = !!meta.touched && !!meta.error;
	const success = !!meta.touched && !meta.error;

	return (
		<div className="form-group row">
			<div className="col">
				{!!label && <label htmlFor={id}>{label}</label>}
				{!!required && <span style={{ color: '#FF0000' }}> *</span>}

				<Typeahead
					id={id || name}
					multiple={multiple}
					placeholder={placeholder}
					options={optionsOrdered}
					disabled={disabled}
					onChange={(valueSelected: Options[]) => {
						if (multiple) {
							helpers.setValue(valueSelected.map(select => select.value) || []);
						} else {
							helpers.setValue(valueSelected[0] ? valueSelected[0].value : '');
						}
					}}
					selected={selected}
					inputProps={{
						className: classNames({
							'form-control': true,
							'form-control-lg': size === 'large',
							'form-control-sm': size === 'small',
						}),
						name: field.name,
					}}
					onBlur={field.onBlur}
					clearButton
					isInvalid={danger}
					isValid={success}
				/>
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
