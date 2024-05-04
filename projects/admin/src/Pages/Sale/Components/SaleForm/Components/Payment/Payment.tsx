import React from 'react';

import styles from './Payment.module.scss';

interface Props {
	id?: string;
	// tslint:disable-next-line: no-any
	values?: any;
	// tslint:disable-next-line: no-any
	setValues: (field: string, value: any) => void;
}

export const Payment: React.FC<Props> = ({ id, values, setValues }) => {
	return (
		<div className="tile">
			<div className="row">
				<div className="col">
					<h3 className="tile-title">Pagamento</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-3">
					<div>Gateway de pagamento</div>
					<br />
					<div className={styles.labelValue}>Pagar.me</div>
				</div>
				<div className="col-lg-3">
					<div>Adquirente</div>
					<br />
					<div className={styles.labelValue}>216765438</div>
				</div>
				<div className="col-lg-3">
					<div>Método</div>
					<br />
					<div>
						<a href="/">Boleto bancário</a>
					</div>
				</div>
				<div className="col-lg-3">
					<div>Parcelas</div>
					<br />
					<div className={styles.labelValue}>1</div>
				</div>
			</div>
		</div>
	);
};
