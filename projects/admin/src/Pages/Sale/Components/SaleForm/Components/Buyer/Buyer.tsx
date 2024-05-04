import React from 'react';

import { Button } from 'Components';
import { Link } from 'react-router-dom';
import styles from './Buyer.module.scss';

interface Props {
	id?: string;
	// tslint:disable-next-line: no-any
	values?: any;
	// tslint:disable-next-line: no-any
	setValues: (field: string, value: any) => void;
}

export const Buyer: React.FC<Props> = ({ id }) => {
	return (
		<div className="tile">
			<div className="row">
				<div className="col-lg-6">
					<h3 className="tile-title">Comprador</h3>
				</div>
				<div className="col-lg-6 text-right">
					<Link to={''}>
						<Button label="Cadastro do cliente" icon={<i className="fa fa-id-badge" aria-hidden="true" />} color="primary" />
					</Link>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-2">
					<div>Id</div>
					<br />
					<div>
						<a href="/">29553</a>
					</div>
				</div>
				<div className="col-lg-3">
					<div>Nome completo</div>
					<br />
					<div className={styles.labelValue}>Andressa Leite</div>
				</div>
				<div className="col-lg-4">
					<div>E-mail</div>
					<br />
					<div className={styles.labelValue}>andleite@gmail.com</div>
				</div>
				<div className="col-lg-3">
					<div>CPF</div>
					<br />
					<div className={styles.labelValue}>364.647.048-85</div>
				</div>
			</div>
			<br />
			<div className="row">
				<div className="col-lg-2">
					<div>Telefone</div>
					<br />
					<div className={styles.labelValue}>(11) 3256-7783</div>
				</div>
				<div className="col-lg-3">
					<div>Celular</div>
					<br />
					<div className={styles.labelValue}>(11) 89830-2701</div>
				</div>
				<div className="col-lg-4" />
				<div className="col-lg-3" />
			</div>
		</div>
	);
};
