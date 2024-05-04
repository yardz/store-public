import React from 'react';
export const CollectionsList: React.FC = () => {
	return null;
};

// import firebase from 'firebase/app';

// import { PageTitle, Button } from 'Components';
// import { CollectionGrid } from '../Components';
// import { Collection } from '@lab77store/database';
// import { Link } from 'react-router-dom';

// import { RouteNames } from 'Routes/RouteNames';
// import { useObjectVal } from 'react-firebase-hooks/database';
// import { map } from 'lodash';
// import { FirebaseArray } from 'Types';

// export const CollectionsList: React.FC = () => {
// 	const [collections, loading, error] = useObjectVal<FirebaseArray<Collection>>(firebase.database().ref('/collections'));
// 	if (loading || !!error) {
// 		// console.log({ error });
// 		return null;
// 	}
// 	const items = map(collections, (item, key) => {
// 		return {
// 			id: key,
// 			...item,
// 		};
// 	});

// 	const icon = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;

// 	return (
// 		<>
// 			<PageTitle title="Coleções" subtitle="Adicione e gerencie suas coleções" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="tile">
// 						<div className="row">
// 							<div className="col">
// 								<h3 className="tile-title">Lista de Coleções</h3>
// 							</div>
// 							<div className="col text-right">
// 								<Link to={RouteNames.collection.add}>
// 									<Button label="Cadastrar" icon={icon()} color="primary">
// 										Cadastrar
// 									</Button>
// 								</Link>
// 							</div>
// 						</div>
// 						<CollectionGrid items={items} />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
