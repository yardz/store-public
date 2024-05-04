import React from 'react';
import classNames from 'classnames';
import { Button, FormFields } from 'Components';
import { Form, Formik } from 'formik';
import { cloneDeep, merge } from 'lodash';
import { useHistory } from 'react-router-dom';
import { cleanObject, getCategoryFullName, Notifications } from 'Utils';

import { Category, SlidePosition } from '@lab77store/domain';

import { validationSchema } from './validations';
import { initialValues as rawValues } from './initialValues';
import styles from './CategoryForm.module.scss';
import { categoriesService } from 'Services/categoriesService';
import { RouteNames } from 'Routes/RouteNames';

interface Props {
	initialValues: Category;
	categories: Category[];
	positions: SlidePosition[];
	onSuccess?: () => void;
}

export const CategoryForm: React.FC<Props> = ({ initialValues, positions, categories, onSuccess }) => {
	const history = useHistory();

	const categoriesOptions = categories.map(item => {
		return {
			sort: item.sort,
			value: item._id,
			label: getCategoryFullName({ category: item }),
		};
	});
	categoriesOptions.sort((a, b) => a.sort - b.sort);

	const positionsOptions = positions.map(item => {
		return {
			label: item.name,
			value: item._id,
		};
	});
	positionsOptions.sort((a, b) => a.label.localeCompare(b.label));

	return (
		<Formik
			initialValues={cloneDeep(merge(rawValues, initialValues))}
			validationSchema={validationSchema}
			onSubmit={(category, actions) => {
				actions.setSubmitting(true);
				categoriesService
					.saveCategory(cleanObject(category))
					.finally(() => actions.setSubmitting(false))
					.then(() => {
						actions.resetForm();
						if (onSuccess) onSuccess();
						Notifications.success('Item salvo com sucesso');
						history.push(RouteNames.category.list);
					})
					.catch(() => {
						Notifications.error('Ocorreu um erro ao tentar salvar este item');
					});
			}}>
			{({ values, setFieldValue }) => (
				<Form>
					<div className="col-md-12">
						<div className="tile">
							<FormFields.UpdateUrl setFieldValue={setFieldValue} value={values.name} field={'ref'} />
							<div className="row">
								<div className="col">
									<h3 className="tile-title">{values._id ? 'Editar' : 'Cadastrar'} Categoria</h3>
								</div>

								<div className="text-right col-6 col-sm-6 col-lg-6">
									<FormFields.OptionsList.PublishOptions label={{ name: 'Publicar', size: 4 }} />
								</div>
							</div>
							<div className="row">
								<div className="col-lg-8">
									<FormFields.Input.TextHorizontal required label="Nome" placeholder="Nome da categoria" name="name" id="name" />
								</div>
								<div className="col-lg-4">
									<FormFields.Input.SelectHorizontal
										id="parent"
										name="parent"
										label="Categoria Pai"
										placeholder="Selecione uma categoria"
										options={categoriesOptions}
									/>
								</div>

								<div
									className={classNames(styles.centerText, {
										'col-lg-2': true,
									})}>
									https://lab77.com.br/categoria/
								</div>
								<div className="col-lg-3">
									<FormFields.Input.TextHorizontal required label="URL" placeholder="URL" name="ref" id="ref" />
								</div>
								<div className="col-lg-3">
									<FormFields.Input.TextHorizontal label="Senha" placeholder="Senha para categoria" name="password" id="password" />
								</div>
								<div className="col-lg-4">
									<FormFields.Input.TextHorizontal
										label="Ordem"
										type="number"
										required
										placeholder="Ordem na lista"
										name="sort"
										id="sort"
									/>
								</div>
							</div>
						</div>
					</div>

					<FormFields.SeoArea />

					<div className="col-md-12">
						<div className="tile">
							<div className="row">
								<div className="col">
									<h3 className="tile-title">Conteúdo</h3>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-12">
									<FormFields.Input.SelectHorizontal
										id="slide01"
										label="Posição do slide"
										name="content.slide01"
										placeholder="Selecione um slide (carrossel ou banner)"
										options={positionsOptions}
									/>
								</div>
								<div className="col-lg-12">
									<FormFields.TextEditor id="text-01" name="content.text01" label="Bloco de texto" height={300} required />
								</div>
								<div className="col-lg-12">
									<FormFields.Input.SelectHorizontal
										id="slide02"
										label="Posição do slide"
										name="content.slide02"
										placeholder="Selecione um slide (carrossel ou banner)"
										options={positionsOptions}
									/>
								</div>
								<div className="col-lg-12">
									<FormFields.TextEditor id="text-02" name="content.text02" label="Bloco de texto" height={300} required />
								</div>
								<div className="col-lg-12">
									<FormFields.Input.SelectHorizontal
										id="slide02"
										label="Posição do slide"
										name="content.slideFooter"
										placeholder="Selecione um slide (carrossel ou banner)"
										options={positionsOptions}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-12">
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
												history.push(RouteNames.category.list);
											}}
										/>
										&nbsp;&nbsp;&nbsp;
										<Button color="primary" label={values._id ? 'Editar' : 'Cadastrar'} type="submit" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
	// tslint:disable-next-line: max-file-line-count
};
