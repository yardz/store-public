import React from 'react';
export const Attribute: React.FC = () => {
	return null;
};

// import firebase from 'firebase/app';

// import { PageTitle, Button } from 'Components';
// import { useState } from 'Hooks';
// import { AttributeForm } from './Components/AttributeForm';
// // import { Attribute as IAttributte } from '@lab77store/database';

// import { AttributeGrid } from './Components/AtributeGrid';
// import { useObjectVal } from 'react-firebase-hooks/database';
// import { Notifications } from 'Utils';

// const initialValues = {
// 	name: '',
// 	values: {},
// };

// export const Attribute: React.FC = () => {
// 	const [form, setForm] = useState({ open: false, selected: '' });

// 	const [attibuteList, , error] = useObjectVal<{ [id: string]: IAttributte }>(firebase.database().ref('/attributes'));

// 	if (!!error) {
// 		Notifications.error(error.message);
// 		return null;
// 	}

// 	const selectedAttribute = attibuteList && !!form.selected ? attibuteList[form.selected] : initialValues;
// 	const icon = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;

// 	return (
// 		<>
// 			<PageTitle title="Atributos" subtitle="Adicione e gerencie seus atributos" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="tile">
// 						<div className="row">
// 							<div className="col">
// 								<h3 className="tile-title">Lista de Atributos</h3>
// 							</div>
// 							<div className="col text-right">
// 								<Button
// 									label="Cadastrar"
// 									icon={icon()}
// 									color="primary"
// 									onClick={() => {
// 										setForm({ open: true, selected: '' });
// 									}}>
// 									Cadastrar
// 								</Button>
// 							</div>
// 						</div>
// 						<AttributeForm
// 							id={form.selected}
// 							initialValues={selectedAttribute}
// 							showModal={form.open}
// 							closeModal={() => {
// 								setForm({ open: false, selected: '' });
// 							}}
// 						/>
// 						<AttributeGrid
// 							items={attibuteList || {}}
// 							selectAttribute={id => {
// 								setForm({ open: true, selected: id });
// 							}}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
