import React from 'react';
export const MeasuresTableList: React.FC = () => {
	return null;
};

// import firebase from 'firebase/app';

// import { PageTitle, Button } from 'Components';
// import { MeasuresTableGrid } from '../Components';
// import { MeasuresTable } from '@lab77store/database';
// import { Link } from 'react-router-dom';

// import { RouteNames } from 'Routes/RouteNames';
// import { useObjectVal } from 'react-firebase-hooks/database';
// import { map } from 'lodash';
// import { FirebaseArray } from 'Types';

// export const MeasuresTableList: React.FC = () => {
// 	const [measure, loading, error] = useObjectVal<FirebaseArray<MeasuresTable>>(firebase.database().ref('/measuresTable'));

// 	if (loading || error) {
// 		// console.log({ error });
// 		return null;
// 	}

// 	const items = map(measure, (item, key) => {
// 		return {
// 			id: key,
// 			...item,
// 		};
// 	});

// 	const icon = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;

// 	return (
// 		<>
// 			<PageTitle title="Tabela de Medidas" subtitle="Adicione e gerencie suas tabelas de medidas" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="tile">
// 						<div className="row">
// 							<div className="col">
// 								<h3 className="tile-title">Lista de Tabelas de Medidas</h3>
// 							</div>
// 							<div className="col text-right">
// 								<Link to={RouteNames.measuresTable.add}>
// 									<Button label="Cadastrar" icon={icon()} color="primary">
// 										Cadastrar
// 									</Button>
// 								</Link>
// 							</div>
// 						</div>
// 						<MeasuresTableGrid items={items} />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
