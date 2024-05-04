import React from 'react';
import { PersonalData } from '@lab77store/domain';
import { BaseForm } from '../BaseForm';
import * as SharedFields from '../SharedFields';
import { validationRegisterForm } from './RegisterFrom.validations';
import { FormFields } from '@App/Components';

interface Register {
	password: string;
	confirmPassword: string;
	personalData: PersonalData;
}

interface Props {
	initialValues: Register;
	action: (register: Register) => Promise<void>;
}
export const RegisterFrom: React.FC<Props> = props => (
	<BaseForm {...props} validationSchema={validationRegisterForm} actionLabel="Cadastrar">
		<SharedFields.PersonalDataFields />
		<SharedFields.PasswordFields />
		<div className="container-fluid g-0 overflow-hidden">
			<div className="row">
				<div className="col-lg-12">
					<FormFields.Input.Toggle
						label="Notifique-me sobre promoções, produtos e eventos"
						name="personalData.newsletter"
						id="newsletter"
					/>
				</div>
			</div>
		</div>
	</BaseForm>
);
