import React from 'react';
export const VariationProduction: React.FC = () => {
	return null;
};

// import { ProductionProcess, Variation } from '@lab77store/database';

// import { cloneDeep } from 'lodash';

// import firebase from 'firebase/app';

// import { useObjectVal } from 'react-firebase-hooks/database';
// import { useSelectFieldOptions } from 'Hooks';
// import { Button, Input, ProductionMaterials } from 'Components';
// import { useFormikContext } from 'formik';
// interface Props {
// 	productionProcessId?: string;
// 	prefix: string;
// }

// export const VariationProduction: React.FC<Props> = ({ productionProcessId, prefix }) => {
// 	const [process] = useObjectVal<ProductionProcess>(
// 		productionProcessId ? firebase.database().ref(`/productionProcesses/${productionProcessId}`) : null,
// 	);
// 	const optionsMaterials = useSelectFieldOptions('/rawMaterials');
// 	const {
// 		values: { production },
// 		setFieldValue,
// 	} = useFormikContext<Variation>();

// 	const iconPlus = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;
// 	return (
// 		<div>
// 			<div className="row">
// 				<div className="col">
// 					<h3 className="tile-title">Produção de produto</h3>
// 				</div>
// 			</div>
// 			<div className="row">
// 				<div className="col-lg-8">
// 					<div className="form-group row">
// 						<div className="col">
// 							<label>Processo de produção</label>
// 							<input className="form-control" disabled value={(process && process.name) || ''} />
// 						</div>
// 					</div>
// 				</div>
// 				<div className="col-lg-4">
// 					<Input.TextHorizontal
// 						type="number"
// 						label="Qtd produzida"
// 						name={`${prefix}.production.produce`}
// 						disabled={!productionProcessId}
// 						required
// 					/>
// 				</div>
// 			</div>

// 			{production &&
// 				Object.keys(production.materials || {}).map(key => (
// 					<ProductionMaterials
// 						key={key}
// 						prefix={`${prefix}.production.materials.${key}`}
// 						setField={setFieldValue}
// 						production={production}
// 						disabled={!productionProcessId}
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
// 						disabled={!productionProcessId}
// 						onClick={() => {
// 							if (production) {
// 								const key =
// 									firebase
// 										.database()
// 										.ref('/variations')
// 										.push().key || `${Object.values(production.materials || {}).length}`;
// 								const listMaterial = cloneDeep(production.materials || {});
// 								listMaterial[key] = { amount: 0, rawMaterialId: '' };
// 								setFieldValue(`${prefix}.production.materials`, listMaterial);
// 							}
// 						}}
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
