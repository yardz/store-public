import React from 'react';
export const MeasuresTableGrid: React.FC = () => {
	return null;
};

// import { DatabaseServices } from 'Services';
// import { Grid } from 'Components';
// import { Image } from '@lab77store/database';
// import { useHistory } from 'react-router-dom';

// import { getThumb } from 'Utils/getThumb';
// interface Item {
// 	id: string;
// 	name: string;
// 	image: Image;
// }

// const header = ['Imagem', 'Nome', ''];

// interface Props {
// 	items: Item[];
// }

// const onDelete = (id: string) => {
// 	return DatabaseServices.MeasuresTable.delete(id).catch(() => {
// 		alert('Erro!');
// 	});
// };

// export const MeasuresTableGrid: React.FC<Props> = ({ items }) => {
// 	const history = useHistory();

// 	const body = items.map(item => ({
// 		id: item.id,
// 		values: [getThumb(item.image), item.name],
// 	}));

// 	return (
// 		<Grid
// 			header={header}
// 			items={body}
// 			onDelete={onDelete}
// 			onEdit={async id => {
// 				history.push(`/measuresTable/edit/${id}`);
// 			}}
// 		/>
// 	);
// };
