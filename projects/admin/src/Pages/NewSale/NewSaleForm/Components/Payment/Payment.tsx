import React from 'react';

export const Payment: React.FC = () => {
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

// export const Payment: React.FC<Props> = ({ id }) => {
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
// 								<h3 className="tile-title">Pagamento</h3>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-lg-4">
// 								<div>Total dos produtos</div>
// 								<br />
// 								<div>R$ 00,00</div>
// 							</div>
// 							<div className="col-lg-2">
// 								<div>Total do frete</div>
// 								<br />
// 								<div>R$ 00,00</div>
// 							</div>
// 							<div className="col-lg-2">
// 								<div>Cupom fixo</div>
// 								<br />
// 								<div>R$ 00,00</div>
// 							</div>
// 							<div className="col-lg-2">
// 								<div>Cupom %</div>
// 								<br />
// 								<div>0% - R$ 00,00</div>
// 							</div>
// 							<div className="col-lg-2">
// 								<div>Total do pedido</div>
// 								<br />
// 								<div>R$ 00,00</div>
// 							</div>
// 						</div>
// 						<hr />
// 						<div className="row">
// 							<div className="col-lg-5">
// 								<Input.SelectHorizontal
// 									id="gateway"
// 									name="gateway"
// 									label="Gateway de pagamento"
// 									options={[{ value: '', label: 'Selecione' }]}
// 								/>
// 							</div>
// 							<div className="col-lg-5">
// 								<Input.SelectHorizontal id="method" name="method" label="Método" options={[{ value: '', label: 'Selecione' }]} />
// 							</div>
// 							<div className="col-lg-2">
// 								<Input.TextHorizontal id="plots" name="plots" label="Parcelas" />
// 							</div>
// 						</div>
// 					</div>
// 				</Form>
// 			)}
// 		</Formik>
// 	);
// };
