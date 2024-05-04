import React from 'react';
import { registerUser } from '@App/Services/registerUser';
import { authUser } from '@App/Services/authUser';
import { PersonalData } from '@lab77store/domain';
import to from 'await-to-js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import cloneDeep from 'lodash/cloneDeep';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import dynamic from 'next/dynamic';
import { errorLogger } from '@App/Utils/logger';

const FromLinkDivider = dynamic(() => import('@App/Components').then(mod => mod.FromLinkDivider));
const RedirectWhenLogged = dynamic(() => import('@App/Components').then(mod => mod.RedirectWhenLogged));
const RegisterFrom = dynamic(() => import('@App/Components').then(mod => mod.Forms.RegisterFrom));
const LoginTemplate = dynamic(() => import('@App/Template/LoginTemplate').then(mod => mod.LoginTemplate));

dayjs.extend(utc);

interface Register {
	password: string;
	confirmPassword: string;
	personalData: PersonalData;
}
const initialValues: Register = {
	password: '',
	confirmPassword: '',
	personalData: {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		document: '',
		birthday: 0,
		sex: undefined,
		newsletter: false,
	},
};

export interface RegisterPageProps {}
export const RegisterPage: React.FC<RegisterPageProps> = () => {
	const router = useRouter();

	let queryString = router.asPath.split('?')[1] || '';
	if (queryString) {
		queryString = `?${queryString}`;
	}
	const save = async (signUp: Register) => {
		const userData = cloneDeep(signUp);
		const [error] = await to(registerUser(userData));
		if (error) {
			errorLogger(error, 'Ocorreu um erro ao tentar efetuar seu cadastro');
			return;
		}
		toast.success('Seu cadastro foi concluído com sucesso');
		await to(
			authUser({
				user: userData.personalData.email,
				password: userData.password,
			}),
		);
	};

	return (
		<>
			<Head>
				<meta name="description" content="Registrar-se" data-rh="true" />
			</Head>
			<RedirectWhenLogged />
			<LoginTemplate title="Ainda não sou cadastrado!" subtitle="Precisamos de mais algumas informações para criar sua conta:">
				<RegisterFrom action={save} initialValues={initialValues} />
				<div className="container-fluid g-0 overflow-hidden">
					<div className="row">
						<div className="col-12">
							<FromLinkDivider
								actions={[
									{ path: `/login${queryString}`, title: 'Login' },
									{ path: `/esqueci-minha-senha${queryString}`, title: 'Esqueceu sua senha?' },
								]}
							/>
						</div>
					</div>
				</div>
			</LoginTemplate>
		</>
	);
};
