import React from 'react';

export const AddCategoryUpload: React.FC = () => {
	return null;
};

// import React, { useEffect } from 'react';
// import { useFormikContext } from 'formik';
// import { Product } from '@lab77store/database';
// import { UploadImage } from 'Utils/';
// import { cloneDeep, get, map, flatten, unset, compact, set } from 'lodash';

// const newUpload: UploadImage = {
// 	desktop: '',
// 	desktopAlt: '',
// 	mobile: '',
// 	mobileAlt: '',
// 	field: '',
// };

// interface Props {
// 	prefix: string;
// 	categories: string;
// }

// export const AddCategoryUpload: React.FC<Props> = props => {
// 	const { values, setFieldValue } = useFormikContext<{ product: Product; uploads: UploadImage[] }>();
// 	useEffect(() => {
// 		const categories: string[] = map(get(values, props.categories), i => i);
// 		const uploads = values.uploads.map(i => i.field).filter(i => i.includes(props.prefix));
// 		const categoriesFields = flatten(
// 			categories.map(category => [`${props.prefix}.${category}.cover`, `${props.prefix}.${category}.hover`]),
// 		);
// 		let update = false;
// 		let itens = cloneDeep(values.uploads);
// 		const productImage = { product: cloneDeep(values.product) };
// 		uploads.forEach(item => {
// 			if (!categoriesFields.includes(item)) {
// 				update = true;
// 				unset(productImage, item);
// 				const index = itens.findIndex(i => i.field === item);
// 				if (index >= 0) {
// 					unset(itens, index);
// 					itens = compact(itens);
// 				}
// 			}
// 		});
// 		categoriesFields.forEach(item => {
// 			if (!uploads.includes(item)) {
// 				update = true;
// 				itens.push({ ...cloneDeep(newUpload), field: item });
// 				set(productImage, item, { desktop: {}, mobile: {} });
// 			}
// 		});
// 		if (update) {
// 			setFieldValue('product', productImage.product);
// 			setFieldValue('uploads', itens);
// 		}
// 	}, [setFieldValue, props, values]);

// 	return null;
// };
