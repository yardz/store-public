import React from 'react';

export const Buyer: React.FC = () => {
	return null;
};

// import { validationSchema } from './validations';

// import { Form, Formik } from 'formik';
// import { RadioButton, Input } from 'Components';
// import { Address } from '../Address';
// import { cloneDeep } from 'lodash';

// interface Props {
// 	id?: string;
// 	values?: any;
// 	setValues: (field: string, value: any) => void;
// }

// export const Buyer: React.FC<Props> = ({ id }) => {
// 	return (
// 		<Formik
// 			enableReinitialize
// 			initialValues={cloneDeep({})}
// 			validationSchema={validationSchema}
// 			onSubmit={(tag, action) => {
// 				//regra para persistir dados aqui
// 			}}>
// 			{({ values, setFieldValue }) => (
// 				<Form>
// 					<div className="tile">
// 						<div className="row">
// 							<div className="col-lg-6">
// 								<h3 className="tile-title">Comprador</h3>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-lg-6">
// 								<div className="form-check form-check-inline col-sm-3">
// 									<RadioButton name="gridRadios" id="gridRadios1" value="new" label="Novo cadastro" />
// 								</div>
// 								<div className="form-check form-check-inline col-sm-3">
// 									<RadioButton name="gridRadios" id="gridRadios2" value="choose" label="Cadastrado" />
// 								</div>
// 							</div>
// 							<div className="col-lg-3">
// 								<Input.TextHorizontal
// 									label="Pesquise por:"
// 									placeholder="Número pedido"
// 									name="reference_order"
// 									id="reference_order"
// 									disabled
// 								/>
// 							</div>
// 							<div className="col-lg-3">
// 								<Input.TextHorizontal label="CPF" placeholder="CPF" name="cpf" id="cpf" mask="999.999.999-99" disabled />
// 							</div>
// 						</div>
// 						<hr />
// 						<div className="row">
// 							<div className="col-lg-5">
// 								<Input.TextHorizontal label="Nome" placeholder="Nome" name="reference_order" id="reference_order" />
// 							</div>
// 							<div className="col-lg-5">
// 								<Input.TextHorizontal label="Sobrenome" placeholder="Sobrenome" name="reference_order" id="reference_order" />
// 							</div>
// 							<div className="col-lg-2">
// 								<Input.TextHorizontal
// 									type="date"
// 									label="Data de nascimento"
// 									placeholder="Data de nascimento"
// 									name="reference_order"
// 									id="reference_order"
// 								/>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-lg-8">
// 								<Input.TextHorizontal label="E-mail" placeholder="E-mail" name="email" id="" />
// 							</div>
// 							<div className="col-lg-2">
// 								<Input.TextHorizontal label="Celular" placeholder="Celular" name="phone" id="" mask="(99) 9 9999-9999" />
// 							</div>
// 							<div className="col-lg-2">
// 								<Input.TextHorizontal label="CPF" placeholder="CPF" name="cpf" id="cpf" mask="999.999.999-99" />
// 							</div>
// 						</div>
// 						<hr />
// 						<Address id="address" values={values} setValues={setFieldValue} />
// 					</div>
// 				</Form>
// 			)}
// 		</Formik>
// 	);
// };
