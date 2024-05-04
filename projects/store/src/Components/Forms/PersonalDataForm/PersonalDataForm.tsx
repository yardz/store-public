import React from 'react';
import { PersonalData } from '@lab77store/domain';
import { validationPersonalDataForm } from './PersonalDataForm.validations';
import { BaseForm } from '../BaseForm';
import * as SharedFields from '../SharedFields';
import { FormFields } from '@App/Components';

interface Props {
	initialValues: PersonalData;
	action: (personalData: PersonalData) => Promise<void>;
}
export const PersonalDataForm: React.FC<Props> = ({ action, initialValues }) => (
	<BaseForm
		action={({ personalData }) => action(personalData)}
		initialValues={{ personalData: initialValues }}
		validationSchema={validationPersonalDataForm}
		actionLabel="Atualizar">
		<SharedFields.PersonalDataFields />
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
