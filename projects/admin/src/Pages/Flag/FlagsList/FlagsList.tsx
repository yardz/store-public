import React from 'react';
export const FlagsList: React.FC = () => {
	return null;
};

// import firebase from 'firebase/app';

// import { PageTitle, Button } from 'Components';
// import { FlagGrid } from '../Components';
// import { Flag } from '@lab77store/database';
// import { Link } from 'react-router-dom';

// import { RouteNames } from 'Routes/RouteNames';
// import { useObjectVal } from 'react-firebase-hooks/database';
// import { map } from 'lodash';
// import { FirebaseArray } from 'Types';

// export const FlagsList: React.FC = () => {
// 	const [flags, loading, error] = useObjectVal<FirebaseArray<Flag>>(firebase.database().ref('/flags'));
// 	if (loading || !!error) {
// 		// console.log({ error });
// 		return null;
// 	}

// 	const items = map(flags, (item, key) => {
// 		return {
// 			id: key,
// 			...item,
// 		};
// 	});

// 	const icon = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;

// 	return (
// 		<>
// 			<PageTitle title="Banderinhas" subtitle="Adicione e gerencie suas banderinhas" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="tile">
// 						<div className="row">
// 							<div className="col">
// 								<h3 className="tile-title">Lista de Banderinhas</h3>
// 							</div>
// 							<div className="col text-right">
// 								<Link to={RouteNames.flag.add}>
// 									<Button label="Cadastrar" icon={icon()} color="primary">
// 										Cadastrar
// 									</Button>
// 								</Link>
// 							</div>
// 						</div>
// 						<FlagGrid items={items} />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
