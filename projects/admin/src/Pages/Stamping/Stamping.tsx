import React from 'react';

import { PageTitle, Button } from 'Components';

import { StampingGrid } from './Components/StampingGrid';

import styles from './Stamping.module.scss';

// const initialValues: ITag = {
// 	name: '',
// };

export const Stamping: React.FC = () => {
	// const [form, setForm] = useState({ open: false, selected: '' });
	// const [tagList, loading, error] = useObjectVal<{ [id: string]: ITag }>(firebase.database().ref('/tags'));

	// if (loading || error) {
	// 	// console.log({ error });
	// 	return null;
	// }

	// const selectedTag = tagList && !!form.selected ? tagList[form.selected] : initialValues;

	const mock = {
		'123': {
			receiver: 'Marília Magalhães',
			freight: 'Expresso',
			shippingCompany: 'Bike',
			product: 'Camiseta Brasileira',
			check: 'sim',
			variation: 'Modelo: Relxa \n Cor: Branco\n Tamanho: P \nGola: Rolê \n Manga: Customização',
		},
		'124': {
			receiver: 'Jonas Alberto',
			freight: 'Expresso',
			shippingCompany: 'Falsh',
			product: 'Camiseta Brasileira',
			check: 'nao',
			variation: 'Modelo: Relxa \n Cor: Branco\n Tamanho: P \nGola: Rolê \n Manga: Customização',
		},
		'125': {
			receiver: 'Ricardo Almeida',
			freight: 'Transportadora',
			shippingCompany: 'Bike',
			product: 'Camiseta Brasileira',
			check: 'sim',
			variation: 'Modelo: Relxa \n Cor: Branco\n Tamanho: P \nGola: Rolê \n Manga: Customização',
		},
		'126': {
			receiver: 'Marília Magalhães',
			freight: 'Transportadora',
			shippingCompany: 'Total',
			product: 'Camiseta Brasileira',
			check: 'nao',
			variation: 'Modelo: Relxa \n Cor: Branco\n Tamanho: P \nGola: Rolê \n Manga: Customização',
		},
		'127': {
			receiver: 'Joana Pires',
			freight: 'Frete Grátis',
			shippingCompany: 'Flash',
			product: 'Camiseta Brasileira',
			check: 'nao',
			variation: 'Modelo: Relxa \n Cor: Branco\n Tamanho: P \nGola: Rolê \n Manga: Customização',
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
								<h3 className="tile-title">Lista de pedidos para estampar</h3>
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
								<div className={styles.textLabel}>Total que falta estampar</div>
								<div className={styles.textValue}>200</div>
							</div>
							<div className={styles.rowTotal}>
								<div className={styles.textLabel}>Total estampado hoje</div>
								<div className={styles.textValue}>50</div>
							</div>
						</div>

						<StampingGrid items={mock} />
					</div>
				</div>
			</div>
		</>
	);
};
