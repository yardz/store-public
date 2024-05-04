import React from 'react';
import { OptionItem } from '../OptionItem';

interface Options {
	name: string;
	label?: string;
	disabled?: boolean;
}

interface Props {
	label?: {
		size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
		name: string;
	};
	options: Options[];
	tip?: string;
}

export const CheckboxListHorizontal: React.FC<Props> = ({ label, options, tip }) => {
	return (
		<div className="form-group row">
			{!!label && <label className={`col-sm-${label.size} col-form-label`}>{label.name}</label>}
			<div className={!!label ? `col-sm-${12 - label.size}` : `col-sm-12`}>
				{options.map(option => (
					<OptionItem type="checkbox" inline key={option.name} id={option.name} {...option} />
				))}
			</div>
		</div>
	);
};
