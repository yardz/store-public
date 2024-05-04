import React from 'react';

export const CollectionForm: React.FC = () => {
	return null;
};

// import { Collection } from '@lab77store/database';
// import { DatabaseServices } from 'Services';

// import { validationSchema } from './validations';

// import { Form, Formik } from 'formik';

// import { Input, Button } from 'Components';

// import { Notifications } from 'Utils';
// import { useHistory } from 'react-router-dom';
// import { cloneDeep } from 'lodash';

// interface Props {
// 	initialValues: Collection;
// 	id?: string;
// }

// export const CollectionForm: React.FC<Props> = ({ initialValues, id }) => {
// 	const history = useHistory();

// 	return (
// 		<Formik
// 			initialValues={cloneDeep(initialValues)}
// 			validationSchema={validationSchema}
// 			onSubmit={(collection, actions) => {
// 				const save = DatabaseServices.Collection.create(collection, id);
// 				if (!!save) {
// 					save
// 						.then(() => {
// 							actions.resetForm();
// 							Notifications.success('coleção salva com sucesso');
// 							history.push(`/collection`);
// 						})
// 						.catch(() => {
// 							Notifications.error('Ocorreu um erro ao tentar editar essa coleção');
// 						});
// 				} else {
// 					Notifications.error('Ocorreu um erro ao tentar salvar essa coleção');
// 				}
// 			}}>
// 			{() => (
// 				<Form>
// 					<div className="row">
// 						<div className="col">
// 							<h3 className="tile-title">Nova Coleção</h3>
// 						</div>
// 					</div>
// 					<div className="row">
// 						<div className="col-lg-6">
// 							<Input.TextHorizontal label="Nome" placeholder="Nome da coleção" name="name" id="name" required />
// 						</div>
// 					</div>
// 					<div className="form-group row">
// 						<div className="col">
// 							<div className="text-right">
// 								<Button
// 									color="primary"
// 									label="Cancelar"
// 									type="button"
// 									outline
// 									onClick={() => {
// 										history.push('/collection');
// 									}}
// 								/>
// 								&nbsp;&nbsp;&nbsp;
// 								<Button color="primary" label={id ? 'Editar' : 'Cadastrar'} type="submit" />
// 							</div>
// 						</div>
// 					</div>
// 				</Form>
// 			)}
// 		</Formik>
// 	);
// };
