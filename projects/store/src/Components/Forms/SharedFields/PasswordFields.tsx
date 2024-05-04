import React from 'react';
import { FormFields } from '@App/Components';

export interface Props {}
export const PasswordFields: React.FC<Props> = () => (
	<div className="container-fluid g-0 overflow-hidden">
		<div className="row">
			<div className="col-lg-12">
				<FormFields.Input.Text required type="password" placeholder="Senha" name="password" id="password" />
			</div>
			<div className="col-lg-12">
				<FormFields.Input.Text type="password" required placeholder="Repetir a Senha" name="confirmPassword" id="confirmPassword" />
			</div>
		</div>
	</div>
);
