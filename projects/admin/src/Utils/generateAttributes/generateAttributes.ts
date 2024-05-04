export const generateAttributes = () => {
	//
};

// import { ProductAttribute, VariationAttribute } from '@lab77store/database';
// import cartesian from 'cartesian';
// import { FirebaseArray } from 'Types';

// type Output = FirebaseArray<VariationAttribute>;

// export const generateAttributes = (productAttributes: FirebaseArray<ProductAttribute>): Output[] => {
// 	const listAttributes = Object.values(productAttributes).map(item =>
// 		Object.values(item.values).map((value: string) => ({
// 			attribute: item.attribute,
// 			value,
// 		})),
// 	);
// 	const cartesianAttributes: VariationAttribute[][] = cartesian(listAttributes);
// 	const attributes = cartesianAttributes.map(variationAttrs => {
// 		const attribute: Output = {};
// 		variationAttrs.forEach(attr => (attribute[attr.attribute] = attr));
// 		return attribute;
// 	});
// 	return attributes;
// };
