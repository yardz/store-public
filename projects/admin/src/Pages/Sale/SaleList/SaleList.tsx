import React from 'react';

export const SaleList: React.FC = () => {
	return null;
};

// // import firebase from 'firebase/app';

// import { PageTitle } from 'Components';
// import { SaleGrid } from '../Components';
// // import { User } from '@lab77store/database';
// // import { Link } from 'react-router-dom';

// // import { RouteNames } from 'Routes/RouteNames';
// // import { useObjectVal } from 'react-firebase-hooks/database';
// // import { map } from 'lodash';

// export const SaleList: React.FC = () => {
// 	// const [customer, loading, error] = useObjectVal<{ [key: string]: User }>(firebase.database().ref('/users'));

// 	// if (loading || error) {
// 	// 	return null;
// 	// }

// 	// const items = map(customer, (item, key) => {
// 	// 	return {
// 	// 		id: key,
// 	// 		...item.personalData,
// 	// 	};
// 	// });

// 	return (
// 		<>
// 			<PageTitle title="Venda" subtitle="Gerencie seus pedidos" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="tile">
// 						<div className="row">
// 							<div className="col">
// 								<h3 className="tile-title">Lista de Vendas</h3>
// 							</div>
// 						</div>
// 						<SaleGrid items={[]} />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
