import React from 'react';
// import { Input } from 'Components';
// import { Production } from '@lab77store/database';

// import { cloneDeep, unset } from 'lodash';

interface Props {
	prefix: string; // production.materials.XPTO
	// production: Production;
	disabled?: boolean;
	options: { label: string; value: string }[];
	// tslint:disable-next-line: no-any
	setField: (field: string, value: any) => void;
}

export const ProductionMaterials: React.FC<Props> = () => {
	return null;
};

// export const ProductionMaterials: React.FC<Props> = ({ prefix, setField, production, options, disabled }) => {
// 	return (
// 		<div className="row">
// 			<div className="col-lg-8">
// 				<Input.SelectHorizontal
// 					label="Matéria prima"
// 					name={`${prefix}.rawMaterialId`}
// 					placeholder="Selecione uma matéria prima"
// 					options={options}
// 				/>
// 			</div>
// 			<div className="col-lg-3">
// 				<Input.TextHorizontal type="number" label="Qtd gasta" name={`${prefix}.amount`} disabled={disabled} required />
// 			</div>
// 			<div className="col-lg-1">
// 				<br />
// 				<button
// 					className="btn btn-danger"
// 					type="button"
// 					onClick={() => {
// 						if (production) {
// 							const prefixSplit = prefix.split('.');
// 							const key = prefixSplit.pop() || '';
// 							const materialsPrefix = prefixSplit.join('.');
// 							const listMaterial = cloneDeep(production.materials);
// 							unset(listMaterial, key);
// 							setField(materialsPrefix, listMaterial);
// 						}
// 					}}>
// 					<i className="fa fa-trash" />
// 				</button>
// 			</div>
// 		</div>
// 	);
// };
