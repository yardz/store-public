import React from 'react';
export const RawMaterialEdit: React.FC = () => {
	return null;
};

// import firebase from 'firebase/app';

// import { PageTitle } from 'Components';
// import { RawMaterial } from '@lab77store/database';

// import { RawMaterialForm } from '../Components';
// import { useObjectVal } from 'react-firebase-hooks/database';
// import { useParams } from 'react-router-dom';

// export const RawMaterialEdit: React.FC = () => {
// 	const { id } = useParams();

// 	const [selectedRawMaterial, loading, error] = useObjectVal<RawMaterial>(
// 		firebase
// 			.database()
// 			.ref('/rawMaterials')
// 			.child(id),
// 	);

// 	if (loading || selectedRawMaterial === undefined || !!error) {
// 		// console.log({ error });
// 		return null;
// 	}

// 	return (
// 		<>
// 			<PageTitle title="Matérias primas" subtitle="Adicione e gerencie suas matérias primas" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<RawMaterialForm initialValues={selectedRawMaterial} id={id} />
// 				</div>
// 			</div>
// 		</>
// 	);
// };
