import React from 'react';

export const Packing: React.FC = () => {
	return null;
};

// import { PageTitle, Button } from 'Components';

// import { PackingGrid } from './Components/PackingGrid';

// import styles from './Packing.module.scss';

// // const initialValues: ITag = {
// // 	name: '',
// // };

// export const Packing: React.FC = () => {
// 	// const [form, setForm] = useState({ open: false, selected: '' });
// 	// const [tagList, loading, error] = useObjectVal<{ [id: string]: ITag }>(firebase.database().ref('/tags'));

// 	// if (loading || error) {
// 	// 	// console.log({ error });
// 	// 	return null;
// 	// }

// 	// const selectedTag = tagList && !!form.selected ? tagList[form.selected] : initialValues;

// 	const mock = {
// 		'123': {
// 			process: 'embalar',
// 			orderNumber: '22353',
// 			originSale: 'Venda Site',
// 			nfe: '22353',
// 			dateSale: '20/02/2019',
// 			typeOrder: 'com',
// 			buyer: 'Maíra Farinatti',
// 			receiver: 'Maíra Farinatti',
// 			address: 'Rua das Laranjeiras, 111, Laranjeiras Rio de Janeiro, RJ CEP: 22240-003',
// 			freight: 'Retirar no escritório',
// 			shippingCompany: '-',
// 			piece: 'Camiseta Brasileira (Classic GL Preta P), Camiseta Brasileira (Classic GL Preta P)',
// 			packaging: '1',
// 			delay: '1',
// 			noteCustomer: 'Por favor, se possível mandar uma jaqueta com lavagem mediana (nem tão branca nem tão azul) :D',
// 			noteProduction: 'Verificar tamanho da manga da jaqueta. 39cm de manga.',
// 		},
// 		'124': {
// 			process: 'enviar',
// 			orderNumber: '24850',
// 			originSale: 'Venda WhatsApp',
// 			nfe: '24850',
// 			dateSale: '03/06/2019',
// 			typeOrder: 'com',
// 			buyer: 'Maíra Farinatti',
// 			receiver: 'Maíra Farinatti',
// 			address: 'Rua das Laranjeiras, 210, Laranjeiras Rio de Janeiro, RJ CEP: 22240-003',
// 			freight: 'Retirar no escritório',
// 			shippingCompany: 'Bike',
// 			piece: 'Camiseta Brasileira (Classic GL Preta P), Camiseta Brasileira (Classic GL Preta P)',
// 			packaging: '1',
// 			delay: '1',
// 			noteCustomer: 'Por favor, se possível mandar uma jaqueta com lavagem mediana (nem tão branca nem tão azul) :D',
// 			noteProduction: 'Verificar tamanho da manga da jaqueta. 39cm de manga.',
// 		},
// 		'125': {
// 			process: 'enviar',
// 			orderNumber: '5445',
// 			originSale: 'Troca Site',
// 			nfe: '5445',
// 			dateSale: '04/07/2019',
// 			typeOrder: 'com',
// 			buyer: 'Maíra Farinatti',
// 			receiver: 'Janaína Pereira',
// 			address: 'Rua das Laranjeiras, 206, Laranjeiras Rio de Janeiro, RJ CEP: 22240-003',
// 			freight: 'Frete grátis',
// 			shippingCompany: 'Bike',
// 			piece: 'Camiseta Brasileira (Classic GL Preta P), Camiseta Brasileira (Classic GL Preta P)',
// 			packaging: '1',
// 			delay: '1',
// 			noteCustomer: 'Por favor, se possível mandar uma jaqueta com lavagem mediana (nem tão branca nem tão azul) :D',
// 			noteProduction: 'Verificar tamanho da manga da jaqueta. 39cm de manga.',
// 		},
// 		'126': {
// 			process: 'enviar',
// 			orderNumber: '35505',
// 			originSale: 'Venda Chat',
// 			nfe: '35505',
// 			dateSale: '06/07/2020',
// 			typeOrder: 'sem',
// 			buyer: 'Maíra Farinatti',
// 			receiver: 'Maíra Farinatti',
// 			address: 'Rua das Laranjeiras, 210, Laranjeiras Rio de Janeiro, RJ CEP: 22240-003',
// 			freight: 'Retirar no escritório',
// 			shippingCompany: 'Bike',
// 			piece: 'Camiseta Brasileira (Classic GL Preta P), Camiseta Brasileira (Classic GL Preta P)',
// 			packaging: '1',
// 			delay: '1',
// 			noteCustomer: 'Por favor, se possível mandar uma jaqueta com lavagem mediana (nem tão branca nem tão azul) :D',
// 			noteProduction: 'Verificar tamanho da manga da jaqueta. 39cm de manga.',
// 		},
// 		'127': {
// 			process: 'enviar',
// 			orderNumber: '35505',
// 			originSale: 'Venda Site',
// 			nfe: '35505',
// 			dateSale: '06/07/2020',
// 			typeOrder: 'sem',
// 			buyer: 'Maíra Farinatti',
// 			receiver: 'Maíra Farinatti',
// 			address: 'Rua das Laranjeiras, 206, Laranjeiras Rio de Janeiro, RJ CEP: 22240-003',
// 			freight: 'Frete grátis',
// 			shippingCompany: 'Bike',
// 			piece: 'Camiseta Brasileira (Classic GL Preta P), Camiseta Brasileira (Classic GL Preta P)',
// 			packaging: '1',
// 			delay: '1',
// 			noteCustomer: 'Por favor, se possível mandar uma jaqueta com lavagem mediana (nem tão branca nem tão azul) :D',
// 			noteProduction: 'Verificar tamanho da manga da jaqueta. 39cm de manga.',
// 		},
// 	};

// 	return (
// 		<>
// 			<PageTitle title="Embalar e enviar" subtitle="Adicione e gerencie seus pedidos a serem embalados e enviados" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="tile">
// 						<div className="row">
// 							<div className="col">
// 								<h3 className="tile-title">Lista de pedidos para enviar</h3>
// 							</div>
// 							<div className="col text-right">
// 								<Button label="Salvar lista" icon={<i className="fa fa-save" aria-hidden="true" />} color="primary" onClick={() => {}} />
// 							</div>
// 						</div>
// 						<div className={styles.totalPacking}>
// 							<div className={styles.rowTotal}>
// 								<div className={styles.textLabel}>Total que falta embalar</div>
// 								<div className={styles.textValue}>200</div>
// 							</div>
// 							<div className={styles.rowTotal}>
// 								<div className={styles.textLabel}>Total embalado hoje</div>
// 								<div className={styles.textValue}>50</div>
// 							</div>
// 						</div>

// 						<PackingGrid items={mock} />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// tslint:disable-next-line: max-file-line-count
// };
