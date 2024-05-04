import React from 'react';
export const SelectProductionProcess: React.FC = () => {
	return null;
};

// import { ProductionProcess } from '@lab77store/database';
// import { Input } from 'Components';
// import firebase from 'firebase/app';
// import { map } from 'lodash';
// import { useObjectVal } from 'react-firebase-hooks/database';
// import { Notifications } from 'Utils/Notifications';

// interface Props {
// 	prefix: string;
// }

// export const SelectProductionProcess: React.FC<Props> = ({ prefix }) => {
// 	const [productionProcess, , error] = useObjectVal<{ [id: string]: ProductionProcess }>(firebase.database().ref('/productionProcesses'));
// 	if (!!error) {
// 		Notifications.error(error.message);
// 	}
// 	if (!productionProcess) {
// 		return null;
// 	}
// 	const productionProcessOption = [
// 		...map(productionProcess, (production, productionProcessId) => ({ label: production.name, value: productionProcessId })),
// 	];

// 	return (
// 		<div className="row">
// 			<div className="col-lg-12">
// 				<h3 className="tile-title">Processo de produção do produto</h3>
// 			</div>
// 			<div className="col-lg-12">
// 				<Input.SelectHorizontal
// 					label="Processo de produção"
// 					placeholder="Selecione o processo"
// 					id=""
// 					name={`${prefix}.productionProcessId`}
// 					options={productionProcessOption}
// 				/>
// 			</div>
// 		</div>
// 	);
// };
