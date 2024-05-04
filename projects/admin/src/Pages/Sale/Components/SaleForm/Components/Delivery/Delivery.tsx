import React from 'react';

import { validationSchema } from './validations';

import { Form, Formik } from 'formik';

import { FormFields } from 'Components';
import styles from './Delivery.module.scss';
import { cloneDeep } from 'lodash';

interface Props {
	id?: string;
	// tslint:disable-next-line: no-any
	values?: any;
	// tslint:disable-next-line: no-any
	setValues: (field: string, value: any) => void;
}

export const Delivery: React.FC<Props> = ({ id, values, setValues }) => {
	return (
		<Formik
			initialValues={cloneDeep({})}
			validationSchema={validationSchema}
			onSubmit={(delivery, actions) => {
				//
			}}>
			{({ setFieldValue }) => (
				<Form>
					<div className="tile">
						<div className="row">
							<div className="col-lg-6">
								<h3 className="tile-title">Entrega</h3>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-2">
								<FormFields.Input.TextHorizontal label="Frete" name="personalData.frete" id="personalData.frete" />
							</div>
							<div className="col-lg-4">
								<div>Status do envio</div>
								<br />
								<div className={styles.labelValue}>O pedido ainda não foi enviado</div>
							</div>
							<div className="col-lg-3">
								<div>Dias em atraso</div>
								<br />
								<div className={styles.labelValue}>5</div>
							</div>
							<div className="col-lg-3">
								<div>Data do envio</div>
								<br />
								<div className={styles.labelValue}>-</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-2">
								<FormFields.Input.TextHorizontal label="Valor frete" name="personalData.valor_frete" id="personalData.valor_frete" />
							</div>
							<div className="col-lg-4" />
							<div className="col-lg-3">
								<div>Código de rastreio</div>
								<br />
								<div className={styles.labelValue}>Não informado</div>
							</div>
							<div className="col-lg-3">
								<div>Transportadora</div>
								<br />
								<div className={styles.labelValue}>Não informado</div>
							</div>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};
