import React from 'react';

export const SaleForm: React.FC = () => {
	return null;
};

// import { User } from '@lab77store/database';

// import { validationSchema } from './validations';

// import { Form, Formik } from 'formik';

// import { Button, Input } from 'Components';

// import { Link } from 'react-router-dom';
// import { BuyedProductGrid, Order, Buyer, Receiver, Delivery } from './Components';
// import { Payment } from './Components/Payment';
// import { cloneDeep } from 'lodash';

// interface Props {
// 	initialValues: User;
// 	id?: string;
// }

// export const SaleForm: React.FC<Props> = ({ initialValues, id }) => {
// 	return (
// 		<Formik initialValues={cloneDeep(initialValues)} validationSchema={validationSchema} onSubmit={(customer, actions) => {}}>
// 			{({ values, setFieldValue }) => (
// 				<Form>
// 					<Order id="orders" values={values} setValues={setFieldValue} />
// 					<Payment id="payment" values={values} setValues={setFieldValue} />
// 					<Buyer id="buyer" values={values} setValues={setFieldValue} />
// 					<Receiver id="receiver" values={values} setValues={setFieldValue} />
// 					<Delivery id="delivery" values={values} setValues={setFieldValue} />

// 					<div className="tile">
// 						<div className="row">
// 							<div className="col-lg-6">
// 								<h3 className="tile-title">Produtos comprados</h3>
// 							</div>
// 							<div className="col-lg-6 text-right">
// 								<Link to={''}>
// 									<Button label="Devolver pedido" icon={<i className="fa fa-close" aria-hidden="true" />} color="primary" />
// 								</Link>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<BuyedProductGrid items={[]} />
// 						</div>
// 					</div>

// 					<div className="tile">
// 						<div className="row">
// 							<div className="col-lg-6">
// 								<h3 className="tile-title">Adicionar produto</h3>
// 							</div>
// 							<div className="col-lg-6 text-right">
// 								<Button label="Adicionar" icon={<i className="fa fa-plus" aria-hidden="true" />} color="primary" />
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-lg-5">
// 								<Input.SelectHorizontal id="product" name="product" label="Produto" options={[{ value: '', label: 'Selecione' }]} />
// 							</div>
// 							<div className="col-lg-5">
// 								<Input.SelectHorizontal id="variation" name="variation" label="Variação" options={[{ value: '', label: 'Selecione' }]} />
// 							</div>
// 							<div className="col-lg-2">
// 								<Input.TextHorizontal id="value" name="value" label="Valor" />
// 							</div>
// 						</div>
// 					</div>

// 					<div className="tile">
// 						<div className="form-group row">
// 							<div className="col">
// 								<div className="text-right">
// 									<Button color="primary" label="Salvar alterações" type="submit" />
// 									&nbsp;&nbsp;&nbsp;
// 									<Button color="primary" label="Reenviar para o Bling" type="submit" />
// 									&nbsp;&nbsp;&nbsp;
// 									<Button color="primary" label="Cancelar venda" type="button" outline onClick={() => {}} />
// 									&nbsp;&nbsp;&nbsp;
// 									<Button color="primary" label="Aprovar pedido" type="submit" />
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</Form>
// 			)}
// 		</Formik>
// 	);
// };
