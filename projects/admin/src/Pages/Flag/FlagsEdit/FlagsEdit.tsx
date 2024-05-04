import React from 'react';
export const FlagsEdit: React.FC = () => {
	return null;
};

// import firebase from 'firebase/app';

// import { PageTitle } from 'Components';
// import { Flag } from '@lab77store/database';

// import { FlagForm } from '../Components';
// import { useObjectVal } from 'react-firebase-hooks/database';
// import { useParams } from 'react-router-dom';

// export const FlagsEdit: React.FC = () => {
// 	const { id } = useParams();

// 	const [selectedFlag, loading, error] = useObjectVal<Flag>(
// 		firebase
// 			.database()
// 			.ref('/flags')
// 			.child(id),
// 	);

// 	if (loading || selectedFlag === undefined || error) {
// 		// console.log({ error });
// 		return null;
// 	}

// 	return (
// 		<>
// 			<PageTitle title="Banderinha" subtitle="Adicione e gerencie suas banderinhas" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="tile">
// 						<FlagForm initialValues={selectedFlag} id={id} />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
