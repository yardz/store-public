import React from 'react';
import { PageTitle } from 'Components';
import { UserForm } from '../Components';
import { useParams } from 'react-router-dom';
import { useUser } from 'Hooks';

export const UserEdit: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const user = useUser(id);

	if (user.error) return <div>failed to load</div>;
	if (user.isLoading) return <div>loading...</div>;

	return (
		<>
			<PageTitle title="Usuário" subtitle="Edite as informações dos usuários cadastrados no sistema" />
			<div className="row">
				<div className="col-md-12">{user.data ? <UserForm initialValues={user.data} id={id} /> : ''}</div>
			</div>
		</>
	);
};
