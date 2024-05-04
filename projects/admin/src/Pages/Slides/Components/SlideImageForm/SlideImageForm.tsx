import React from 'react';
import { SlideImage } from '@lab77store/domain';
import { Button, FormFields } from 'Components';
import { Form, Formik } from 'formik';
import { useSlidePositions } from 'Hooks';
import { cloneDeep } from 'lodash';
import { useHistory } from 'react-router-dom';
import { RouteNames } from 'Routes/RouteNames';
import { slidesService } from 'Services/slidesService';
import { cleanObject, Notifications, uploadImage, UploadImage } from 'Utils/';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	name: Yup.string().trim().required('Campo obrigatório'),
	url: Yup.string().trim().url('Escolha uma url válida'),
	slidePosition: Yup.string().trim().required('Campo obrigatório'),
});

const initialValuesUpload: UploadImage[] = [
	{
		desktop: '',
		desktopAlt: '',
		mobile: '',
		mobileAlt: '',
		field: 'image',
	},
];

interface Props {
	initialValues: SlideImage;
	onSuccess?: () => void;
}

const saveBanner = async (slideImage: SlideImage, files: UploadImage[]) => {
	const slideWithImages = cleanObject(await uploadImage(slideImage, files, 'slides'));
	return slidesService.saveImage(slideWithImages);
};

export const SlideImageForm: React.FC<Props> = ({ initialValues, onSuccess }) => {
	const history = useHistory();
	const positions = useSlidePositions();

	if (positions.isLoading) {
		return <>Loading...</>;
	}
	const options = positions.data?.map(position => ({ label: position.name, value: position._id })) || [];
	return (
		<Formik
			initialValues={cloneDeep({ ...initialValues, uploads: initialValuesUpload })}
			validationSchema={validationSchema}
			onSubmit={({ uploads, ...slideImage }, actions) => {
				actions.setSubmitting(true);
				saveBanner(slideImage, uploads)
					.finally(() => {
						actions.setSubmitting(false);
					})
					.then(() => {
						if (onSuccess) onSuccess();
						Notifications.success('Item salvo com sucesso');
						history.push(RouteNames.slide.imagesList);
					})
					.catch(() => {
						Notifications.error('Ocorreu um erro ao tentar salvar este item');
					});
			}}>
			{({ resetForm, isSubmitting }) => (
				<Form>
					<div className="row">
						<div className="col-md-4">
							<FormFields.ImageUpload name="uploads" field="image" />
						</div>
						<div className="col-md-8">
							<FormFields.Input.TextHorizontal label="Título" name="name" required />
							<FormFields.Input.TextHorizontal label="URL" name="url" />
							<FormFields.Input.SelectHorizontal name="slidePosition" label="Posição" options={options} required />
							<FormFields.OptionsList.PublishOptions label={{ name: 'Publicar', size: 2 }} />

							<div className="form-group row">
								<div className="col">
									<div className="text-right">
										<Button
											color="primary"
											label="Cancelar"
											type="button"
											outline
											onClick={() => {
												resetForm();
											}}
										/>
										&nbsp;&nbsp;&nbsp;
										<Button color="primary" label="Cadastrar" type="submit" disabled={isSubmitting} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};
