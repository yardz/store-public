import React from 'react';

interface Props {
	id?: string;
	label: { on: string; off: string };
	name: string;
	width?: number;
}

export const FlippedButton: React.FC<Props> = ({ label, name, id, width }) => {
	const style: React.CSSProperties = { width: width || 60 };
	return (
		<div className="toggle-flip">
			<label>
				<input type="checkbox" name={name} id={id} />
				<span className="flip-indecator" data-toggle-on={label.on} data-toggle-off={label.off} style={style} />
			</label>
		</div>
	);
};
