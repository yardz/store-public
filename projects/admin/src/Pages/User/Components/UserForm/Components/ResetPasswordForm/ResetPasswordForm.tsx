import React from 'react';
import { UserAdmin } from '@lab77store/domain';

import * as Yup from 'yup';

import { Form, Formik } from 'formik';

import { Notifications } from 'Utils/';
import { FormFields, Modal } from 'Components';
import { usersService } from 'Services/usersService';
import { cloneDeep } from 'lodash';

export const validationSchema = Yup.object().shape({
	email: Yup.string().trim().required('Campo obrigatório'),
});

interface Props {
	user: UserAdmin;
	showModal: boolean;
	closeModal: () => void;
}
export const ResetPasswordForm: React.FC<Props> = ({ user, showModal, closeModal }) => {
	return (
		<Formik
			enableReinitialize
			initialValues={cloneDeep({ uid: user.uid, email: user.personalData.email })}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => {
				actions.setSubmitting(true);
				usersService
					.postResetPassword(values)
					.finally(() => actions.setSubmitting(false))
					.then(() => {
						closeModal();
						actions.resetForm();
						Notifications.success('Email enviado com Sucesso');
					})
					.catch(() => {
						Notifications.error('Ocorreu um erro ao enviar o email');
					});
			}}>
			{({ resetForm, submitForm, isSubmitting }) => (
				<Form>
					<Modal
						title={'Enviar e-mail de resetar senha para o e-mail:'}
						confirm={{
							onClick: submitForm,
							text: 'Envair e-mail',
							disabled: isSubmitting,
						}}
						close={{
							onClick: () => {
								resetForm();
								closeModal();
							},
						}}
						size="medium"
						visible={showModal}>
						<div className="row">
							<div className="col-lg-12">
								<FormFields.Input.TextHorizontal label="Email" placeholder="Email do Usuário" name="email" required />
							</div>
						</div>
					</Modal>
				</Form>
			)}
		</Formik>
	);
};
