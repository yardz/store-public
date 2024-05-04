import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDevice } from '@App/Hooks';
import { authSelector } from '@App/Store/Reducers/AuthReducer';
import { useSelector } from 'react-redux';
import { errorLogger } from '@App/Utils/logger';
import { redirectAfterLogin } from '@App/Utils/redirectAfterLogin';

const authRutes = ['/login', '/registrar'];

interface Props {
	redirect?: string;
}
export const RedirectWhenLogged: React.FC<Props> = ({ redirect }) => {
	const router = useRouter();
	const device = useDevice();
	const auth = useSelector(authSelector.auth);

	useEffect(() => {
		if (device) {
			if (auth === 'unauthenticated' && !authRutes.includes(router.pathname)) {
				router.push({ pathname: '/login', query: { redirect: redirect || router.asPath } }).catch(errorLogger);
			}
			if (auth === 'authenticated' && authRutes.includes(router.pathname)) {
				redirectAfterLogin({ router }).catch(errorLogger);
			}
		}
	}, [router, device, auth, redirect]);

	return null;
};
