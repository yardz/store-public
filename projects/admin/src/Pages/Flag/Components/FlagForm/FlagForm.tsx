import React from 'react';
export const FlagForm: React.FC = () => {
	return null;
};

// import React, { useState } from 'react';
// import { omit, cloneDeep } from 'lodash';
// import { Form, Formik } from 'formik';
// import { Flag } from '@lab77store/database';
// import { DatabaseServices } from 'Services';
// import { useHistory } from 'react-router-dom';
// import { validationSchema } from './validations';
// import { Input, Button, ImageUpload } from 'Components';
// import { Notifications, uploadImage, UploadImage } from 'Utils/';

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
// 	initialValues: Flag;
// 	id?: string;
// }

// const saveFlag = async (flag: Flag, flagId: string | undefined, files: UploadImage[]) => {
// 	const flagWithImages = await uploadImage(flag, files, 'flags');
// 	return DatabaseServices.Flag.create(flagWithImages, flagId);
// };

// export const FlagForm: React.FC<Props> = ({ initialValues, id }) => {
// 	const [load, setLoad] = useState(false);
// 	const history = useHistory();
// 	return (
// 		<Formik
// 			initialValues={cloneDeep({ ...initialValues, uploads })}
// 			validationSchema={validationSchema}
// 			onSubmit={(formData, actions) => {
// 				setLoad(true);
// 				const flag = omit(formData, ['uploads']);
// 				const save = saveFlag(flag, id, formData.uploads);

// 				if (!!save) {
// 					save
// 						.then(() => {
// 							actions.resetForm();
// 							Notifications.success('Banderinha salva com sucesso');
// 							setLoad(false);
// 							history.push(`/flag`);
// 						})
// 						.catch(() => {
// 							Notifications.error('Ocorreu um erro ao tentar editar essa banderinha');
// 						});
// 				} else {
// 					Notifications.error('Ocorreu um erro ao tentar salvar essa banderinha');
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
// 							<Input.TextHorizontal label="Nome" placeholder="Nome da banderinha" name="name" id="name" />
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
// 										history.push('/flag');
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
