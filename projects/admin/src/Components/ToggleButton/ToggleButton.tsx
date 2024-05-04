import classNames from 'classnames';
import React from 'react';

interface Props {
	id?: string;
	large?: boolean;
	name: string;
	checked?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>, isChecked: boolean) => void;
}

export const ToggleButton: React.FC<Props> = ({ id, large, name, checked, onChange }) => {
	const isChecked = checked ? true : false;

	return (
		<div className={classNames('toggle', { lg: !!large })}>
			<label>
				<input
					type="checkbox"
					name={name}
					id={id}
					checked={isChecked}
					onChange={e => {
						if (!!onChange) {
							onChange(e, !isChecked);
						}
					}}
				/>
				<span className={`button-indecator`} />
			</label>
		</div>
	);
};
