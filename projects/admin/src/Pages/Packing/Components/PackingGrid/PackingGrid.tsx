import React from 'react';

export const PackingGrid: React.FC = () => {
	return null;
};

// import { Table, DataFilter } from 'Components';
// import { map } from 'lodash';
// import { useFilter } from 'Hooks';

// const header = [
// 	'Processo',
// 	'Pedido',
// 	'Origem da venda',
// 	'Nota Fiscal',
// 	'Data da compra',
// 	'Tipo de pedido',
// 	'Comprador',
// 	'Receptor',
// 	'Endereço',
// 	'Metodo frete',
// 	'Transportadora',
// 	'Peças',
// 	'Embalagens',
// 	'Atraso',
// 	'Observação do cliente',
// 	'Observação de produção',
// ];

// interface Props {
// 	items: { [id: string]: any }; // ainda nao tem um tipo definido
// }

// export const PackingGrid: React.FC<Props> = ({ items }) => {
// 	//nomes temporarios, será necessário definir os nomes corretamente após o Bruno criar as interfaces
// 	const filter = {
// 		process: useFilter('Todos', [
// 			{ value: 'embalar', label: 'Embalar' },
// 			{ value: 'enviar', label: 'Enviar' },
// 			{ value: 'bling', label: 'Enviar para o bling' },
// 		]),
// 		orderNumber: useFilter('Pedido'),
// 		originSale: useFilter('Origem da venda'),
// 		nfe: useFilter('Nota Fiscal'),
// 		dateSale: useFilter('Data da compra'),
// 		typeOrder: useFilter('Todos', [{ value: 'com', label: 'Com produção' }, { value: 'sem', label: 'Sem produção' }]),
// 		buyer: useFilter('Comprador'),
// 		receiver: useFilter('Receptor'),
// 		address: useFilter('Endereço'),
// 		freight: useFilter('Metodo frete'),
// 		shippingCompany: useFilter('Transportadora'),
// 		piece: useFilter('Peças'),
// 		packaging: useFilter('Embalagens'),
// 		delay: useFilter('Atraso'),
// 		noteCustomer: useFilter('Observação do cliente'),
// 		noteProduction: useFilter('Observação de produção'),
// 	};

// 	/*
// 	 * criar um nova lista de algum componente que vai renderizar a linha personalizada da tabela
// 	 * a const rows deve ser um array de objetos de algum componente que vai renderizar a linha da tabela
// 	 */
// 	const rows = map(items, (item, key) => {
// 		console.log(item);
// 		return <></>;
// 	});

// 	console.log(rows);

// 	return (
// 		<div style={{ overflow: 'auto' }}>
// 			<DataFilter filter={filter} items={items}>
// 				{(data, filterField) => <Table header={header} body={data} filter={filterField} />}
// 			</DataFilter>
// 		</div>
// 	);
// };
