import React from 'react';
export const PreSaleGrid: React.FC = () => {
	return null;
};

// import { Grid } from 'Components';

// import { DatabaseServices } from 'Services';

// import { FirebaseArray } from 'Types';
// import { Variation, VariationPreSale } from '@lab77store/database';
// import { map } from 'lodash';

// const header = ['Nome', 'Vendidas', 'Reservadas', 'Total'];

// interface Props {
// 	variations: FirebaseArray<Variation>;
// 	edit: (variationId: string) => Promise<void>;
// }

// const onDelete = async (id: string) => {
// 	return DatabaseServices.Variation.delete(id).catch(() => {
// 		alert('Erro!');
// 	});
// };

// const getPreSaleFields = (preSale: VariationPreSale | undefined): (number | string)[] => {
// 	if (!preSale) {
// 		return [];
// 	}
// 	return [preSale.stock.free, preSale.stock.locked, preSale.stock.total];
// };
// export const PreSaleGrid: React.FC<Props> = ({ variations, edit }) => {
// 	const body = map(variations, (variation, id) => ({
// 		id,
// 		preSale: !!variation.preSale,
// 		values: [variation.name, ...getPreSaleFields(variation.preSale)],
// 	})).filter(v => v.preSale);

// 	return (
// 		<div className="tile">
// 			<div className="row">
// 				<div className="col">
// 					<h3 className="tile-title">Pré Venda</h3>
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col">
// 					<Grid header={header} items={body} onDelete={onDelete} onEdit={edit} />
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
