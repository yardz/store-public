import React from 'react';
import { useDevice } from '@App/Hooks';

interface Props {
	children: React.ReactNode;
}

export const ShowMobile: React.FC<Props> = ({ children }) => {
	const device = useDevice();
	if (device === 'desktop') return null;
	if (device === 'mobile') return <>{children}</>;
	return <div className="d-block d-lg-none">{children}</div>;
};
