import React from 'react';

export const Order: React.FC = () => {
	return null;
};

// import { validationSchema } from './validations';

// import { Form, Formik } from 'formik';
// import { RadioButton, Input } from 'Components';
// import { cloneDeep } from 'lodash';

// interface Props {
// 	id?: string;
// 	values?: any;
// 	setValues: (field: string, value: any) => void;
// }

// export const Order: React.FC<Props> = ({ id }) => {
// 	return (
// 		<Formik
// 			enableReinitialize
// 			initialValues={cloneDeep({})}
// 			validationSchema={validationSchema}
// 			onSubmit={(tag, action) => {
// 				//regra para persistir dados aqui
// 			}}>
// 			{({ resetForm, values, submitForm }) => (
// 				<Form>
// 					<div className="tile">
// 						<div className="row">
// 							<div className="col-lg-6">
// 								<h3 className="tile-title">Pedido</h3>
// 							</div>
// 							<div className="col-lg-6 text-right">
// 								<h3>
// 									N° <span>36000</span>
// 								</h3>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-lg-6">
// 								<legend className="col-form-label">Tipo de pedido</legend>
// 								<div className="form-check form-check-inline col-sm-3">
// 									<RadioButton name="gridRadios" id="gridRadios1" value="venda" label="Venda" />
// 								</div>
// 								<div className="form-check form-check-inline col-sm-3">
// 									<RadioButton name="gridRadios" id="gridRadios2" value="troca" label="Troca" />
// 								</div>
// 							</div>
// 							<div className="col-lg-3">
// 								<Input.TextHorizontal
// 									label="Pedido de referência"
// 									placeholder="Número pedido"
// 									name="reference_order"
// 									id="reference_order"
// 									disabled
// 								/>
// 							</div>
// 							<div className="col-lg-3">
// 								<Input.TextHorizontal label="Origem do pedido" name="reference_order" id="reference_order" />
// 							</div>
// 						</div>
// 					</div>
// 				</Form>
// 			)}
// 		</Formik>
// 	);
// };
