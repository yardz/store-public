import { Forms, FromLinkDivider, LoadingContent, RedirectWhenLogged } from '@App/Components';
import { authUser } from '@App/Services/authUser';
import { authSelector } from '@App/Store/Reducers/AuthReducer';
import { LoginTemplate } from '@App/Template/LoginTemplate';
import { errorLogger } from '@App/Utils/logger';
import { redirectAfterLogin } from '@App/Utils/redirectAfterLogin';
import to from 'await-to-js';
import cloneDeep from 'lodash/cloneDeep';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export interface LoginPageProps {}
export const LoginPage: React.FC<LoginPageProps> = () => {
	const router = useRouter();
	const authStatus = useSelector(authSelector.auth);

	let queryString = router.asPath.split('?')[1] || '';
	if (queryString) {
		queryString = `?${queryString}`;
	}

	const login = async (auth: { user: string; password: string }) => {
		const [err] = await to(authUser(auth));
		if (err) {
			toast.error('Login e senha incorretos');
			return;
		}
		await redirectAfterLogin({ router }).catch(errorLogger);
	};

	return (
		<>
			<Head>
				<meta name="description" content="Login" data-rh="true" />
			</Head>
			<RedirectWhenLogged />
			<LoadingContent loading={authStatus !== 'unauthenticated'}>
				<LoginTemplate title="Login">
					<Forms.LoginForm initialValues={cloneDeep({ user: '', password: '' })} action={login} />

					<div className="container-fluid g-0 overflow-hidden">
						<div className="row">
							<div className="col-12">
								<FromLinkDivider
									actions={[
										{ path: `/registrar${queryString}`, title: 'Criar uma conta' },
										{ path: `/esqueci-minha-senha${queryString}`, title: 'Esqueceu sua senha?' },
									]}
								/>
							</div>
						</div>
					</div>
				</LoginTemplate>
			</LoadingContent>
		</>
	);
};
