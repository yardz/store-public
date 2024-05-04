import React from 'react';
import { SlidePosition } from '@lab77store/domain';

import * as Yup from 'yup';

import { Form, Formik } from 'formik';

import { slidesService } from 'Services/slidesService';
import { Notifications } from 'Utils/';
import { FormFields, Modal } from 'Components';
import { cloneDeep } from 'lodash';

export const validationSchema = Yup.object().shape({
	name: Yup.string().trim().required('Campo obrigatório'),
	type: Yup.string().trim().required('Campo obrigatório'),
	rows: Yup.object().shape({
		mobile: Yup.number().min(1, 'mínumo é 1').max(12, 'máximo é 12').required('Campo obrigatório'),
		desktop: Yup.number().min(1, 'mínumo é 1').max(12, 'máximo é 12').required('Campo obrigatório'),
	}),
});

interface Props {
	initialValues: SlidePosition;
	showModal: boolean;
	closeModal: () => void;
}
export const SlidePositionForm: React.FC<Props> = ({ initialValues, showModal, closeModal }) => {
	return (
		<Formik
			enableReinitialize
			initialValues={cloneDeep(initialValues)}
			validationSchema={validationSchema}
			onSubmit={(position, actions) => {
				actions.setSubmitting(true);
				slidesService
					.savePosition(position)
					.finally(() => actions.setSubmitting(false))
					.then(() => {
						closeModal();
						actions.resetForm();
						Notifications.success('Item salvo com sucesso');
					})
					.catch(() => {
						Notifications.error('Ocorreu um erro ao tentar salvar este item');
					});
			}}>
			{({ resetForm, submitForm, isSubmitting }) => (
				<Form>
					<Modal
						title={initialValues._id ? 'Editar' : 'Cadastrar'}
						confirm={{
							onClick: submitForm,
							disabled: isSubmitting,
						}}
						close={{
							onClick: () => {
								resetForm();
								closeModal();
							},
						}}
						size="medium"
						visible={!!showModal}>
						<div className="row">
							<div className="col-lg-8">
								<FormFields.Input.TextHorizontal label="Nome" placeholder="Nome do local" name="name" required />
							</div>
							<div className="col-lg-4">
								<FormFields.Input.Select
									name="type"
									label="Tipo"
									options={[
										{ label: 'Carrossel', value: 'carousel' },
										{ label: 'Banner', value: 'banner' },
									]}
									required
								/>
							</div>
							<div className="col-lg-6">
								<FormFields.Input.Select
									name="rows.mobile"
									label="Imagens por linha (mobile)"
									options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => ({ label: `${n}`, value: n }))}
									required
								/>
							</div>
							<div className="col-lg-6">
								<FormFields.Input.Select
									name="rows.desktop"
									label="Imagens por linha (desktop)"
									options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => ({ label: `${n}`, value: n }))}
									required
								/>
							</div>
						</div>
					</Modal>
				</Form>
			)}
		</Formik>
	);
};
