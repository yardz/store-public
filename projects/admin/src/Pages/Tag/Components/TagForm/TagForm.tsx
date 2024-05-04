import React from 'react';

export const TagForm: React.FC = () => {
	return null;
};

// import { Tag } from '@lab77store/database';
// import { DatabaseServices } from 'Services';

// import { validationSchema } from './validations';

// import { Form, Formik } from 'formik';

// import { Notifications } from 'Utils/';
// import { Input, Modal } from 'Components';
// import { cloneDeep } from 'lodash';

// interface Props {
// 	initialValues: Tag;
// 	id?: string;
// 	showModal: boolean;
// 	closeModal: () => void;
// }

// export const TagForm: React.FC<Props> = ({ initialValues, id, showModal, closeModal }) => {
// 	return (
// 		<Formik
// 			enableReinitialize
// 			initialValues={cloneDeep(initialValues)}
// 			validationSchema={validationSchema}
// 			onSubmit={(tag, action) => {
// 				const save = DatabaseServices.Tag.create(tag, id);
// 				if (!!save) {
// 					save
// 						.then(() => {
// 							closeModal();
// 							action.resetForm();
// 							Notifications.success('Tag salva com sucesso');
// 						})
// 						.catch(() => {
// 							Notifications.error('Ocorreu um erro ao tentar editar essa tag');
// 						});
// 				} else {
// 					Notifications.error('Ocorreu um erro ao tentar editar essa tag');
// 				}
// 			}}>
// 			{({ resetForm, submitForm }) => (
// 				<Form>
// 					<Modal
// 						title={id ? 'Editar' : 'Cadastrar'}
// 						confirm={{
// 							onConfirm: () => {
// 								// não faz nada
// 							},
// 						}}
// 						close={{
// 							onClose: () => {
// 								resetForm();
// 								closeModal();
// 							},
// 						}}
// 						size="medium"
// 						visible={!!showModal}>
// 						<div className="row">
// 							<div className="col-lg-12">
// 								<Input.TextHorizontal label="Nome" placeholder="Nome da tag" name="name" id="name" required />
// 							</div>
// 						</div>
// 					</Modal>
// 				</Form>
// 			)}
// 		</Formik>
// 	);
// };
