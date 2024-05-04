import React, { CSSProperties } from 'react';

import { Click } from 'Types';

interface Props {
	icon: JSX.Element;
	onClick: Click;
}

export const IconButton: React.FC<Props> = ({ icon, onClick }) => {
	const style: CSSProperties = {
		background: 'none',
		border: 'none',
		margin: 5,
	};
	return (
		<>
			<button type="button" onClick={onClick} style={style}>
				{icon}
			</button>
		</>
	);
};
