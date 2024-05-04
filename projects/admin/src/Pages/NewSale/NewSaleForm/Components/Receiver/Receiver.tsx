import React from 'react';
export const Receiver: React.FC = () => {
	return null;
};

// import { validationSchema } from './validations';

// import { Form, Formik } from 'formik';
// import { Input } from 'Components';
// import { Address } from '../Address';
// import { cloneDeep } from 'lodash';

// interface Props {
// 	id?: string;
// 	values?: any;
// 	setValues: (field: string, value: any) => void;
// }

// export const Receiver: React.FC<Props> = ({ id }) => {
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
// 								<h3 className="tile-title">Receptor</h3>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-lg-5">
// 								<Input.TextHorizontal label="Nome" placeholder="Nome" name="reference_order" id="reference_order" />
// 							</div>
// 							<div className="col-lg-5">
// 								<Input.TextHorizontal label="Sobrenome" placeholder="Sobrenome" name="reference_order" id="reference_order" />
// 							</div>
// 							<div className="col-lg-2">
// 								<Input.TextHorizontal label="Celular" placeholder="Celular" name="phone" id="phone" mask="(99) 9999-9999" />
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
