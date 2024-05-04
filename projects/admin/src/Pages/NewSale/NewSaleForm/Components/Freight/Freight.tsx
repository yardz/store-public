import React from 'react';

export const Freight: React.FC = () => {
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

// export const Freight: React.FC<Props> = ({ id }) => {
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
// 								<h3 className="tile-title">Frete</h3>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-lg-5">
// 								<Input.SelectHorizontal id="send" name="send" label="Tipo de envio" options={[{ value: '', label: 'Selecione' }]} />
// 							</div>
// 							<div className="col-lg-5">
// 								<Input.SelectHorizontal
// 									id="shipping_company"
// 									name="shipping_company"
// 									label="Transportadora"
// 									options={[{ value: '', label: 'Selecione' }]}
// 								/>
// 							</div>
// 							<div className="col-lg-2">
// 								<Input.TextHorizontal id="value" name="value" label="Valor" />
// 							</div>
// 						</div>
// 					</div>
// 				</Form>
// 			)}
// 		</Formik>
// 	);
// };
