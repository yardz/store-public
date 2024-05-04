import { authSelector } from '@App/Store/Reducers/AuthReducer';
import React from 'react';
import { useSelector } from 'react-redux';
import { LoadingContent } from '../LoadingContent';
import { RedirectWhenLogged } from '../RedirectWhenLogged';

interface Props {
	loading?: boolean;
	children: JSX.Element | JSX.Element[];
}
export const RestrictedContent: React.FC<Props> = ({ children, loading }) => {
	const auth = useSelector(authSelector.auth);
	return (
		<>
			<RedirectWhenLogged />
			<LoadingContent loading={auth !== 'authenticated' || !!loading}>
				<>{children}</>
			</LoadingContent>
		</>
	);
};
