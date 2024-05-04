import React from 'react';

interface Props {}

export const GraySideBar: React.FC<Props> = ({ children }) => {
	return <div style={{ borderRight: '1px solid #ddd' }}>{children}</div>;
};
