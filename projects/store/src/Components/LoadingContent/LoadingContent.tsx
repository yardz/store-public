import { LoadingPage } from '@App/Pages/Loading';
import React from 'react';

interface Props {
	loading: boolean;
	hidden?: boolean;
	children: JSX.Element | JSX.Element[];
}
export const LoadingContent: React.FC<Props> = ({ loading, hidden, children }) => {
	if (loading && !hidden) return <LoadingPage />;
	if (loading && hidden) return null;
	return <>{children}</>;
};
