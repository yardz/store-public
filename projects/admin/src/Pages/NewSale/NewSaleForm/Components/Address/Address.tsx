import React from 'react';
export const Address: React.FC = () => {
	return null;
};

// import { validationSchema } from './validations';

// import { Form, Formik } from 'formik';
// import { Input } from 'Components';
// import { cloneDeep } from 'lodash';

// interface Props {
// 	id?: string;
// 	values?: any;
// 	setValues: (field: string, value: any) => void;
// }

// export const Address: React.FC<Props> = ({ id }) => {
// 	return (
// 		<Formik
// 			enableReinitialize
// 			initialValues={cloneDeep({})}
// 			validationSchema={validationSchema}
// 			onSubmit={(address, action) => {
// 				//regra para persistir dados aqui
// 			}}>
// 			{({ resetForm, values, submitForm }) => (
// 				<Form>
// 					<div className="row">
// 						<div className="col-lg-2">
// 							<Input.TextHorizontal label="CEP" placeholder="CEP" name="email" id="" />
// 						</div>
// 						<div className="col-lg-10" />
// 					</div>
// 					<div className="row">
// 						<div className="col-lg-6">
// 							<Input.TextHorizontal label="Endereço" placeholder="Endereço" name="address" id="" />
// 						</div>
// 						<div className="col-lg-3">
// 							<Input.TextHorizontal label="Número" placeholder="Número" name="address" id="" />
// 						</div>
// 						<div className="col-lg-3">
// 							<Input.TextHorizontal label="Complemento" placeholder="Endereço" name="address" id="" />
// 						</div>
// 					</div>
// 					<div className="row">
// 						<div className="col-lg-4">
// 							<Input.TextHorizontal label="Bairro" placeholder="Bairro" name="address" id="" />
// 						</div>
// 						<div className="col-lg-4">
// 							<Input.TextHorizontal label="Cidade" placeholder="Cidade" name="address" id="" />
// 						</div>
// 						<div className="col-lg-4">
// 							<Input.SelectHorizontal id="Estado" name="state" label="Estado" options={[{ value: '', label: 'Selecione o estado' }]} />
// 						</div>
// 					</div>
// 				</Form>
// 			)}
// 		</Formik>
// 	);
// };
