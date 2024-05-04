import React from 'react';
export const RawMaterialProduction: React.FC = () => {
	return null;
};

// import { Input, Button, ToggleButton, ProductionMaterials } from 'Components';
// import { Production } from '@lab77store/database';

// import styles from './RawMaterialProduction.module.scss';
// import { cloneDeep } from 'lodash';

// import firebase from 'firebase/app';

// import { useToggle, useComponentDidMount, useSelectFieldOptions } from 'Hooks';

// interface Props {
// 	production?: Production;
// 	// tslint:disable-next-line: no-any
// 	setField: (field: string, value: any) => void;
// }
// export const RawMaterialProduction: React.FC<Props> = ({ production, setField }) => {
// 	const optionsProcess = useSelectFieldOptions('/productionProcesses');
// 	const optionsMaterials = useSelectFieldOptions('/rawMaterials');

// 	const [hasProduction, toggleHasProduction] = useToggle(false);

// 	useComponentDidMount(() => {
// 		const currentliHasProduction = !!production && Object.values(production.materials || {}).length > 0 ? true : false;
// 		toggleHasProduction(currentliHasProduction);
// 	});

// 	const iconPlus = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;
// 	return (
// 		<div className={styles.grayBox}>
// 			<div className="row">
// 				<div className="col-lg-11">
// 					<h3 className="tile-title">Processo de produção</h3>
// 				</div>
// 				<div className="col-lg-1">
// 					<ToggleButton
// 						id="visible"
// 						name="visible"
// 						checked={hasProduction}
// 						large={true}
// 						onChange={() => {
// 							toggleHasProduction();
// 						}}
// 					/>
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col-lg-8">
// 					<Input.Select
// 						id="productionProcessId"
// 						name="production.productionProcessId"
// 						options={[{ label: 'Selecione um valor', value: '' }, ...optionsProcess]}
// 						disabled={!hasProduction}
// 						label="Processo"
// 						required
// 					/>
// 				</div>
// 				<div className="col-lg-4">
// 					<Input.TextHorizontal
// 						type="number"
// 						label="Qtd produzida"
// 						name="production.produce"
// 						id="produce"
// 						disabled={!hasProduction}
// 						required
// 					/>
// 				</div>
// 			</div>

// 			{production &&
// 				Object.keys(production.materials || {}).map(key => (
// 					<ProductionMaterials
// 						key={key}
// 						prefix={`production.materials.${key}`}
// 						setField={setField}
// 						production={production}
// 						disabled={!hasProduction}
// 						options={optionsMaterials}
// 					/>
// 				))}

// 			<div className="row">
// 				<div className="col-lg-12">
// 					<Button
// 						color="primary"
// 						label="Adicionar matéria prima"
// 						type="button"
// 						icon={iconPlus()}
// 						className={styles.btnAddRawMaterial}
// 						disabled={!hasProduction}
// 						onClick={() => {
// 							if (production) {
// 								const key =
// 									firebase
// 										.database()
// 										.ref('/rawMaterials')
// 										.push().key || '';
// 								const listMaterial = cloneDeep(production.materials || {});
// 								listMaterial[key] = { amount: 0, rawMaterialId: '' };
// 								setField('production.materials', listMaterial);
// 							}
// 						}}
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
