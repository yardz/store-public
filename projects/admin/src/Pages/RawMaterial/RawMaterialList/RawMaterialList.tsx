import React from 'react';
export const RawMaterialList: React.FC = () => {
	return null;
};

// import firebase from 'firebase/app';

// import { PageTitle, Button } from 'Components';
// import { RawMaterialGrid } from '../Components';
// import { RawMaterial } from '@lab77store/database';
// import { Link } from 'react-router-dom';

// import { RouteNames } from 'Routes/RouteNames';
// import { useObjectVal } from 'react-firebase-hooks/database';
// import { map } from 'lodash';
// import { FirebaseArray } from 'Types';

// export const RawMaterialList: React.FC = () => {
// 	const [rowMaterial, loading, error] = useObjectVal<FirebaseArray<RawMaterial>>(firebase.database().ref('/rawMaterials'));

// 	if (loading || error) {
// 		return null;
// 	}

// 	const items = map(rowMaterial, (item, key) => {
// 		return {
// 			id: key,
// 			...item,
// 		};
// 	});

// 	const icon = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;

// 	return (
// 		<>
// 			<PageTitle title="Matérias Primas" subtitle="Adicione e gerencie suas matérias primas" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="tile">
// 						<div className="row">
// 							<div className="col">
// 								<h3 className="tile-title">Lista de Matérias Primas</h3>
// 							</div>
// 							<div className="col text-right">
// 								<Link to={RouteNames.rawMaterial.add}>
// 									<Button label="Cadastrar" icon={icon()} color="primary">
// 										Cadastrar
// 									</Button>
// 								</Link>
// 							</div>
// 						</div>
// 						<RawMaterialGrid items={items} />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
