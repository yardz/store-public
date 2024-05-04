import React from 'react';

interface Props {
	id: string;
	name: string;
	label?: string;
	labelSmall?: string;
}

export const InputFile: React.FC<Props> = ({ id, name, label, labelSmall }) => {
	return (
		<div className="form-group">
			{!!label && <label>{label}</label>}
			<input className="form-control-file" id={id} name={name} type="file" aria-describedby="fileHelp" />
			{!!labelSmall && (
				<small className="form-text text-muted" id="fileHelp">
					{labelSmall}
				</small>
			)}
		</div>
	);
};
