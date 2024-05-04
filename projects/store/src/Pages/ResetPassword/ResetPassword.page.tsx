import React, { useEffect } from 'react';
import { Forms, FromLinkDivider } from '@App/Components';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import firebase from '@App/Configs/firebase';
import to from 'await-to-js';
import { useSelector } from 'react-redux';
import { authSelector } from '@App/Store/Reducers/AuthReducer';
import { useDevice } from '@App/Hooks';
import { MyAccountTemplate } from '@App/Template/MyAccountTemplate';
import { LoadingPage } from '../Loading';
import { LoginTemplate } from '@App/Template/LoginTemplate';
import { errorLogger } from '@App/Utils/logger';

interface Password {
	password: string;
	confirmPassword: string;
}
const initialValues: Password = { password: '', confirmPassword: '' };

const changePassword = async ({ auth, password, code }: { auth: string; password: string; code?: string }) => {
	if (auth === 'unauthenticated') {
		return firebase.auth().confirmPasswordReset(code || '', password);
	}
	const user = firebase.auth().currentUser;
	if (!user) {
		throw Error('User not authenticated');
	}
	return user.updatePassword(password);
};

export interface ResetPasswordPageProps {}
export const ResetPasswordPage: React.FC<ResetPasswordPageProps> = () => {
	const auth = useSelector(authSelector.auth);
	const device = useDevice();
	const router = useRouter();
	const code = router.query?.code?.toString() || '';

	useEffect(() => {
		if (device && auth === 'unauthenticated') {
			firebase
				.auth()
				.verifyPasswordResetCode(code)
				.catch(() => {
					toast.error('Código inválido');
					router.push('/esqueci-minha-senha').catch(errorLogger);
				});
		}
	}, [device, router, auth, code]);

	const save = async (resetPassword: Password) => {
		const [error] = await to(changePassword({ auth, code, password: resetPassword.password }));
		if (error) {
			toast.error('Ocorreu um erro ao tentar alterar sua senha.');
			return;
		}
		toast.success('Sua senha foi alterada com sucesso ;)');
		if (auth === 'unauthenticated') {
			if (router.query?.redirect && typeof router.query.redirect === 'string') {
				await router.push(router.query.redirect);
				return;
			}
			await router.push('/login');
		}
	};
	if (auth === 'pristine') {
		return <LoadingPage />;
	}
	if (auth === 'unauthenticated') {
		return (
			<LoginTemplate title="Resetar Senha!" subtitle="Precisamos de mais algumas informações para criar sua conta:">
				<Forms.ResetPasswordForm action={save} initialValues={initialValues} />
				<div className="container-fluid g-0 overflow-hidden">
					<div className="row">
						<div className="col-12">
							<FromLinkDivider
								actions={[
									{ path: `/login`, title: 'Login' },
									{ path: `/registrar`, title: 'Criar uma conta' },
								]}
							/>
						</div>
					</div>
				</div>
			</LoginTemplate>
		);
	}
	return (
		<MyAccountTemplate title="Alterar senha" subtitle="Insira a nova senha desejada para confirmar a alteração." linkBack="/minha-conta">
			<Forms.ResetPasswordForm action={save} initialValues={initialValues} />
		</MyAccountTemplate>
	);
};
