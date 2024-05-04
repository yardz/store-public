import React from 'react';

import { validationSchema } from './validations';
import { cloneDeep } from 'lodash';

import { Form, Formik } from 'formik';

import { FormFields } from 'Components';
interface Props {
	id?: string;
	// tslint:disable-next-line: no-any
	values?: any;
	// tslint:disable-next-line: no-any
	setValues: (field: string, value: any) => void;
}

export const Receiver: React.FC<Props> = ({ id, values, setValues }) => {
	return (
		<Formik
			initialValues={cloneDeep({})}
			validationSchema={validationSchema}
			onSubmit={(receiver, actions) => {
				//
			}}>
			{({ setFieldValue }) => (
				<Form>
					<div className="tile">
						<div className="row">
							<div className="col">
								<h3 className="tile-title">Receptor</h3>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5">
								<FormFields.Input.TextHorizontal
									label="Nome"
									placeholder="Nome"
									name="personalData.firstName"
									id="personalData.firstName"
								/>
							</div>
							<div className="col-lg-5">
								<FormFields.Input.TextHorizontal
									label="Sobrenome"
									placeholder="Sobrenome"
									name="personalData.lastName"
									id="personalData.lastName"
								/>
							</div>
							<div className="col-lg-2">
								<FormFields.Input.TextHorizontal label="CEP" placeholder="Ex 132456-332" name="personalData.cep" id="personalData.cep" />
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<FormFields.Input.TextHorizontal
									label="Endereço"
									placeholder="Rua Fortunato"
									name="personalData.address"
									id="personalData.address"
								/>
							</div>
							<div className="col-lg-2">
								<FormFields.Input.TextHorizontal label="Número" placeholder="30" name="personalData.number" id="personalData.number" />
							</div>
							<div className="col-lg-4">
								<FormFields.Input.TextHorizontal
									label="Complemento"
									placeholder="Apartamento 42"
									name="personalData.cep"
									id="personalData.cep"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4">
								<FormFields.Input.TextHorizontal
									label="Bairro"
									placeholder="Vila Buarque"
									name="personalData.address"
									id="personalData.address"
								/>
							</div>
							<div className="col-lg-4">
								<FormFields.Input.TextHorizontal
									label="Cidade"
									placeholder="São Paulo"
									name="personalData.number"
									id="personalData.number"
								/>
							</div>
							<div className="col-lg-4">
								<FormFields.Input.SelectHorizontal
									label="Estado"
									id="personalData.state"
									name="personalData.state"
									options={[{ label: 'Selecione uma estado', value: '' }]}
								/>
							</div>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};
