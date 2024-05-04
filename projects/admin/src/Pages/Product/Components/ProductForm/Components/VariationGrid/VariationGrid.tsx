import React from 'react';
export const VariationGrid: React.FC = () => {
	return null;
};

// import { FirebaseField, Grid } from 'Components';
// import { ProductAttribute, ProductVariationsConfig, Variation } from '@lab77store/database';
// import { filter, map } from 'lodash';
// import { FirebaseArray } from 'Types';
// interface Props {
// 	variationsConfig: ProductVariationsConfig;
// 	variations: FirebaseArray<Variation>;
// 	edit: (variationId: string) => Promise<void>;
// }

// const getFields = (attributes: ProductAttribute[], variation: Variation): string[] => {
// 	return attributes.map(attr => variation.attributes[attr.attribute].value);
// };

// const onDelete = async (id: string): Promise<void> => {
// 	console.log('onDelete', id);
// };

// export const VariationGrid: React.FC<Props> = ({ variationsConfig, variations, edit }) => {
// 	const displayFields = filter(variationsConfig.attributes, attr => !!attr.viewReport);

// 	const fieldsInit: string[] = ['Nome'];
// 	const fieldsCustom = displayFields.map(attr => <FirebaseField path={`attributes/${attr.attribute}/name`} />);
// 	const fieldsEnd: string[] = ['Qtd. disponivel', 'Qtd. utilizada', 'Qtd. total', 'Preço adicional', ''];

// 	const columns = [...fieldsInit, ...fieldsCustom, ...fieldsEnd];

// 	const body = map(variations, (variation, id) => ({
// 		id,
// 		values: [
// 			variation.name,
// 			...getFields(displayFields, variation),
// 			variation.stock.free,
// 			variation.stock.locked,
// 			variation.stock.total,
// 			variation.additionalPrice,
// 		],
// 	}));

// 	return (
// 		<div className="tile">
// 			<div className="row">
// 				<div className="col">
// 					<h3 className="tile-title">Variações</h3>
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col">
// 					<Grid header={columns} items={body} onDelete={onDelete} onEdit={edit} />
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
