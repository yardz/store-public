import React from 'react';

import { Table, DataFilter } from 'Components';
import { map } from 'lodash';
import { useFilter } from 'Hooks';

const header = ['Receptor', 'Metodo frete', 'Transportadora', 'Nome do Produto', 'Check', 'Variação'];

interface Props {
	// tslint:disable-next-line: no-any
	items: { [id: string]: any }; // ainda nao tem um tipo definido
}

export const StampingGrid: React.FC<Props> = ({ items }) => {
	//nomes temporarios, será necessário definir os nomes corretamente após o Bruno criar as interfaces
	const filter = {
		receiver: useFilter('Receptor'),
		freight: useFilter('Frete'),
		shippingCompany: useFilter('Transportad'),
		product: useFilter('Nome do produto'),
		check: useFilter('Todos'),
		variation: useFilter('Cor: Branco, Tamanho'),
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
