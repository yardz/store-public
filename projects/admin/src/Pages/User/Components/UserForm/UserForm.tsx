import React from 'react';

import { UserAdmin } from '@lab77store/domain';

import { validationSchema } from './validations';

import { Form, Formik } from 'formik';

import { FormFields, Button } from 'Components';

import { useHistory } from 'react-router-dom';
import { BodyMeasurement } from './Components';

import { cloneDeep } from 'lodash';
import { ResetPasswordForm } from './Components/ResetPasswordForm';
import { useState } from 'Hooks';
// import { DatabaseServices } from 'Services';
// import { Notifications } from 'Utils';
// import { Stock, RawMaterialProduction } from './piece';
// import { User } from '@lab77store/database';

interface Props {
	initialValues: UserAdmin;
	id?: string;
}

export const UserForm: React.FC<Props> = ({ initialValues, id }) => {
	const history = useHistory();
	const [form, setForm] = useState({ open: false, selected: '' });

	return (
		<>
			<div className="tile">
				<div className="row">
					<div className="col">
						<h3 className="tile-title ">Cadastro de usuário</h3>
					</div>
					<div className="text-right mr-4">
						<Button
							color="primary"
							label="Resetar Senha"
							type="button"
							outline
							onClick={() => {
								setForm({ open: true, selected: '' });
							}}
						/>
						<ResetPasswordForm
							user={initialValues}
							showModal={form.open}
							closeModal={() => {
								setForm({ open: false, selected: '' });
							}}
						/>
					</div>
				</div>
			</div>
			<Formik
				initialValues={cloneDeep(initialValues)}
				validationSchema={validationSchema}
				onSubmit={() => {
					// if (id) {
					// 	const save = DatabaseServices.Customer.create(customer, id);
					// 	if (!!save) {
					// 		save
					// 			.then(() => {
					// 				actions.resetForm();
					// 				Notifications.success('Cliente salvo com sucesso');
					// 				history.push(`/customer`);
					// 			})
					// 			.catch(() => {
					// 				Notifications.error('Ocorreu um erro ao tentar editar esse cliente');
					// 			});
					// 	} else {
					// 		Notifications.error('Ocorreu um erro ao tentar editar esse cliente');
					// 	}
					// }
				}}>
				{({ values, setFieldValue }) => (
					<Form>
						<div className="tile">
							<div className="row">
								<div className="col">
									<h3 className="tile-title">Dados Pessoais</h3>
								</div>
							</div>
							<></>
							<div className="row">
								<div className="col-lg-6">
									<FormFields.Input.TextHorizontal
										label="Nome"
										placeholder="Nome"
										name="personalData.firstName"
										id="personalData.firstName"
									/>
								</div>
								<div className="col-lg-6">
									<FormFields.Input.TextHorizontal
										label="Sobrenome"
										placeholder="Sobrenome"
										name="personalData.lastName"
										id="personalData.lastName"
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-6">
									<FormFields.Input.TextHorizontal
										label="E-mail"
										placeholder="email@dominio.com.br"
										name="personalData.email"
										id="personalData.email"
									/>
								</div>
								<div className="col-lg-3">
									<FormFields.Input.TextHorizontal
										label="Telefone"
										placeholder="(99) 9999-9999 "
										name="personalData.landline"
										id="personalData.landline"
										mask="(99) 9999-9999"
									/>
								</div>
								<div className="col-lg-3">
									<FormFields.Input.TextHorizontal
										label="Celular"
										placeholder="(99) 99999-9999 "
										name="personalData.phone"
										id="personalData.phone"
										mask="(99) 99999-9999"
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-3">
									<FormFields.Input.TextHorizontal
										label="CPF"
										placeholder="999.999.999-99"
										name="personalData.document"
										id="personalData.document"
										mask="999.999.999-99"
									/>
								</div>
								<div className="col-lg-3">
									<FormFields.Input.SelectHorizontal
										label="Sexo"
										id="personalData.sex"
										name="personalData.sex"
										placeholder="Selecione o sexo"
										options={[
											{ label: 'Masculino', value: 'male' },
											{ label: 'Feminino', value: 'female' },
										]}
									/>
								</div>
								<div className="col-lg-3">
									<FormFields.Input.TextHorizontal
										type="date"
										label="Aniversário"
										placeholder="dd/mm/aaaa"
										name="personalData.birthday"
										id="personalData.birthday"
									/>
								</div>
								<div className="col-lg-3">
									<FormFields.Input.SelectHorizontal
										label="Tag"
										id="personalData.tag"
										name="personalData.tag"
										options={[{ label: 'Selecione uma tag', value: '' }]}
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<FormFields.TextArea
										id="note"
										name="note"
										label="Observação (uso exclusivo para o pós venda)"
										rows={5}
										placeholder="Insidera uma observação sobre o o cliente"
									/>
								</div>
							</div>
						</div>
						<BodyMeasurement />
						{/* <Address setField={setFieldValue} values={values.adresses} /> */}
						{/* <Password /> */}
						<div className="tile">
							<div className="form-group row">
								<div className="col">
									<div className="text-right">
										<Button
											color="primary"
											label="Cancelar"
											type="button"
											outline
											onClick={() => {
												history.push('/rawMaterial');
											}}
										/>
										&nbsp;&nbsp;&nbsp;
										<Button color="primary" label={id ? 'Editar' : 'Cadastrar'} type="submit" />
									</div>
								</div>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
	// tslint:disable-next-line: max-file-line-count
};
