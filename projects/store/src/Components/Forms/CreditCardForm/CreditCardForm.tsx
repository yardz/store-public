import React from 'react';
import { validationCreditCardForm } from './CreditCardForm.validations';
import { CreditCard } from '@App/Store/Reducers/CheckoutReducer';
import { FormFields } from '@App/Components';
import dayjs from 'dayjs';
import { Form, Formik } from 'formik';
import cloneDeep from 'lodash/cloneDeep';
import { AutoSubmit } from './AutoSubmit';
import { errorLogger } from '@App/Utils/logger';

interface Props {
	initialValues: CreditCard;
	action: (creditCard: CreditCard) => Promise<void>;
	maxInstallments: number;
}
export const CreditCardForm: React.FC<Props> = ({ initialValues, action, maxInstallments }) => (
	<Formik
		initialValues={cloneDeep(initialValues)}
		validationSchema={validationCreditCardForm}
		validateOnMount
		isInitialValid={false}
		onSubmit={async (data, actions) => {
			actions.setSubmitting(true);
			action(data)
				.finally(() => actions.setSubmitting(false))
				.catch(errorLogger);
		}}>
		{({ isSubmitting, isValid, values, submitForm }) => (
			<Form>
				<AutoSubmit isValid={isValid} isSubmitting={isSubmitting} values={values} submit={submitForm} />
				<div className="container-fluid g-0 overflow-hidden">
					<div className="row">
						<div className="col-lg-12">
							<FormFields.Input.Text required placeholder="Número do cartão" name="cardNumber" />
						</div>
						<div className="col-lg-12">
							<FormFields.Input.Text required placeholder="Nome do titular" name="holderName" />
						</div>

						<div className="col">
							<FormFields.Input.Select
								required
								placeholder="Mês"
								name="expirationMonth"
								options={Array.from(Array(12), (_, index) => ({
									value: index + 1,
								}))}
							/>
						</div>
						<div className="col">
							<FormFields.Input.Select
								required
								placeholder="Ano"
								name="expirationYear"
								options={Array.from(Array(10), (_, index) => ({
									value: Number(dayjs().format('YYYY')) + index,
								}))}
							/>
						</div>
						<div className="col-6 col-lg-4">
							<FormFields.Input.Text required placeholder="CVV" name="securityCode" />
						</div>
						<div className="col-12 col-lg">
							<FormFields.Input.Select
								required
								placeholder="Parcelas"
								name="installments"
								options={Array.from(Array(maxInstallments), (_, index) => ({
									value: index + 1,
								}))}
							/>
						</div>
					</div>
				</div>
			</Form>
		)}
	</Formik>
);
