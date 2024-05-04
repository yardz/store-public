import React from 'react';

import { ThemeColors, Click } from 'Types';

interface OptionsList {
	label: string;
	onClick: Click;
}
interface Props {
	type: ThemeColors;
	label: string;
	list: OptionsList[];
	onClick: Click;
}

export const ButtonGroup: React.FC<Props> = ({ type, label, list, onClick }) => {
	return (
		<div className="btn-group" role="group" aria-label="Button group with nested dropdown">
			<button className={`btn btn-${type}`} type="button" onClick={onClick}>
				{label}
			</button>
			<div className="btn-group" role="group">
				<button
					className={`btn btn-${type} dropdown-toggle`}
					type="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				/>
				<div className="dropdown-menu dropdown-menu-right">
					{list.map(option => (
						<span key={option.label} className="dropdown-item link" onClick={option.onClick}>
							{option.label}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};
