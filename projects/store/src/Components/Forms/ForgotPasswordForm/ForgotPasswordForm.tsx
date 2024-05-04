import React from 'react';
import { validationForgotPasswordForm } from './ForgotPasswordForm.validations';
import { FormFields } from '@App/Components';
import { BaseForm } from '../BaseForm';

interface ForgotPassword {
	emailOrCpf: string;
}

interface Props {
	initialValues: ForgotPassword;
	action: (forgotPassword: ForgotPassword) => Promise<void>;
}
export const ForgotPasswordForm: React.FC<Props> = props => (
	<BaseForm {...props} actionLabel="Recuperar senha" validationSchema={validationForgotPasswordForm}>
		<div className="container-fluid g-0 overflow-hidden">
			<div className="row justify-content-center">
				<div className="col">
					<FormFields.Input.Text required placeholder="CPF ou E-mail" name="emailOrCpf" id="emailOrCpf" />
				</div>
			</div>
		</div>
	</BaseForm>
);
