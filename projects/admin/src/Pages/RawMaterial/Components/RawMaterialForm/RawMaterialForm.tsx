import React from 'react';

export const RawMaterialForm: React.FC = () => {
	return null;
};

// import { RawMaterial } from '@lab77store/database';
// import { DatabaseServices } from 'Services';

// import { validationSchema } from './validations';

// import { Form, Formik } from 'formik';

// import { Input, Button, Stock } from 'Components';

// import { Notifications } from 'Utils';
// import { useHistory } from 'react-router-dom';

// import { RawMaterialProduction } from './Components';
// import { cloneDeep } from 'lodash';

// interface Props {
// 	initialValues: RawMaterial;
// 	id?: string;
// }

// export const RawMaterialForm: React.FC<Props> = ({ initialValues, id }) => {
// 	const history = useHistory();

// 	return (
// 		<Formik
// 			initialValues={cloneDeep(initialValues)}
// 			validationSchema={validationSchema}
// 			onSubmit={(rawMaterial, actions) => {
// 				actions.setSubmitting(true);

// 				const save = DatabaseServices.RawMaterial.create(rawMaterial, id);
// 				if (!!save) {
// 					save
// 						.finally(() => {
// 							actions.setSubmitting(false);
// 						})
// 						.then(() => {
// 							Notifications.success('Matéria prima salva com sucesso');
// 							history.push(`/rawMaterial`);
// 						})
// 						.catch(() => {
// 							Notifications.error('Ocorreu um erro ao tentar editar essa Matéria prima');
// 						});
// 				} else {
// 					Notifications.error('Ocorreu um erro ao tentar salvar essa Matéria prima');
// 					actions.setSubmitting(false);
// 				}
// 			}}>
// 			{({ values, setFieldValue }) => (
// 				<Form>
// 					<div className="tile">
// 						<div className="row">
// 							<div className="col">
// 								<h3 className="tile-title">Cadastro</h3>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-lg-10">
// 								<Input.TextHorizontal label="Nome" placeholder="Nome da matéria prima" name="name" id="name" required />
// 							</div>
// 							<div className="col-lg-2">
// 								<Input.TextHorizontal type="number" label="Preço" placeholder="R$" name="price" id="price" required />
// 							</div>
// 						</div>
// 						<hr />
// 						<div>
// 							<h3 className="tile-title">Estoque</h3>
// 							<Stock name="stock" />
// 						</div>
// 					</div>

// 					<RawMaterialProduction production={values.production} setField={setFieldValue} />
// 					<div className="tile col">
// 						<div className="text-right">
// 							<Button
// 								color="primary"
// 								label="Cancelar"
// 								type="button"
// 								outline
// 								onClick={() => {
// 									history.push('/rawMaterial');
// 								}}
// 							/>
// 							&nbsp;&nbsp;&nbsp;
// 							<Button color="primary" label={id ? 'Editar' : 'Cadastrar'} type="submit" />
// 						</div>
// 					</div>
// 				</Form>
// 			)}
// 		</Formik>
// 	);
// };
