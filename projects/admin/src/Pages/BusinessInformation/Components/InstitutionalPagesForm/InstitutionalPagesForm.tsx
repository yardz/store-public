import React from 'react';
import classNames from 'classnames';
import { Button, FormFields } from 'Components';
import { Form, Formik } from 'formik';
import { cloneDeep } from 'lodash';
import { useHistory } from 'react-router-dom';
import { cleanObject, Notifications } from 'Utils';

import { InstitutionalPage, SlidePosition } from '@lab77store/domain';

import styles from './InstitutionalPagesForm.module.scss';
import { institutionalPagesService } from 'Services/institutionalPagesService';
import { RouteNames } from 'Routes/RouteNames';

import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
	name: Yup.string().trim().required('Campo obrigatório'),
	ref: Yup.string().trim().required('Campo obrigatório'),
	seo: Yup.object().shape({
		metaDescription: Yup.string().trim(),
		textSeo: Yup.string().trim(),
	}),
	content: Yup.object().shape({
		text01: Yup.string().trim(),
		slide01: Yup.string().trim(),
		text02: Yup.string().trim(),
		slide02: Yup.string().trim(),
		text03: Yup.string().trim(),
		slide03: Yup.string().trim(),
	}),
});

interface Props {
	initialValues: InstitutionalPage;
	positions: SlidePosition[];
	onSuccess?: () => void;
}

export const InstitutionalPagesForm: React.FC<Props> = ({ initialValues, positions, onSuccess }) => {
	const history = useHistory();

	const positionsOptions = positions.map(item => {
		return {
			label: item.name,
			value: item._id,
		};
	});
	positionsOptions.sort((a, b) => a.label.localeCompare(b.label));

	return (
		<Formik
			initialValues={cloneDeep(initialValues)}
			validationSchema={validationSchema}
			onSubmit={(institutionalPage, actions) => {
				actions.setSubmitting(true);
				institutionalPagesService
					.saveInstitutionalPage(cleanObject(institutionalPage))
					.finally(() => actions.setSubmitting(false))
					.then(() => {
						actions.resetForm();
						if (onSuccess) onSuccess();
						Notifications.success('Item salvo com sucesso');
						history.push(RouteNames.businessInformation.institutionalPages.list);
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
									<h3 className="tile-title">{values._id ? 'Editar' : 'Cadastrar'} Página Institucional</h3>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<FormFields.Input.TextHorizontal required label="Nome" placeholder="Nome da categoria" name="name" id="name" />
								</div>
								<div className={classNames(styles.centerText, { 'col-lg-2': true })}>https://lab77.com.br/</div>
								<div className="col-lg-10">
									<FormFields.Input.TextHorizontal required label="URL" placeholder="URL" name="ref" id="ref" />
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
									<FormFields.TextEditor id="text-01" name="content.text01" label="Bloco de texto" height={300} required />
								</div>
								<div className="col-lg-12">
									<FormFields.Input.SelectHorizontal
										id="slide01"
										label="Posição do slide 01"
										name="content.slide01"
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
										label="Posição do slide 02"
										name="content.slide02"
										placeholder="Selecione um slide (carrossel ou banner)"
										options={positionsOptions}
									/>
								</div>

								<div className="col-lg-12">
									<FormFields.TextEditor id="text-03" name="content.text03" label="Bloco de texto" height={300} required />
								</div>
								<div className="col-lg-12">
									<FormFields.Input.SelectHorizontal
										id="slide03"
										label="Posição do slide 03"
										name="content.slide03"
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
												history.push(RouteNames.businessInformation.institutionalPages.list);
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
