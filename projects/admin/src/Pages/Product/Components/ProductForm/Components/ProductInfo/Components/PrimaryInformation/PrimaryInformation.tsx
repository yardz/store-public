import React, { useMemo } from 'react';
// import { Collection, Tag, CategoryParentNameItem, Product, Variation } from '@lab77store/database';
import classNames from 'classnames';
import { FormFields } from 'Components';
import { useCategories } from 'Hooks';
import styles from './PrimaryInformation.module.scss';

import { useFormikContext } from 'formik';
import { ProductAdmin } from '@lab77store/domain';
import { getCategoryFullName } from 'Utils';

interface Props {}

export const PrimaryInformation: React.FC<Props> = () => {
	const categories = useCategories();

	const { setFieldValue, values } = useFormikContext<ProductAdmin>();

	const CategoriesOptions = useMemo(() => {
		if (!categories.data) return [];
		return categories.data.map(category => ({
			value: category._id,
			label: getCategoryFullName({ category }),
		}));
	}, [categories]);

	return (
		<>
			<FormFields.UpdateUrl setFieldValue={setFieldValue} value={values.name} field={`ref`} />
			<div className="row">
				<div className="col-lg-12">
					<FormFields.Input.TextHorizontal label="Nome" placeholder="Nome" name="name" id="product.name" />
				</div>
			</div>
			<div className="row">
				<div className={classNames(styles.centerText, { 'col-lg-4': true })}>https://www.lab77.com.br/produto/</div>
				<div className="col-lg-8">
					<FormFields.Input.TextHorizontal label="URL" placeholder="URL" name="ref" id="product.ref" />
				</div>
			</div>
			{/* <div className="row">
				<div className="col-lg-12">
					<TextArea
						id={`${prefix}.productHighlights.description`}
						name={`${prefix}.productHighlights.description`}
						label="Descrição"
						rows={5}
						placeholder="Descrição"
					/>
				</div>
			</div> */}
			{/* <div className="row">
				<div className="col">
					<Input.SelectHorizontal
						label="Tags"
						id={`${prefix}.tags`}
						name={`${prefix}.tags`}
						placeholder="Insira as tags"
						options={TagOptions}
						multiple
					/>
				</div>
			</div> */}
			<div className="row">
				<div className="col">
					<FormFields.Input.SelectHorizontal
						label="Categorias"
						id="categories"
						name="categories"
						placeholder="Insira as categorias"
						options={CategoriesOptions}
						multiple
					/>
				</div>
			</div>
			{/* <div className="row">
				<div className="col">
					<Input.SelectHorizontal
						label="Coleção"
						id={`${prefix}.configs.collection`}
						name={`${prefix}.configs.collection`}
						placeholder="Selecione uma coleção"
						options={CollectionOptions}
					/>
				</div>
				<div className="col-lg-6">
					<Input.SelectHorizontal
						label="Tipo de produto"
						placeholder="Selecione um tipo"
						id={`${prefix}.configs.type`}
						name={`${prefix}.configs.type`}
						options={[
							{ label: 'Finalizado', value: 'finished' },
							{ label: 'Pré-Finalizado', value: 'preFinished' },
							{ label: 'Sob-Demanda', value: 'onDemand' },
						]}
					/>
				</div>
			</div> */}
		</>
	);
};
