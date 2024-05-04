import React from 'react';

export const CollectionGrid: React.FC = () => {
	return null;
};

// import { DatabaseServices } from 'Services';
// import { Grid } from 'Components';
// import { useHistory } from 'react-router-dom';

// interface Item {
// 	id: string;
// 	name: string;
// }

// const header = ['Coleções Cadastradas', ''];

// interface Props {
// 	items: Item[];
// }

// const onDelete = (id: string) => {
// 	return DatabaseServices.Collection.delete(id)
// 		.then()
// 		.catch(() => {
// 			alert('Erro!');
// 		});
// };

// export const CollectionGrid: React.FC<Props> = ({ items }) => {
// 	const history = useHistory();

// 	const body = items.map(item => ({
// 		id: item.id,
// 		values: [item.name],
// 	}));

// 	return (
// 		<Grid
// 			header={header}
// 			items={body}
// 			onDelete={onDelete}
// 			onEdit={async id => {
// 				history.push(`/collection/edit/${id}`);
// 			}}
// 		/>
// 	);
// };
