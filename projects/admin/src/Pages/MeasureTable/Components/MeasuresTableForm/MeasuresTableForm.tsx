import React from 'react';
export const MeasuresTableForm: React.FC = () => {
	return null;
};

// import React, { useState } from 'react';

// import { MeasuresTable } from '@lab77store/database';
// import { DatabaseServices } from 'Services';

// import { validationSchema } from './validations';

// import { Form, Formik } from 'formik';

// import { Input, Button, ImageUpload } from 'Components';
// import { Notifications, uploadImage, UploadImage } from 'Utils/';
// import { useHistory } from 'react-router-dom';
// import { omit, cloneDeep } from 'lodash';

// const uploads: UploadImage[] = [
// 	{
// 		desktop: '',
// 		desktopAlt: '',
// 		mobile: '',
// 		mobileAlt: '',
// 		field: 'image',
// 	},
// ];
// interface Props {
// 	initialValues: MeasuresTable;
// 	id?: string;
// }

// const saveMeasuresTable = async (measure: MeasuresTable, measuresTableId: string | undefined, files: UploadImage[]) => {
// 	const measureWithImages = await uploadImage(measure, files, 'measuresTable');
// 	return DatabaseServices.MeasuresTable.create(measureWithImages, measuresTableId);
// };

// export const MeasuresTableForm: React.FC<Props> = ({ initialValues, id }) => {
// 	const [load, setLoad] = useState(false);
// 	const history = useHistory();

// 	return (
// 		<Formik
// 			initialValues={cloneDeep({ ...initialValues, uploads })}
// 			validationSchema={validationSchema}
// 			onSubmit={(formData, actions) => {
// 				setLoad(true);
// 				const measere = omit(formData, ['uploads']);
// 				const save = saveMeasuresTable(measere, id, formData.uploads);
// 				if (!!save) {
// 					save
// 						.then(() => {
// 							actions.resetForm();
// 							Notifications.success('Medida salva com sucesso');
// 							setLoad(false);
// 							history.push(`/measuresTable`);
// 						})
// 						.catch(() => {
// 							Notifications.error('Ocorreu um erro ao tentar editar essa medida');
// 						});
// 				} else {
// 					Notifications.error('Ocorreu um erro ao tentar salvar essa medida');
// 				}
// 			}}>
// 			{() => (
// 				<Form>
// 					<div className="row">
// 						<div className="col">
// 							<h3 className="tile-title">Cadastro</h3>
// 						</div>
// 					</div>
// 					<div className="row">
// 						<div className="col-lg-6">
// 							<Input.TextHorizontal label="Nome" placeholder="Nome da tabela " name="name" id="name" />
// 						</div>
// 						<div className="col-lg-1" style={{ borderRight: '1px solid #ddd' }} />
// 						<div className="col-lg-4">
// 							<ImageUpload name="uploads" field="image" />
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
// 										history.push('/measuresTable');
// 									}}
// 								/>
// 								&nbsp;&nbsp;&nbsp;
// 								<Button color="primary" label={id ? 'Editar' : 'Cadastrar'} type="submit" disabled={load} />
// 							</div>
// 						</div>
// 					</div>
// 				</Form>
// 			)}
// 		</Formik>
// 	);
// };
