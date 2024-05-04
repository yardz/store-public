import React from 'react';

export const NewSaleForm: React.FC = () => {
	return null;
};

// import { validationSchema } from './validations';

// import { Form, Formik } from 'formik';
// import { Input, Button } from 'Components';
// import { Order, Buyer, Receiver, Payment, Freight, BuyedProductGrid } from './Components';
// import { cloneDeep } from 'lodash';

// export const NewSaleForm: React.FC = () => {
// 	return (
// 		<Formik
// 			enableReinitialize
// 			initialValues={cloneDeep({})}
// 			validationSchema={validationSchema}
// 			onSubmit={(newSale, action) => {
// 				//regra para persistir dados aqui
// 			}}>
// 			{({ values, setFieldValue }) => (
// 				<Form>
// 					<Order id="order" values={values} setValues={setFieldValue} />
// 					<Buyer id="buyer" values={values} setValues={setFieldValue} />
// 					<Receiver id="receiver" values={values} setValues={setFieldValue} />
// 					<Freight id="receiver" values={values} setValues={setFieldValue} />

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
// 						<div className="row">
// 							<div className="col-lg-6">
// 								<h3 className="tile-title">Produtos comprados</h3>
// 							</div>
// 						</div>
// 						<BuyedProductGrid items={[]} />
// 					</div>

// 					<div className="tile">
// 						<div className="row">
// 							<div className="col-lg-6">
// 								<h3 className="tile-title">Cupom de desconto</h3>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-lg-2">
// 								<Input.TextHorizontal id="value" name="value" label="Cupom" placeholder="Cupom" />
// 							</div>
// 							<div className="col-lg-10" />
// 						</div>
// 					</div>

// 					<Payment id="payment" values={values} setValues={setFieldValue} />

// 					<div className="tile">
// 						<div className="form-group row">
// 							<div className="col">
// 								<div className="text-right">
// 									<Button color="primary" label="Cancelar pedido" type="button" outline onClick={() => {}} />
// 									&nbsp;&nbsp;&nbsp;
// 									<Button color="primary" label="Gerar pedido" type="submit" />
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</Form>
// 			)}
// 		</Formik>
// 	);
// };
