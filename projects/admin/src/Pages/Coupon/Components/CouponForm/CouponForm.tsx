import React from 'react';

export const CouponForm: React.FC = () => {
	return null;
};

// import { Coupon } from '@lab77store/database';
// import { DatabaseServices } from 'Services';

// import { validationSchema } from './validations';

// import { Form, Formik } from 'formik';

// import { Notifications } from 'Utils/';
// import { Input, Modal, Stock } from 'Components';
// import { cloneDeep } from 'lodash';

// interface Props {
// 	initialValues: Coupon;
// 	id?: string;
// 	showModal: boolean;
// 	closeModal: () => void;
// }

// export const CouponForm: React.FC<Props> = ({ initialValues, id, showModal, closeModal }) => {
// 	return (
// 		<Formik
// 			enableReinitialize
// 			initialValues={cloneDeep(initialValues)}
// 			validationSchema={validationSchema}
// 			onSubmit={(coupon, action) => {
// 				// console.log(coupon);
// 				const save = DatabaseServices.Coupon.create(coupon, id);
// 				if (!!save) {
// 					save
// 						.then(() => {
// 							closeModal();
// 							action.resetForm();
// 							Notifications.success('Cupom salvo com sucesso');
// 						})
// 						.catch(() => {
// 							Notifications.error('Ocorreu um erro ao tentar editar esse cupom');
// 						});
// 				} else {
// 					Notifications.error('Ocorreu um erro ao tentar editar esse cupom');
// 				}
// 			}}>
// 			{({ resetForm, submitForm }) => (
// 				<Form>
// 					<Modal
// 						title={id ? 'Editar' : 'Cadastrar'}
// 						confirm={{
// 							onConfirm: () => {
// 								// Sem ação
// 							},
// 						}}
// 						close={{
// 							onClose: () => {
// 								resetForm();
// 								closeModal();
// 							},
// 						}}
// 						size="large"
// 						visible={!!showModal}>
// 						<div className="row">
// 							<div className="col">
// 								<Input.TextHorizontal label="Código" placeholder="Código" name="code" id="code" required />
// 							</div>
// 							<div className="col">
// 								<Input.TextHorizontal type="number" label="Valor(R$)" placeholder="R$ 0,00" name="value" id="value" required />
// 							</div>
// 							<div className="col">
// 								<Input.TextHorizontal type="number" label="Valor(%)" placeholder="%" name="percent" id="percent" required />
// 							</div>
// 							<div className="col">
// 								<Input.SelectHorizontal
// 									label="Frete"
// 									placeholder="Tipo de Frete"
// 									name="shipping"
// 									id="shipping"
// 									options={[{ value: 'normal', label: 'Normal' }, { value: 'free', label: 'Frete Grátis' }]}
// 									required
// 								/>
// 							</div>
// 						</div>
// 						<Stock name="stock" />
// 					</Modal>
// 				</Form>
// 			)}
// 		</Formik>
// 	);
// };
