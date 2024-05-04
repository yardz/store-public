import React from 'react';
export const ProductionProcess: React.FC = () => {
	return null;
};

// import firebase from 'firebase/app';

// import { PageTitle, Button } from 'Components';
// import { useState } from 'Hooks';
// import { ProductionProcessForm } from './Components';
// import { ProductionProcess as IProductionProcess } from '@lab77store/database';

// import { ProductionProcessGrid } from './Components/ProductionProcessGrid';
// import { useObjectVal } from 'react-firebase-hooks/database';

// const initialValues: IProductionProcess = {
// 	name: '',
// 	time: 0,
// 	icon: '',
// };

// export const ProductionProcess: React.FC = () => {
// 	const [form, setForm] = useState({ open: false, selected: '' });
// 	const [processList, loading, error] = useObjectVal<{ [id: string]: IProductionProcess }>(firebase.database().ref('/productionProcesses'));

// 	if (loading || error) {
// 		// console.log({ error });
// 		return null;
// 	}

// 	const selectedProcess = processList && !!form.selected ? processList[form.selected] : initialValues;

// 	const icon = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;

// 	return (
// 		<>
// 			<PageTitle title="Processos" subtitle="Adicione e gerencie seus processos" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="tile">
// 						<div className="row">
// 							<div className="col">
// 								<h3 className="tile-title">Lista de processos</h3>
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
// 						<ProductionProcessForm
// 							initialValues={selectedProcess}
// 							id={form.selected}
// 							showModal={form.open}
// 							closeModal={() => {
// 								setForm({ open: false, selected: '' });
// 							}}
// 						/>
// 						<ProductionProcessGrid
// 							selectProcess={id => {
// 								setForm({ open: true, selected: id });
// 							}}
// 							items={processList || {}}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
