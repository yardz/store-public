import React from 'react';

export const ProductAdjustmentForm: React.FC = () => {
	return null;
};

// import { validationSchema } from './validations';

// import { Form, Formik } from 'formik';

// import { Input, OptionsList } from 'Components';
// import { cloneDeep } from 'lodash';

// export const ProductAdjustmentForm: React.FC = () => {
// 	return (
// 		<Formik
// 			enableReinitialize
// 			initialValues={cloneDeep({})}
// 			validationSchema={validationSchema}
// 			onSubmit={() => {
// 				// Sem ação
// 			}}>
// 			{({ resetForm, submitForm }) => (
// 				<Form>
// 					<div className="row">
// 						<div className="col-lg-3">
// 							<Input.Select label="Tag" name="name" id="name" options={[{ value: '', label: 'Selecione a tag' }]} />
// 						</div>
// 						<div className="col-lg-6" />
// 					</div>
// 					<div className="row">
// 						<div className="col-lg-3">
// 							<Input.TextHorizontal label="Preço antigo" placeholder="R$ 00,00" name="priceOld" id="priceOld" />
// 						</div>
// 						<div className="col-lg-6">
// 							<div className="col-lg-6">
// 								<OptionsList.CheckboxListHorizontal
// 									label={{ name: '', size: 3 }}
// 									options={[{ name: 'clearFieldPriceOld', label: 'Limpar dados do campo' }]}
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="row">
// 						<div className="col-lg-3">
// 							<Input.TextHorizontal label="Preço" placeholder="R$ 00,00" name="price" id="price" />
// 						</div>
// 						<div className="col-lg-6">
// 							<div className="col-lg-6">
// 								<OptionsList.CheckboxListHorizontal
// 									label={{ name: '', size: 3 }}
// 									options={[{ name: 'clearFieldPrice', label: 'Limpar dados do campo' }]}
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="row">
// 						<div className="col-lg-3">
// 							<Input.TextHorizontal label="Tempo produção" placeholder="0" name="timeProdution" id="timeProdution" />
// 						</div>
// 						<div className="col-lg-6">
// 							<div className="col-lg-6">
// 								<OptionsList.CheckboxListHorizontal
// 									label={{ name: '', size: 3 }}
// 									options={[{ name: 'clearFieldTimeProdution', label: 'Limpar dados do campo' }]}
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="row">
// 						<div className="col-lg-3">
// 							<Input.TextHorizontal label="Label botão" placeholder="0" name="labelButton" id="labelButton" />
// 						</div>
// 						<div className="col-lg-6">
// 							<div className="col-lg-6">
// 								<OptionsList.CheckboxListHorizontal
// 									label={{ name: '', size: 3 }}
// 									options={[{ name: 'clearFieldLabelButton', label: 'Limpar dados do campo' }]}
// 								/>
// 							</div>
// 						</div>
// 					</div>
// 				</Form>
// 			)}
// 		</Formik>
// 	);
// };
