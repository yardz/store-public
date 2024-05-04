import React from 'react';
export const AttributeField: React.FC = () => {
	return null;
};

// import { Input } from 'Components';
// import { Attribute } from '@lab77store/database';

// import { map } from 'lodash';
// import { FirebaseArray } from 'Types';

// import styles from './AttributeField.module.scss';

// interface Props {
// 	prefix: string;
// 	attributes?: FirebaseArray<Attribute>;
// 	disabled?: boolean;
// 	onDelete: () => void;
// 	attributeSelected: string;
// }

// export const AttributeField: React.FC<Props> = ({ prefix, attributes, attributeSelected, onDelete }) => {
// 	const attributeOption = map(attributes, (attribute, attributeId) => ({ label: attribute.name, value: attributeId }));
// 	const attributeValuesOption =
// 		!!attributeSelected && !!attributes ? map(attributes[attributeSelected].values, (label, value) => ({ label: label.value, value })) : [];

// 	return (
// 		<div className="row">
// 			<div className="col-lg-4">
// 				<Input.SelectHorizontal
// 					label="Atributos"
// 					placeholder="Atributo"
// 					id={`${prefix}.attribute`}
// 					name={`${prefix}.attribute`}
// 					options={attributeOption}
// 				/>
// 			</div>
// 			<div className="col-lg-4">
// 				<Input.SelectHorizontal
// 					label="Valores"
// 					placeholder="Insira  valores"
// 					id={`${prefix}.values`}
// 					name={`${prefix}.values`}
// 					options={attributeValuesOption}
// 					multiple
// 				/>
// 			</div>
// 			<div className="col-lg-2">
// 				<Input.Toggle id={`${prefix}.viewReport`} name={`${prefix}.viewReport`} label={<>&nbsp;</>} large={true} />
// 			</div>
// 			<div className="col-lg-2">
// 				<div className="form-group">
// 					<label>&nbsp;</label>
// 					<br />
// 					<button
// 						className={styles.iconButton}
// 						onClick={() => {
// 							onDelete();
// 						}}>
// 						<i className="fa fa-trash" />
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
