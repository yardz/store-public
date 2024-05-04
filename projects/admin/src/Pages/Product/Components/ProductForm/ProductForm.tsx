// tslint:disable:max-file-line-count

import React from 'react';
import { ProductAdmin } from '@lab77store/domain';
import { ProductFormValidationSchema } from './ProductForm.validation';
import { Form, Formik } from 'formik';
// import { VariationForm } from '../VariationForm';
import * as Components from './Components';
import { cloneDeep } from 'lodash';

import { Notifications, uploadImage, UploadImage } from 'Utils/';
import { RouteNames } from 'Routes/RouteNames';
import { useHistory } from 'react-router-dom';
import { productsService } from 'Services';
import { Button } from 'Components';

const saveProducts = async (product: ProductAdmin, files: UploadImage[]) => {
	const upload = await uploadImage(product, files, 'products');
	if (!upload.categories) upload.categories = [];
	return productsService.saveProduct({ ...upload });
};

interface Props {
	initialValues: ProductAdmin;
	onSuccess?: () => void;
}

const initialValuesUpload: UploadImage[] = [
	{
		desktop: '',
		desktopAlt: '',
		mobile: '',
		mobileAlt: '',
		field: 'catalogImages.default.cover',
	},
	{
		desktop: '',
		desktopAlt: '',
		mobile: '',
		mobileAlt: '',
		field: 'catalogImages.default.hover',
	},
	{
		desktop: '',
		desktopAlt: '',
		mobile: '',
		mobileAlt: '',
		field: 'catalogImages.male.cover',
	},
	{
		desktop: '',
		desktopAlt: '',
		mobile: '',
		mobileAlt: '',
		field: 'catalogImages.male.hover',
	},
	{
		desktop: '',
		desktopAlt: '',
		mobile: '',
		mobileAlt: '',
		field: 'catalogImages.female.cover',
	},
	{
		desktop: '',
		desktopAlt: '',
		mobile: '',
		mobileAlt: '',
		field: 'catalogImages.female.hover',
	},
];

export const ProductForm: React.FC<Props> = ({ initialValues, onSuccess }) => {
	const history = useHistory();
	// const [variationEdit, setVariationEdit] = useState<string | undefined>();
	// const closeModal = () => {
	// 	setVariationEdit(undefined);
	// };
	// const openModal = (variationId: string) => {
	// 	setVariationEdit(variationId);
	// };

	return (
		<Formik
			enableReinitialize
			initialValues={cloneDeep({ ...initialValues, uploads: initialValuesUpload })}
			validationSchema={ProductFormValidationSchema}
			onSubmit={(data, actions) => {
				const { uploads, ...product } = data;
				actions.setSubmitting(true);
				saveProducts(product, uploads)
					.finally(() => actions.setSubmitting(false))
					.then(() => {
						actions.resetForm();
						if (onSuccess) onSuccess();
						Notifications.success('Item salvo com sucesso');
						history.push(RouteNames.product.list);
					})
					.catch(() => {
						Notifications.error('Ocorreu um erro ao tentar salvar este item');
					});
			}}>
			{({ values }) => (
				<>
					<Form>
						<Components.ProductInfo />
						{/* <Components.Seo prefix="product.seo" /> */}
						{/* <Components.VariationConfigs
							prefix="product.variationsConfig"
							variationsConfig={values.product.variationsConfig}
							setValues={setFieldValue}
						/> */}
						{/* <Components.VariationGrid
							variationsConfig={values.product.variationsConfig}
							variations={values.variations}
							edit={async variationId => openModal(variationId)}
						/> */}
						{/* <Components.PreSaleGrid variations={values.variations} edit={async variationId => openModal(variationId)} /> */}
						<Components.ProductImages />
						{/* <Components.PreSaleGrid variations={values.variations} edit={async variationId => openModal(variationId)} /> */}
						{/* <Components.ProductImagesDetails prefix="product" /> */}
						{/* <div className="tile">
							<div className="row">
								<div className="col">
									<h3 className="tile-title">Imagem Produto</h3>
								</div>
							</div>
						</div>

						<div className="tile">
							<div className="row">
								<div className="col">
									<h3 className="tile-title">Imagens Internas</h3>
								</div>
							</div>
						</div>

						<div className="tile">
							<div className="row">
								<div className="col">
									<h3 className="tile-title">Imagem Carrinho</h3>
								</div>
							</div>
						</div>

						<div className="tile">
							<div className="row">
								<div className="col">
									<h3 className="tile-title">Imagem Categoria:</h3>
								</div>
							</div>
						</div>
						<div className="tile">
							<div className="form-group row">
								<div className="col">
									<div className="text-right">
										<Button
											color="primary"
											label="Cancelar"
											type="button"
											outline
											onClick={() => {
												history.push('/product');
											}}
										/>
										&nbsp;&nbsp;&nbsp;
										<Button
											color="primary"
											label={id ? 'Editar' : 'Cadastrar'}
											type="submit"
											onClick={() => {
												setSubmitting(true);
											}}
										/>
									</div>
								</div>
							</div>
						</div> */}
						{/* {variationEdit && (
						<VariationForm
							productionProcessId={values.product.variationsConfig.productionProcessId}
							title={values.variations[variationEdit].name}
							initialValues={values.variations[variationEdit]}
							showModal={!!variationEdit}
							closeModal={closeModal}
							saveVariation={(variation: Variation) => {
								setFieldValue(`variations.${variationEdit}`, variation);
								return true;
							}}
						/>
					)} */}

						<div className="tile">
							<div className="form-group row">
								<div className="col">
									<div className="text-right">
										<Button
											color="primary"
											label="Cancelar"
											type="button"
											outline
											onClick={() => {
												history.push(RouteNames.product.list);
											}}
										/>
										&nbsp;&nbsp;&nbsp;
										<Button color="primary" label={values._id ? 'Editar' : 'Cadastrar'} type="submit" />
									</div>
								</div>
							</div>
						</div>
					</Form>
				</>
			)}
		</Formik>
	);
};
