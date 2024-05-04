import React from 'react';

export const RawMaterialGrid: React.FC = () => {
	return null;
};

// import { DatabaseServices } from 'Services';
// import { Grid } from 'Components';
// import { useHistory } from 'react-router-dom';
// import { Stock } from '@lab77store/database';
// import { formatMoney } from 'Utils';

// interface Item {
// 	id: string;
// 	name: string;
// 	price: number;
// 	stock: Stock;
// }

// const header = ['Nome', 'Preço', 'Disponível', 'Utilizada', 'Total', ''];

// interface Props {
// 	items: Item[];
// }

// const onDelete = (id: string) => {
// 	return DatabaseServices.RawMaterial.delete(id).catch(() => {
// 		alert('Erro!');
// 	});
// };

// export const RawMaterialGrid: React.FC<Props> = ({ items }) => {
// 	const history = useHistory();

// 	const body = items.map(item => ({
// 		id: item.id,
// 		values: [item.name, formatMoney(item.price), item.stock.free, item.stock.locked, item.stock.total],
// 	}));

// 	return (
// 		<Grid
// 			header={header}
// 			items={body}
// 			onDelete={onDelete}
// 			onEdit={async id => {
// 				history.push(`/rawMaterial/edit/${id}`);
// 			}}
// 		/>
// 	);
// };
