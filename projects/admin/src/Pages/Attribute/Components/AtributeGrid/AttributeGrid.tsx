import React from 'react';

// import { Attribute } from '@lab77store/database';
// import { DatabaseServices } from 'Services';

// import { Grid } from 'Components';
// import { map } from 'lodash';

// const header = ['Nome', 'Valores', ''];

interface Props {
	selectAttribute: (tagId: string) => void;
	// items: { [id: string]: Attribute };
}

export const AttributeGrid: React.FC<Props> = () => {
	return null;
};

// const onDelete = (id: string) => {
// 	return DatabaseServices.Attribute.delete(id).catch(() => {
// 		alert('Erro!');
// 	});
// };

// export const AttributeGrid: React.FC<Props> = ({ selectAttribute, items }) => {
// 	const body = map(items, (attribute, key) => {
// 		return { id: key, values: [attribute.name, map(attribute.values, att => att.value).join(', ')] };
// 	});

// 	return (
// 		<Grid
// 			header={header}
// 			items={body}
// 			onDelete={onDelete}
// 			onEdit={async id => {
// 				selectAttribute(id);
// 			}}
// 		/>
// 	);
// };
