import React from 'react';
import { UserAddress } from '@lab77store/domain';
import { Form, Formik } from 'formik';
import cloneDeep from 'lodash/cloneDeep';

import { FormFields } from '@App/Components/FormFields';
import { Button } from '@App/Components/Button';
import { states } from '@App/Utils/states';

import { validationSchemaAddressForm } from './AddressForm.validations';
import { CompleteAddress } from './CompleteAddress';
import { errorLogger } from '@App/Utils';

interface Props {
	initialValues: UserAddress;
	action: (address: UserAddress) => Promise<void>;
	actionLabel?: string;
}
export const AddressForm: React.FC<Props> = ({ initialValues, action, actionLabel = 'Salvar' }) => {
	const stateOptions = states.map(option => ({ value: option.sigla, label: option.name }));
	return (
		<Formik
			initialValues={cloneDeep(initialValues)}
			validationSchema={validationSchemaAddressForm}
			enableReinitialize
			validateOnMount
			validateOnChange
			onSubmit={async (address, actions) => {
				actions.setSubmitting(true);
				await action(address).catch(errorLogger);
				actions.setSubmitting(false);
			}}>
			{({ values, setFieldValue, isValid, isSubmitting }) => (
				<Form>
					<CompleteAddress zipCode={values.zipCode} setFieldValue={setFieldValue} />
					<div className="container-fluid g-0 overflow-hidden">
						<div className="row">
							<div className="col-lg-12">
								<FormFields.Input.Text type="text" required placeholder="Nome do destinatário" name="recipientName" />
							</div>
							<div className="col-lg-12">
								<FormFields.Input.Text type="text" mask="99999-999" required placeholder="Cep" name="zipCode" />
							</div>
							<div className="col-lg-12">
								<FormFields.Input.Text type="text" required placeholder="Rua" name="street" />
							</div>
							<div className="col-lg-12">
								<FormFields.Input.Text type="text" required placeholder="Número" name="number" />
							</div>
							<div className="col-lg-12">
								<FormFields.Input.Text type="text" placeholder="Complemento" name="complement" />
							</div>
							<div className="col-lg-12">
								<FormFields.Input.Text type="text" required placeholder="Bairro" name="neighborhood" />
							</div>
							<div className="col-lg-12">
								<FormFields.Input.Text type="text" required placeholder="Cidade" name="city" />
							</div>
							<div className="col-lg-12">
								<FormFields.Input.Select required placeholder="Estado" name="state" options={stateOptions} />
							</div>
							<div className="col-lg-12">
								<FormFields.Input.Text
									type="text"
									required
									placeholder="Nome do endereço"
									name="name"
									tip="Exemplos: Minha Casa, Meu Trabalho, Meus Pais"
								/>
							</div>
							<div className="col">
								<Button fullWidth disabled={isSubmitting || !isValid} color={isValid ? 'success' : 'primary'} type="submit">
									{actionLabel}
								</Button>
							</div>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};
