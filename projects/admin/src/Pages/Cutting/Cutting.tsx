import React from 'react';

import { PageTitle, Button } from 'Components';
import { CuttingGrid } from './Components/CuttingGrid';

import styles from './Cutting.module.scss';

// const initialValues: ITag = {
// 	name: '',
// };

export const Cutting: React.FC = () => {
	const mock = {
		'123': {
			process: 'corte',
			orderNumber: '22353',
			originSale: 'Venda Site',
			dateSale: '20/02/2019',
			typeOrder: 'sem',
			buyer: 'Maíra Farinatti',
			receiver: 'Marília Magalhães',
			freight: 'Expresso',
			shippingCompany: 'Bike',
			product: 'Camiseta Brasileira',
			check: 'sim',
			variation: 'Modelo: Relxa \n Cor: Branco \nTamanho: P \nGola: Rolê \nManga: Customização',
			delay: '-',
			noteCustomer: '-',
			noteProduction: '-',
		},
		'124': {
			process: 'corte',
			orderNumber: '24850',
			originSale: 'Venda WhatsApp',
			dateSale: '03/06/2019',
			typeOrder: 'com',
			buyer: 'Debora Magalhaes',
			receiver: 'Jonas Alberto',
			freight: 'Expresso',
			shippingCompany: 'Flash',
			product: 'Camiseta Brasileira',
			check: 'sim',
			variation: 'Modelo: Relxa \n Cor: Branco \nTamanho: P \nGola: Rolê \nManga: Customização',
			delay: '-',
			noteCustomer: '-',
			noteProduction: '-',
		},
		'125': {
			process: 'corte',
			orderNumber: '5445',
			originSale: 'Troca Loja Física',
			dateSale: '04/07/2020',
			typeOrder: 'com',
			buyer: 'Yan Corrêa Cumani',
			receiver: 'Ricardo Almeida',
			freight: 'Transportadora',
			shippingCompany: 'Bike',
			product: 'Camiseta Brasileira',
			check: 'sim',
			variation: 'Modelo: Relxa \n Cor: Branco \nTamanho: P \nGola: Rolê \nManga: Customização',
			delay: '-',
			noteCustomer: '-',
			noteProduction: '-',
		},
		'126': {
			process: 'corte',
			orderNumber: '35505',
			originSale: 'Venda Chat',
			dateSale: '06/07/2020',
			typeOrder: 'sem',
			buyer: 'Guilherme Gieron',
			receiver: 'Maíra Farinatti',
			freight: 'Transportadora',
			shippingCompany: 'Total',
			product: 'Camiseta Brasileira',
			check: 'sim',
			variation: 'Modelo: Relxa \n Cor: Branco \nTamanho: P \nGola: Rolê \nManga: Customização',
			delay: '-',
			noteCustomer: '-',
			noteProduction: '-',
		},
		'127': {
			process: 'corte',
			orderNumber: '35505',
			originSale: 'Venda Site',
			dateSale: '06/07/2020',
			typeOrder: 'sem',
			buyer: 'Guilherme Gieron',
			receiver: 'Joana Pires',
			freight: 'Frete Gratis',
			shippingCompany: 'Fash',
			product: 'Camiseta Brasileira',
			check: 'sim',
			variation: 'Modelo: Relxa \n Cor: Branco \nTamanho: P \nGola: Rolê \nManga: Customização',
			delay: '1',
			noteCustomer: 'Por favor, se possível mandar uma jaqueta com lavagem mediana (nem tão branca nem tão azul) :D',
			noteProduction: 'Verificar tamanho da manga da jaqueta. 39cm de manga.',
		},
	};

	return (
		<>
			<PageTitle title="Corte" subtitle="Gerencie seus pedidos a serem cortados" />
			<div className="row">
				<div className="col-md-12">
					<div className="tile">
						<div className="row">
							<div className="col">
								<h3 className="tile-title">Lista de pedidos para corte</h3>
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
								<div className={styles.textLabel}>Total que falta Cortar</div>
								<div className={styles.textValue}>200</div>
							</div>
							<div className={styles.rowTotal}>
								<div className={styles.textLabel}>Total Cortado hoje</div>
								<div className={styles.textValue}>50</div>
							</div>
						</div>

						<CuttingGrid items={mock} />
					</div>
				</div>
			</div>
		</>
	);
};
