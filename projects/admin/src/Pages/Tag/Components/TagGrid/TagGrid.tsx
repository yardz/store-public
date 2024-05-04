import React from 'react';

export const TagGrid: React.FC = () => {
	return null;
};

// import { Tag } from '@lab77store/database';
// import { DatabaseServices } from 'Services';

// import { Grid } from 'Components';
// import { map } from 'lodash';

// const header = ['Nome', ''];

// interface Props {
// 	selectTag: (tagId: string) => void;
// 	items: { [id: string]: Tag };
// }

// const onDelete = (id: string) => {
// 	return DatabaseServices.Tag.delete(id).catch(() => {
// 		alert('Erro!');
// 	});
// };

// export const TagGrid: React.FC<Props> = ({ selectTag, items }) => {
// 	const body = map(items, (tag, key) => {
// 		return { id: key, values: [tag.name] };
// 	});

// 	return (
// 		<Grid
// 			header={header}
// 			items={body}
// 			onDelete={onDelete}
// 			onEdit={async id => {
// 				selectTag(id);
// 			}}
// 		/>
// 	);
// };
