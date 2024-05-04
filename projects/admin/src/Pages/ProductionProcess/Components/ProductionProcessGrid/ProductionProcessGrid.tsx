import React from 'react';

export const ProductionProcessGrid: React.FC = () => {
	return null;
};

// import { ProductionProcess } from '@lab77store/database';
// import { DatabaseServices } from 'Services';

// import { Grid } from 'Components';
// import { map } from 'lodash';
// import { Notifications } from 'Utils';

// const header = ['Nome', 'Tempo', ''];

// interface Props {
// 	selectProcess: (processId: string) => void;
// 	items: { [id: string]: ProductionProcess };
// }

// const onDelete = async (id: string) => {
// 	return DatabaseServices.ProductionProcess.delete(id)
// 		.then(() => {
// 			Notifications.warning('Item excluido com sucesso!');
// 		})
// 		.catch(() => {
// 			Notifications.error('Erro ao tentar excluir o item!');
// 		});
// };

// const printTime = (time: number) => (time % 24 === 0 ? time / 24 + ' Dias' : time + ' Horas');

// export const ProductionProcessGrid: React.FC<Props> = ({ selectProcess, items }) => {
// 	const body = map(items, (process, key) => {
// 		return { id: key, values: [process.name, printTime(process.time)] };
// 	});

// 	return (
// 		<Grid
// 			header={header}
// 			items={body}
// 			onDelete={onDelete}
// 			onEdit={async id => {
// 				selectProcess(id);
// 			}}
// 		/>
// 	);
// };
