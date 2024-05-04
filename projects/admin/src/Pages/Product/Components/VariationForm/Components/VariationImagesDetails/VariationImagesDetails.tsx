import React from 'react';
export const VariationImagesDetails: React.FC = () => {
	return null;
};

// // import { UploadImage } from 'Utils/';
// import { Button, FirebaseField, ImageUpload } from 'Components';

// import { UploadImage } from 'Utils';
// import { useFormikContext } from 'formik';
// import { Variation } from '@lab77store/database';
// import { get, keys } from 'lodash';
// import { AddUpload } from './Components';

// interface Props {
//     prefix: string;
// }

// export const VariationImagesDetails: React.FC<Props> = ({ prefix }) => {
//     const { values } = useFormikContext<{ variation: Variation; uploads: UploadImage[] }>();
//     const internalImages = keys(get(values, `${prefix}.images.images`));

//     return (
//         <>
//             <div className="row">
//                 <div className="col">
//                     <h3 className="tile-title">Imagens internas</h3>
//                 </div>
//                 <div className="col text-right">
//                     <AddUpload prefix={`${prefix}.images.images`} />
//                 </div>
//             </div>
//             {internalImages.map(field => (
//                 <div key={field}>
//                     <br />
//                     <div className="row">
//                         <div className="col">
//                             <ImageUpload name="uploads" field={`${prefix}.images.images.${field}`} />
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </>
//     );
// };
