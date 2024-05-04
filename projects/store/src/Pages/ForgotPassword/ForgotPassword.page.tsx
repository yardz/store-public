import React, { useEffect } from 'react';
import { Forms, FromLinkDivider } from '@App/Components';
import { useDevice } from '@App/Hooks';
import { forgotPassword } from '@App/Services';
import { authSelector } from '@App/Store/Reducers/AuthReducer';
import { LoginTemplate } from '@App/Template/LoginTemplate';
import to from 'await-to-js';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { errorLogger } from '@App/Utils/logger';

const initialValues: { emailOrCpf: string } = {
	emailOrCpf: '',
};

export interface ForgotPasswordProps {}
export const ForgotPasswordPage: React.FC<ForgotPasswordProps> = () => {
	const auth = useSelector(authSelector.auth);
	const router = useRouter();
	const device = useDevice();

	useEffect(() => {
		if (device && auth === 'authenticated') {
			router.push('/minha-conta').catch(errorLogger);
		}
	}, [device, router, auth]);

	let queryString = router.asPath.split('?')[1] || '';
	if (queryString) {
		queryString = `?${queryString}`;
	}
	const save = async (dataForgotPassword: { emailOrCpf: string }) => {
		const [error, email] = await to(forgotPassword(dataForgotPassword));

		if (error || !email) {
			toast.error('Ocorreu um erro ao tentar resetar sua senha');
			return;
		}
		toast.success(`Um link para redefinição de senha foi enviado para o email ${email}`);
	};
	return (
		<LoginTemplate title="Recuperar senha" subtitle="Digite seu e-mail ou CPF que enviaremos um link para você cadastrar uma nova senha:">
			<Forms.ForgotPasswordForm initialValues={initialValues} action={save} />
			<div className="container-fluid g-0 overflow-hidden">
				<div className="row justify-content-center">
					<div className="col">
						<FromLinkDivider
							actions={[
								{ path: `/login${queryString}`, title: 'Login' },
								{ path: `/registrar${queryString}`, title: 'Criar uma conta' },
							]}
						/>
					</div>
				</div>
			</div>
		</LoginTemplate>
	);
};
