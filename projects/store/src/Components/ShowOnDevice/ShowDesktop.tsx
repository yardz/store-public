import React from 'react';
import { useDevice } from '@App/Hooks';

interface Props {
	children: React.ReactNode;
}

export const ShowDesktop: React.FC<Props> = ({ children }) => {
	const device = useDevice();
	if (device === 'mobile') return null;
	if (device === 'desktop') return <>{children}</>;
	return <div className="d-none d-lg-block">{children}</div>;
};
