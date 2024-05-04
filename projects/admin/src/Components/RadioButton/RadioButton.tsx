import React from 'react';
import { OnChange } from 'Types';

interface Props {
	id?: string;
	name: string;
	label: string;
	value?: string | number;
	onChange?: OnChange;
	checked?: boolean;
}

export const RadioButton: React.FC<Props> = ({ id, name, label, value, onChange, checked }) => {
	return (
		<div>
			<input className="form-check-input" type="radio" name={name} id={id} value={value} onChange={onChange} checked={checked} />
			<label className="form-check-label" htmlFor={id}>
				{label}
			</label>
		</div>
	);
};
