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
	'Atraso',
	'Observação do cliente',
	'Observação de produção',
];

interface Props {
	// tslint:disable-next-line: no-any
	items: { [id: string]: any }; // ainda nao tem um tipo definido
}

export const PrintingGrid: React.FC<Props> = ({ items }) => {
	//nomes temporarios, será necessário definir os nomes corretamente após o Bruno criar as interfaces
	const filter = {
		process: useFilter('Todos', [
			{ value: 'embalar', label: 'Embalar' },
			{ value: 'enviar', label: 'Enviar' },
			{ value: 'bling', label: 'Enviar para o bling' },
		]),
		orderNumber: useFilter('ID'),
		originSale: useFilter('Origem'),
		dateSale: useFilter('Data'),
		typeOrder: useFilter('Todos', [
			{ value: 'com', label: 'Com produção' },
			{ value: 'sem', label: 'Sem produção' },
		]),
		buyer: useFilter('Comprador'),
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
