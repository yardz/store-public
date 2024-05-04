import React from 'react';

import { Table, DataFilter } from 'Components';
import { map } from 'lodash';
import { useFilter } from 'Hooks';

const header = [
	'Processo',
	'Pedido',
	'Origem da venda',
	'Data da compra',
	'Tipo de pedido',
	'Comprador',
	'Receptor',
	'Metodo frete',
	'Transportadora',
	'Nome do Produto',
	'Check',
	'Variação',
	'Atraso',
	'Observação do cliente',
	'Observação de produção',
];

interface Props {
	// tslint:disable-next-line: no-any
	items: { [id: string]: any }; // ainda nao tem um tipo definido
}

export const SeamGrid: React.FC<Props> = ({ items }) => {
	//nomes temporarios, será necessário definir os nomes corretamente após o Bruno criar as interfaces
	const filter = {
		process: useFilter('Todos', [{ value: 'costurar', label: 'Costurar' }]),
		orderNumber: useFilter('ID'),
		originSale: useFilter('Origem'),
		dateSale: useFilter('Data'),
		typeOrder: useFilter('Todos', [
			{ value: 'com', label: 'Com produção' },
			{ value: 'sem', label: 'Sem produção' },
		]),
		buyer: useFilter('Comprador'),
		receiver: useFilter('Receptor'),
		freight: useFilter('Frete'),
		shippingCompany: useFilter('Transportad'),
		product: useFilter('Nome do produto'),
		check: useFilter('Todos'),
		variation: useFilter('Cor: Branco, Tamanho: '),
		delay: useFilter('Dias'),
		noteCustomer: useFilter('Observação do cliente'),
		noteProduction: useFilter('Observação de produção'),
	};

	/*
	 * criar um nova lista de algum componente que vai renderizar a linha personalizada da tabela
	 * a const rows deve ser um array de objetos de algum componente que vai renderizar a linha da tabela
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const rows = map(items, (item, key) => {
		// tslint:disable-next-line: no-console
		// console.log(item);
		return <></>;
	});
	// tslint:disable-next-line: no-console
	// console.log(rows);

	return (
		<div style={{ overflow: 'auto' }}>
			<DataFilter filter={filter} items={items}>
				{(data, filterField) => <Table header={header} body={data} filter={filterField} />}
			</DataFilter>
		</div>
	);
};
