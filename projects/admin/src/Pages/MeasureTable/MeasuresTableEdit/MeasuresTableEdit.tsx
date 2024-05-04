import React from 'react';
export const MeasuresTableEdit: React.FC = () => {
	return null;
};

// import firebase from 'firebase/app';

// import { PageTitle } from 'Components';
// import { MeasuresTable } from '@lab77store/database';

// import { MeasuresTableForm } from '../Components/MeasuresTableForm';
// import { useObjectVal } from 'react-firebase-hooks/database';
// import { useParams } from 'react-router-dom';

// export const MeasuresTableEdit: React.FC = () => {
// 	const { id } = useParams();

// 	const [selectedMeasure, loading, error] = useObjectVal<MeasuresTable>(
// 		firebase
// 			.database()
// 			.ref('/measuresTable')
// 			.child(id),
// 	);

// 	if (loading || selectedMeasure === undefined) {
// 		return null;
// 	}
// 	if (error) {
// 		// console.log({ error });
// 		return null;
// 	}

// 	return (
// 		<>
// 			<PageTitle title="Tabela de Medidas" subtitle="Adicione e gerencie suas tabelas de medidas" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="tile">
// 						<MeasuresTableForm initialValues={selectedMeasure} id={id} />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
