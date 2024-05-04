import React from 'react';
export const AtributeGrid: React.FC = () => {
	return null;
};

// import { Attribute, ProductAttribute, ProductVariationsConfig } from '@lab77store/database';
// import { Button } from 'Components';
// import firebase from 'firebase/app';
// import { cloneDeep } from 'lodash';
// import { useObjectVal } from 'react-firebase-hooks/database';
// import { Notifications } from 'Utils';

// import { AttributeField } from './AttributeField';

// import styles from './AtributeGrid.module.scss';

// interface Props {
// 	prefix: string;
// 	variationsConfig: ProductVariationsConfig;
// 	// tslint:disable-next-line: no-any
// 	setValues: (field: string, value: any, shouldValidate?: boolean) => void;
// }

// export const AtributeGrid: React.FC<Props> = ({ prefix, variationsConfig, setValues }) => {
// 	const [attributes, , error] = useObjectVal<{ [id: string]: Attribute }>(firebase.database().ref('/attributes'));
// 	if (!!error) {
// 		Notifications.error(error.message);
// 	}
// 	if (!attributes) {
// 		return null;
// 	}

// 	return (
// 		<div className="row">
// 			<div className="col-lg-12">
// 				<div className="row">
// 					{Object.keys(variationsConfig.attributes).map(key => (
// 						<div className="col-lg-12" key={key}>
// 							<AttributeField
// 								prefix={`${prefix}.attributes.${key}`}
// 								attributes={attributes}
// 								attributeSelected={variationsConfig.attributes[key].attribute}
// 								onDelete={() => {
// 									const attr = cloneDeep(variationsConfig.attributes);
// 									delete attr[key];
// 									setValues(`${prefix}.attributes`, attr);
// 								}}
// 							/>
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 			<div className="col-lg-12">
// 				<Button
// 					color="primary"
// 					label="Adicionar mais atributos"
// 					type="button"
// 					className={styles.btnAddVariations}
// 					onClick={() => {
// 						const key =
// 							firebase
// 								.database()
// 								.ref('/products')
// 								.push().key || '';
// 						const newAttr: ProductAttribute = {
// 							attribute: '',
// 							values: {},
// 							viewReport: false,
// 						};
// 						setValues(`${prefix}.attributes.${key}`, newAttr);
// 					}}
// 				/>
// 			</div>
// 		</div>
// 	);
// };
