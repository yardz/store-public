import React from 'react';
export const BuyedProductGrid: React.FC = () => {
	return null;
};

// import { DatabaseServices } from 'Services';
// import { Grid } from 'Components';
// // import { useHistory } from 'react-router-dom';
// interface Item {
// 	id: string;
// 	productName: string;
// 	variation: string;
// 	value: string;
// }

// const header = ['Produto', 'Variação', 'Valor', ''];

// interface Props {
// 	items: Item[];
// }

// const onDelete = (id: string) => {
// 	return DatabaseServices.Customer.delete(id).catch(() => {
// 		alert('Erro!');
// 	});
// };

// export const BuyedProductGrid: React.FC<Props> = ({ items }) => {
// 	// const history = useHistory();

// 	// const body = items.map(item => ({
// 	// 	id: item.id,
// 	// 	values: [item.name],
// 	// }));

// 	return <Grid header={header} items={[]} onDelete={onDelete} onEdit={async id => {}} />;
// };
