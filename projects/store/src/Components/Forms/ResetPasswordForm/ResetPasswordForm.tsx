import React from 'react';
import { validationResetPasswordForm } from './ResetPasswordForm.validations';
import * as SharedFields from '../SharedFields';
import { BaseForm } from '../BaseForm';

interface Password {
	password: string;
	confirmPassword: string;
}

interface Props {
	initialValues: Password;
	action: (password: Password) => Promise<void>;
}
export const ResetPasswordForm: React.FC<Props> = props => (
	<BaseForm {...props} validationSchema={validationResetPasswordForm} actionLabel="Atualizar">
		<SharedFields.PasswordFields />
	</BaseForm>
);
