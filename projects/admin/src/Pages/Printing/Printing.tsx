import React from 'react';

import { PageTitle, Button } from 'Components';

import { PrintingGrid } from './Components/PrintingGrid';

import styles from './Printing.module.scss';

// const initialValues: ITag = {
// 	name: '',
// };

export const Printing: React.FC = () => {
	const mock = {
		'123': {
			process: 'impressao',
			orderNumber: '22353',
			originSale: 'Venda Site',
			dateSale: '20/02/2019',
			typeOrder: 'sem',
			buyer: 'Maíra Farinatti',
			delay: '-',
			noteCustomer: '-',
			noteProduction: '-',
		},
		'124': {
			process: 'impressao',
			orderNumber: '24850',
			originSale: 'Venda Whatsapp',
			dateSale: '03/06/2019',
			typeOrder: 'sem',
			buyer: 'Debora Magalhaes',
			delay: '-',
			noteCustomer: '-',
			noteProduction: '-',
		},
		'125': {
			process: 'impressao',
			orderNumber: '5445',
			originSale: 'Troca Loja Física',
			dateSale: '04/07/2020',
			typeOrder: 'sem',
			buyer: 'Yan Corrêa Cumani',
			delay: '-',
			noteCustomer: '-',
			noteProduction: '-',
		},
		'126': {
			process: 'impressao',
			orderNumber: '35505',
			originSale: 'Venda Chat',
			dateSale: '06/07/2020',
			typeOrder: 'sem',
			buyer: 'Guilherme Gieron',
			delay: '-',
			noteCustomer: 'Por favor, se possível mandar uma jaqueta com lavagem mediana (nem tão branca nem tão azul) :D',
			noteProduction: 'Verificar tamanho da manga da jaqueta. 39cm de manga.',
		},
		'127': {
			process: 'impressao',
			orderNumber: '35505',
			originSale: 'Venda Site',
			dateSale: '06/07/2020',
			typeOrder: 'sem',
			buyer: 'Guilherme Gieron',
			delay: '1',
			noteCustomer: 'Por favor, se possível mandar uma jaqueta com lavagem mediana (nem tão branca nem tão azul) :D',
			noteProduction: 'Verificar tamanho da manga da jaqueta. 39cm de manga.',
		},
	};

	return (
		<>
			<PageTitle title="Estamparia" subtitle="Gerencie seus pedidos a serem estampados" />
			<div className="row">
				<div className="col-md-12">
					<div className="tile">
						<div className="row">
							<div className="col">
								<h3 className="tile-title">Lista de pedidos para imprimir</h3>
							</div>
							<div className="col text-right">
								<Button
									label="Salvar lista"
									icon={<i className="fa fa-save" aria-hidden="true" />}
									color="primary"
									onClick={() => {
										//
									}}
								/>
							</div>
						</div>
						<div className={styles.totalPacking}>
							<div className={styles.rowTotal}>
								<div className={styles.textLabel}>Total que falta imprimir</div>
								<div className={styles.textValue}>200</div>
							</div>
							<div className={styles.rowTotal}>
								<div className={styles.textLabel}>Total impresso hoje</div>
								<div className={styles.textValue}>50</div>
							</div>
						</div>

						<PrintingGrid items={mock} />
					</div>
				</div>
			</div>
		</>
	);
};
