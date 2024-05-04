import React from 'react';
// import { UploadImage } from 'Utils/';
// import * as Components from './Components';
// import { useFormikContext } from 'formik';
import { FormFields } from 'Components';

interface Props {}

export const ProductImages: React.FC<Props> = () => {
	// const { setFieldValue, values } = useFormikContext<{ files: UploadImage[] }>();
	// const uploads = values.uploads.map(i => i.field);
	// const categories: string[] = map(get(values, `${prefix}.categories`), i => i).filter(
	// 	category =>
	// 		uploads.includes(`${prefix}.images.categories.${category}.cover`) &&
	// 		uploads.includes(`${prefix}.images.categories.${category}.hover`),
	// );

	return (
		<>
			<div className="tile">
				<div className="row">
					<div className="col">
						<h3 className="tile-title">Imagens para Catálogo Unisex</h3>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h4>Capa</h4>
						<FormFields.ImageUpload name="uploads" field="catalogImages.default.cover" />
					</div>
					<div className="col">
						<h4>Hover</h4>
						<FormFields.ImageUpload name="uploads" field="catalogImages.default.hover" />
					</div>
				</div>
			</div>

			<div className="tile">
				<div className="row">
					<div className="col">
						<h3 className="tile-title">Imagens para Catálogo Masculino</h3>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h4>Capa</h4>
						<FormFields.ImageUpload name="uploads" field="catalogImages.male.cover" />
					</div>
					<div className="col">
						<h4>Hover</h4>
						<FormFields.ImageUpload name="uploads" field="catalogImages.male.hover" />
					</div>
				</div>
			</div>

			<div className="tile">
				<div className="row">
					<div className="col">
						<h3 className="tile-title">Imagens para Catálogo Feminino</h3>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h4>Capa</h4>
						<FormFields.ImageUpload name="uploads" field="catalogImages.female.cover" />
					</div>
					<div className="col">
						<h4>Hover</h4>
						<FormFields.ImageUpload name="uploads" field="catalogImages.female.hover" />
					</div>
				</div>
			</div>

			{/* <div className="tile">
				<div className="row">
					<div className="col">
						<h3 className="tile-title">Imagem do carrinho</h3>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<ImageUpload name="uploads" field="product.images.cart" />
					</div>
				</div>
			</div> */}

			{/* <Components.AddCategoryUpload prefix={`${prefix}.images.categories`} categories={`${prefix}.categories`} />
			{categories.map(field => (
				<div key={field} className="tile">
					<div className="row">
						<div className="col">
							<h3 className="tile-title">
								Imagens de categoria: <FirebaseField path={`categories/list/${field}/name`} />
							</h3>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h4>Capa</h4>
							<ImageUpload name="uploads" field={`${prefix}.images.categories.${field}.cover`} />
						</div>
						<div className="col">
							<h4>Hover</h4>
							<ImageUpload name="uploads" field={`${prefix}.images.categories.${field}.hover`} />
						</div>
					</div>
				</div>
			))} */}
			{/* {images.map(field => (
				<ImageUpload name="uploads" field={field} />
			))} */}
		</>
	);
};
