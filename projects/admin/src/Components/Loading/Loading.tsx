import React, { CSSProperties } from 'react';

interface Props {
	label?: string;
	fullpage?: boolean;
}

export const Loading: React.FC<Props> = ({ label, fullpage }) => {
	const style: CSSProperties = {
		position: !!fullpage ? 'absolute' : 'unset',
	};
	return (
		<>
			<div className="overlay" style={style}>
				<div className="m-loader mr-4">
					<svg className="m-circular" viewBox="25 25 50 50">
						<circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10" />
					</svg>
				</div>
				<h3 className="l-text">{label}</h3>
			</div>
		</>
	);
};
