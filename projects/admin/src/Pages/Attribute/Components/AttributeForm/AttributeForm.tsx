import React from 'react';

// import { Attribute, AttributeValue } from '@lab77store/database';
// import { DatabaseServices } from 'Services';

// import { validationSchema } from './validations';

// import { Form, Formik } from 'formik';

// import { Notifications } from 'Utils/';
// import { Input, TextArea, Modal } from 'Components';
// import { cloneDeep, map } from 'lodash';
// import { FirebaseArray } from 'Types';

// interface AttributeForm {
// 	name: string;
// 	values: string;
// }

interface Props {
	// initialValues: Attribute;
	id?: string;
	showModal: boolean;
	closeModal: () => void;
}

export const AttributeForm: React.FC<Props> = () => {
	return null;
};

// const urlify = require('urlify').create({
// 	addEToUmlauts: true,
// 	szToSs: true,
// 	toLower: true,
// 	spaces: '-',
// 	nonPrintable: '-',
// 	trim: true,
// });
// const stringToAttributeValue = (labelAndValue: string): AttributeValue => {
// 	const [label, value] = labelAndValue.split(':').map(val => val.trim());
// 	return {
// 		label,
// 		value: value || label,
// 	};
// };

// export const AttributeForm: React.FC<Props> = ({ initialValues, id, showModal, closeModal }) => {
// 	const initialValueForm: AttributeForm = cloneDeep({
// 		...initialValues,
// 		values: map(initialValues.values, val => `${val.label}:${val.value}`).join(', '),
// 	});
// 	return (
// 		<Formik
// 			enableReinitialize
// 			initialValues={cloneDeep(initialValueForm)}
// 			validationSchema={validationSchema}
// 			onSubmit={(attibute, actions) => {
// 				const name = attibute.name;
// 				const values: FirebaseArray<AttributeValue> = {};
// 				attibute.values
// 					.split(',')
// 					.map(stringToAttributeValue)
// 					.forEach(value => {
// 						values[urlify(value.value)] = value;
// 					});

// 				const save = DatabaseServices.Attribute.create({ name, values }, id);
// 				if (!!save) {
// 					save
// 						.then(() => {
// 							closeModal();
// 							actions.resetForm();
// 							Notifications.success('Atributo salvo com sucesso');
// 						})
// 						.catch(() => {
// 							Notifications.error('Ocorreu um erro ao tentar editar esse atributo');
// 						});
// 				} else {
// 					Notifications.error('Ocorreu um erro ao tentar editar esse atributo');
// 				}
// 			}}>
// 			{({ resetForm, submitForm, setValues }) => (
// 				<Modal
// 					title={id ? 'Editar' : 'Cadastrar'}
// 					confirm={{
// 						onConfirm: () => {
// 							submitForm()
// 								.then()
// 								.catch();
// 						},
// 					}}
// 					close={{
// 						onClose: () => {
// 							resetForm();
// 							closeModal();
// 						},
// 					}}
// 					size="medium"
// 					visible={!!showModal}>
// 					<Form>
// 						<div className="row">
// 							<div className="col-lg-12">
// 								<Input.TextHorizontal label="Nome" placeholder="Nome do atributo" name="name" id="name" required />
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-lg-12">
// 								<TextArea
// 									id="textarea-atributte"
// 									name="values"
// 									label="Valores"
// 									rows={5}
// 									placeholder="Ex: PP,P, M, GG, XGG, XXGG, XXXGG"
// 									required
// 								/>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<p className="col-lg-12">insira os valores separados por vírgulas</p>
// 						</div>
// 					</Form>
// 				</Modal>
// 			)}
// 		</Formik>
// 	);
// };
