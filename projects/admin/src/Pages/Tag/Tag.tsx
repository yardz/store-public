import React from 'react';

export const Tag: React.FC = () => {
	return null;
};

// import firebase from 'firebase/app';

// import { PageTitle, Button } from 'Components';
// import { useState } from 'Hooks';
// import { TagForm } from './Components/TagForm';
// import { Tag as ITag } from '@lab77store/database';

// import { TagGrid } from './Components/TagGrid';
// import { useObjectVal } from 'react-firebase-hooks/database';

// const initialValues: ITag = {
// 	name: '',
// };

// export const Tag: React.FC = () => {
// 	const [form, setForm] = useState({ open: false, selected: '' });
// 	const [tagList, loading, error] = useObjectVal<{ [id: string]: ITag }>(firebase.database().ref('/tags'));

// 	if (loading || error) {
// 		// console.log({ error });
// 		return null;
// 	}

// 	const selectedTag = tagList && !!form.selected ? tagList[form.selected] : initialValues;
// 	const icon = (): JSX.Element => <i className="fa fa-plus" aria-hidden="true" />;

// 	return (
// 		<>
// 			<PageTitle title="Tags" subtitle="Adicione e gerencie suas tags" />
// 			<div className="row">
// 				<div className="col-md-12">
// 					<div className="tile">
// 						<div className="row">
// 							<div className="col">
// 								<h3 className="tile-title">Lista de Tags</h3>
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
// 						<TagForm
// 							initialValues={selectedTag}
// 							showModal={form.open}
// 							id={form.selected}
// 							closeModal={() => {
// 								setForm({ open: false, selected: '' });
// 							}}
// 						/>
// 						<TagGrid
// 							items={tagList || {}}
// 							selectTag={id => {
// 								setForm({ open: true, selected: id });
// 							}}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };
