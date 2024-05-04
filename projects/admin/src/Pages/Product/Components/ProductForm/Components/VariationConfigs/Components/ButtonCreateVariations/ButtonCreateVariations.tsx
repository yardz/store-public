import React from 'react';
export const ButtonCreateVariations: React.FC = () => {
	return null;
};

// import { Product, ProductVariationsConfig, Variation } from '@lab77store/database';
// import { Button } from 'Components';
// import firebase from 'firebase/app';
// import { FirebaseArray } from 'Types';
// import { generateAttributes, generateVariation } from 'Utils';

// import { cloneDeep, isEqual, map, find } from 'lodash';

// import { useFormikContext } from 'formik';

// const hasVariation = (newVariation: Variation, oldVariations: Variation[]): boolean =>
// 	!find(oldVariations, v => isEqual(v.attributes, newVariation.attributes));
// interface Props {
// 	fieldName: string;
// 	variationsConfig: ProductVariationsConfig;
// 	// tslint:disable-next-line: no-any
// 	setValues: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
// }

// export const ButtonCreateVariations: React.FC<Props> = ({ fieldName, variationsConfig, setValues }) => {
// 	const {
// 		values: { product, variations },
// 	} = useFormikContext<{ product: Product; variations: FirebaseArray<Variation> }>();

// 	const createVariations = () => {
// 		const ref = firebase.database().ref('/variations');
// 		const list = map(variations, v => v);
// 		const newVariations: FirebaseArray<Variation> = cloneDeep(variations);
// 		generateAttributes(variationsConfig.attributes)
// 			.map(att => generateVariation(product.productInfo.name, att))
// 			.filter(v => hasVariation(v, list))
// 			.forEach(variation => (newVariations[ref.push().key || ''] = variation));
// 		setValues(`${fieldName}`, newVariations);
// 	};

// 	return (
// 		<div className="row">
// 			<div className="col">
// 				<h3 className="tile-title">Gerar Variações</h3>
// 			</div>
// 			<div className="col text-right">
// 				<Button label="Gerar" icon={<i className="fa fa-plus" aria-hidden="true" />} color="primary" onClick={createVariations} />
// 			</div>
// 		</div>
// 	);
// };
