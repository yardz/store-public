import React from 'react';
import { OptionItem } from '../OptionItem';

interface Options {
	value: string | number;
	label?: string;
	disabled?: boolean;
}

interface Props {
	name: string;
	label?: {
		size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
		name: string;
	};
	options: Options[];
}

export const RadioListHorizontal: React.FC<Props> = ({ label, options, name }) => {
	return (
		<div className="form-group row">
			{!!label && <label className={`col-sm-${label.size} col-form-label`}>{label.name}</label>}
			<div className={!!label ? `col-sm-${12 - label.size}` : `col-sm-12`}>
				{options.map(option => (
					<OptionItem type="radio" name={name} inline key={`${name}-${option.value}`} id={`${name}-${option.value}`} {...option} />
				))}
			</div>
		</div>
	);
};
