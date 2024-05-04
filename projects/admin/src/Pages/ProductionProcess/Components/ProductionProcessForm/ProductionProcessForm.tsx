import React from 'react';

export const ProductionProcessForm: React.FC = () => {
	return null;
};

// import { ProductionProcess } from '@lab77store/database';
// import { DatabaseServices } from 'Services';

// import { validationSchema } from './validations';

// import { Form, Formik } from 'formik';

// import { Notifications } from 'Utils/';
// import { Input, Modal } from 'Components';
// import classNames from 'classnames';

// import { omit, cloneDeep } from 'lodash';

// import styles from './ProductionProcessForm.module.scss';

// interface ProductionProcessForm extends ProductionProcess {
// 	multiplier: 1 | 24;
// }

// interface Props {
// 	initialValues: ProductionProcess;
// 	id?: string;
// 	showModal: boolean;
// 	closeModal: () => void;
// }

// export const ProductionProcessForm: React.FC<Props> = ({ initialValues, id, showModal, closeModal }) => {
// 	const multiplier = initialValues.time % 24 === 0 ? 24 : 1;
// 	const initialValueForm: ProductionProcessForm = cloneDeep({ ...initialValues, multiplier, time: initialValues.time / multiplier });

// 	return (
// 		<Formik
// 			enableReinitialize
// 			initialValues={initialValueForm}
// 			validationSchema={validationSchema}
// 			onSubmit={(process, actions) => {
// 				const productionProcessItem: ProductionProcess = {
// 					...omit(process, ['multiplier']),
// 					time: process.time * process.multiplier,
// 				};
// 				const save = DatabaseServices.ProductionProcess.create(productionProcessItem, id);

// 				if (!!save) {
// 					save
// 						.then(() => {
// 							closeModal();
// 							actions.resetForm();
// 							Notifications.success('Processo salvo com sucesso');
// 						})
// 						.catch(() => {
// 							Notifications.error('Ocorreu um erro ao tentar editar esse processo');
// 						});
// 				} else {
// 					Notifications.error('Ocorreu um erro ao tentar editar esse processo');
// 				}
// 			}}>
// 			{({ values, resetForm, submitForm }) => (
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
// 					size="extra-large"
// 					visible={!!showModal}>
// 					<Form>
// 						<div className="form-group row">
// 							<div className="col">
// 								<Input.TextHorizontal label="Nome" placeholder="Nome do processo" name="name" id="name" required />
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-sm-8">
// 								<Input.TextHorizontal label="Tempo" placeholder="ex: 3" type="number" name="time" id="time" required />
// 							</div>
// 							<div className="col-sm-4">
// 								<Input.SelectHorizontal
// 									id="dateTime"
// 									name="multiplier"
// 									label="Multiplicador"
// 									options={[{ value: 1, label: 'Horas' }, { value: 24, label: 'Dias' }]}
// 									required
// 								/>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-sm-6">
// 								<Input.TextHorizontal label="Icon" placeholder="Icone" type="text" name="icon" id="icon" required />
// 							</div>
// 							<div
// 								className={classNames(styles.centerText, {
// 									'col-sm-2': true,
// 								})}>
// 								<i
// 									className={classNames(values.icon, {
// 										fa: true,
// 										'text-center': true,
// 									})}
// 									aria-hidden="true"
// 								/>
// 							</div>
// 							<div className="col-sm-4">
// 								<div className={styles.centerText}>
// 									<a href="https://fontawesome.com/v4.7.0/icons/" target="_new">
// 										Icones
// 									</a>
// 								</div>
// 							</div>
// 						</div>
// 					</Form>
// 				</Modal>
// 			)}
// 		</Formik>
// 	);
// };
