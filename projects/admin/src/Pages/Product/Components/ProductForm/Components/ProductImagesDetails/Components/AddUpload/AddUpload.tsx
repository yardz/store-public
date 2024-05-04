import React from 'react';

export const AddUpload: React.FC = () => {
	return null;
};

// import React, { useEffect } from 'react';
// import { useFormikContext } from 'formik';
// import { Product } from '@lab77store/database';
// import { UploadImage } from 'Utils/';
// import { cloneDeep, get, map, flatten, unset, compact, set } from 'lodash';
// import { Button } from 'Components';
// import firebase from 'firebase/app';

// const newUpload: UploadImage = {
// 	desktop: '',
// 	desktopAlt: '',
// 	mobile: '',
// 	mobileAlt: '',
// 	field: '',
// };

// interface Props {
// 	prefix: string;
// }

// export const AddUpload: React.FC<Props> = props => {
// 	const { values, setFieldValue } = useFormikContext<{ product: Product; uploads: UploadImage[] }>();

// 	const addUploadProps = () => {
// 		const key =
// 			firebase
// 				.database()
// 				.ref('/products')
// 				.push().key || '';

// 		const uploads = cloneDeep(values.uploads);
// 		uploads.push({
// 			desktop: '',
// 			desktopAlt: '',
// 			mobile: '',
// 			mobileAlt: '',
// 			field: `${props.prefix}.${key}`,
// 		});

// 		setFieldValue('uploads', uploads);
// 		setFieldValue(`${props.prefix}.${key}`, { desktop: {}, mobile: {} });
// 	};

// 	return (
// 		<>
// 			<Button label="Adicionar" icon={<i className="fa fa-plus" aria-hidden="true" />} color="primary" onClick={() => addUploadProps()} />
// 		</>
// 	);
// };
