import React from 'react';
import { validationLoginForm } from './LoginForm.validations';
import { FormFields } from '@App/Components';
import { BaseForm } from '../BaseForm';

interface LoginAuth {
	user: string;
	password: string;
}

interface Props {
	initialValues: LoginAuth;
	action: (auth: LoginAuth) => Promise<void>;
}
export const LoginForm: React.FC<Props> = props => (
	<BaseForm {...props} validationSchema={validationLoginForm} actionLabel="entrar">
		<div className="container-fluid g-0 overflow-hidden">
			<div className="row">
				<div className="col-12">
					<FormFields.Input.Text type="text" required placeholder="Email ou CPF" name="user" id="user" />
				</div>
				<div className="col-12">
					<FormFields.Input.Text required type="password" placeholder="Senha" name="password" id="password" />
				</div>
			</div>
		</div>
	</BaseForm>
);
