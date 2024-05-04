import React from 'react';

import { validationSchema } from './validations';

import { Form, Formik } from 'formik';

import styles from './Order.module.scss';

import { FormFields } from 'Components';
import { cloneDeep } from 'lodash';

interface Props {
	id?: string;
	// tslint:disable-next-line: no-any
	values?: any;
	// tslint:disable-next-line: no-any
	setValues: (field: string, value: any) => void;
}

export const Order: React.FC<Props> = ({ id }) => {
	return (
		<Formik
			initialValues={cloneDeep({})}
			validationSchema={validationSchema}
			onSubmit={(order, actions) => {
				//
			}}>
			{({ values, setFieldValue }) => (
				<Form>
					<div className="tile">
						<div className="row">
							<div className="col-lg-6">
								<h3 className="tile-title">Pedido(venda -site)</h3>
							</div>
							<div className="col-lg-6 text-right">
								<h3 className="tile-title">
									N° <span>35999</span>
								</h3>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-3">
								<div>Nome do cliente</div>
								<br />
								<div className={styles.labelValue}>Andressa Leite</div>
							</div>
							<div className="col-lg-3">
								<div>Data da compra</div>
								<br />
								<div className={styles.labelValue}>12/07/2020</div>
							</div>
							<div className="col-lg-3">
								<div>Código de rastreio</div>
								<br />
								<div>
									<a href="/">XX999999999BR</a>
								</div>
							</div>
							<div className="col-lg-3">
								<div>Transportadora</div>
								<br />
								<div className={styles.labelValue}>Flash</div>
							</div>
						</div>
						<br />
						<div className="row">
							<div className="col-lg-3">
								<div>Status</div>
								<br />
								<div className={styles.labelValue}>Pedido enviado</div>
							</div>
							<div className="col-lg-3">
								<div>Nota fiscal</div>
								<br />
								<div className={styles.labelValue}>359999</div>
							</div>
							<div className="col-lg-3">
								<div>Download nf-e</div>
								<br />
								<div className="row">
									<div className="col-lg-3 font-weight-bold">XML</div>
									<div className="col-lg-3 font-weight-bold">PDF</div>
								</div>
							</div>
						</div>
						<hr />

						<div className="row">
							<div className="col-lg-6">
								<FormFields.TextArea id="customer_note" name="customer_note" label="Observação do cliente" rows={5} disabled />
							</div>
							<div className="col-lg-6">
								<FormFields.TextArea id="production_note" name="production_note" label="Observação da produção" rows={5} />
							</div>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};
