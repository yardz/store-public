import React from 'react';

export const SaleEdit: React.FC = () => {
	return null;
};

// import firebase from 'firebase/app';

// import { PageTitle } from 'Components';
// import { User } from '@lab77store/database';

// import { SaleForm } from '../Components';
// import { useObjectVal } from 'react-firebase-hooks/database';
// import { useParams } from 'react-router-dom';

// export const SaleEdit: React.FC = () => {
// 	const { id } = useParams();

// 	const [selectedSale, loading, error] = useObjectVal<User>(
// 		firebase
// 			.database()
// 			.ref('/users')
// 			.child(id),
// 	);

// 	if (loading || selectedSale === undefined || !!error) {
// 		// console.log({ error });
// 		return null;
// 	}

// 	return (
// 		<>
// 			<PageTitle title="Detalhes da venda" subtitle="Visualize as informações da venda" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<SaleForm initialValues={selectedSale} id={id} />
// 				</div>
// 			</div>
// 		</>
// 	);
// };
