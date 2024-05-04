import React from 'react';
export const CollectionsEdit: React.FC = () => {
	return null;
};

// import firebase from 'firebase/app';

// import { PageTitle } from 'Components';
// import { Collection } from '@lab77store/database';

// import { CollectionForm } from '../Components';
// import { useObjectVal } from 'react-firebase-hooks/database';
// import { useParams } from 'react-router-dom';

// export const CollectionsEdit: React.FC = () => {
// 	const { id } = useParams();

// 	const [selectedCollection, loading, error] = useObjectVal<Collection>(
// 		firebase
// 			.database()
// 			.ref('/collections')
// 			.child(id),
// 	);

// 	if (loading || selectedCollection === undefined || error) {
// 		// console.log({ error });
// 		return null;
// 	}

// 	return (
// 		<>
// 			<PageTitle title="Coleções" subtitle="Adicione e gerencie suas coleções" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="tile">
// 						<CollectionForm initialValues={selectedCollection} id={id} />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
