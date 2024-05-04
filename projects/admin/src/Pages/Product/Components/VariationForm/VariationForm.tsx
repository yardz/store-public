import React from 'react';

export const VariationForm: React.FC = () => {
	return null;
};

// import { Form, Formik } from 'formik';

// import { Modal, Input, Stock, Button } from 'Components';
// import { validationSchema } from './validation';
// import { cloneDeep, omit, unset } from 'lodash';
// import { Variation } from '@lab77store/database';

// import * as Components from './Components';
// import { uploadImage, UploadImage } from 'Utils';

// interface Props {
// 	title: string;
// 	initialValues: Variation;
// 	showModal?: boolean;
// 	productionProcessId?: string;

// 	closeModal: () => void;
// 	saveVariation: (variation: Variation) => boolean;
// }

// const uploads: UploadImage[] = [
// 	{
// 		desktop: '',
// 		desktopAlt: '',
// 		mobile: '',
// 		mobileAlt: '',
// 		field: 'variation.images.cart',
// 	},
// ];

// export const VariationForm: React.FC<Props> = ({ title, initialValues, showModal, closeModal, saveVariation, productionProcessId }) => {
// 	const variation = cloneDeep(initialValues);
// 	if (!variation.preSale) {
// 		variation.preSale = {
// 			stock: { free: 0, locked: 0, total: 0 },
// 			start: 0,
// 			end: 0,
// 			price: 0,
// 		};
// 	}

// 	return (
// 		<Formik
// 			enableReinitialize
// 			initialValues={{
// 				variation,
// 				config: {
// 					preSale: variation.preSale.start !== 0 && variation.preSale.end !== 0,
// 				},
// 				uploads,
// 			}}
// 			validationSchema={validationSchema}
// 			onSubmit={async (data, helper) => {
// 				helper.setSubmitting(true);

// 				const sanitizedData = cloneDeep(data.variation);

// 				if (!data.config.preSale) {
// 					unset(sanitizedData, 'preSale');
// 				}

// 				const dataMerged = await uploadImage({ variation }, data.uploads, 'variations');

// 				const save = saveVariation(dataMerged.variation);

// 				helper.setSubmitting(false);
// 				if (save) {
// 					closeModal();
// 				}
// 			}}>
// 			{({ submitForm, values }) => (
// 				<Form>
// 					<Modal
// 						title={title ? title : 'Variações'}
// 						confirm={{
// 							onConfirm: () => {
// 								submitForm()
// 									.then()
// 									.catch();
// 							},
// 						}}
// 						close={{
// 							onClose: () => {
// 								closeModal();
// 							},
// 						}}
// 						size="large"
// 						visible={!!showModal}>
// 						<>
// 							<Components.AttributesAndPrice prefix={'variation'} />

// 							<hr />
// 							<Components.VariationStock prefix={'variation'} />

// 							<hr />
// 							<Components.VariationProduction prefix={'variation'} productionProcessId={productionProcessId} />

// 							<hr />
// 							<Components.VariationPreSale prefix={'variation.preSale'} config={'config.preSale'} />

// 							<hr />
// 							<Components.VariationCartImage prefix="variation.images.cart" />

// 							<hr />

// 							<Components.VariationImagesDetails prefix="variation" />

// 							{/* <hr />
// 							<div className="row">
// 								<div className="col">
// 									<h3 className="tile-title">Pré-Venda</h3>
// 								</div>
// 								<div className="col-lg-12" />
// 							</div>
// 							<div className="row">
// 								<div className="col-lg-4">
// 									<Input.TextHorizontal label="Qtd Disponivel" placeholder="Qtd Disponivel" name="color" id="color" disabled />
// 								</div>
// 								<div className="col-lg-4">
// 									<Input.TextHorizontal label="Qtd utilizada" placeholder="Qtd utilizada" name="size" id="size" disabled />
// 								</div>
// 								<div className="col-lg-4">
// 									<Input.TextHorizontal label="Qtd total" placeholder="Qtd total" name="name" id="name" disabled />
// 								</div>
// 							</div>
// 							<div className="row">
// 								<div className="col-lg-4">
// 									<Input.TextHorizontal type="date" label="Data inicial" placeholder="Data inicial" name="color" id="color" />
// 								</div>
// 								<div className="col-lg-4">
// 									<Input.TextHorizontal type="date" label="Data final" placeholder="Data final" name="color" id="color" />
// 								</div>
// 								<div className="col-lg-4">
// 									<Input.TextHorizontal label="Valor" placeholder="R$ 00,00" name="name" id="name" />
// 								</div>
// 							</div> */}

// 							{/* <hr />
// 							<div className="row">
// 								<div className="col-lg-6">
// 									<h3 className="tile-title">Imagens</h3>
// 								</div>
// 								<div className="col-lg-6 text-right">
// 									<Button label="Nova Imagem" icon={<i className="fa fa-plus" aria-hidden="true" />} color="primary" onClick={() => {}} />
// 								</div>
// 							</div> */}

// 							{/* <hr />
// 							<div className="row">
// 								<div className="col">
// 									<h3 className="tile-title">Imagens do Carrinho</h3>
// 								</div>
// 							</div> */}
// 						</>
// 					</Modal>
// 				</Form>
// 			)}
// 		</Formik>
// 	);
// tslint:disable-next-line: max-file-line-count
// };
