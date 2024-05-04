// Essa página é um mockup ----- Implementar e remover esse comentário -----
import React, { useState } from 'react';

import { PageTitle, Grid, Pagination } from 'Components';
import { useHistory } from 'react-router-dom';
import { RouteNames } from 'Routes/RouteNames';

import { usePagination, useUsers } from 'Hooks';
import { Notifications } from 'Utils';
import { UserAdminFilter } from '@lab77store/domain';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const UserList: React.FC = () => {
	const [pagination, goToPage] = usePagination(20);
	const [filter, setFilter] = useState<UserAdminFilter>({ email: '', document: '', uid: '' });
	const users = useUsers(pagination, filter);

	const history = useHistory();

	if (users.error) return <div>failed to load</div>;
	if (users.isLoading) return <div>loading...</div>;

	const list =
		users.data?.items.map(item => ({
			id: item.uid,
			values: [
				item.uid,
				item.personalData.firstName + ' ' + item.personalData.lastName,
				item.personalData.email,
				item.personalData.document,
			],
		})) || [];

	return (
		<>
			<PageTitle title="Usuários" subtitle="Gerencie seus usuários" />
			<div className="row">
				<div className="col-md-12">
					<div className="tile">
						<div className="row">
							<div className="col">
								<h3 className="tile-title">Lista de Usuários </h3>
							</div>
						</div>

						<Grid
							header={['uid', 'Nome', 'Email', 'CPF', '']}
							items={list}
							onDelete={async _id => {
								Notifications.warning('Funcionalidade em construção');
							}}
							onEdit={async id => {
								history.push(RouteNames.user.edit.replace(':id', id));
							}}
							filter={{ fields: [{ name: 'uid' }, undefined, { name: 'email' }, { name: 'document' }], filter, setFilter }}
						/>

						<div className="row">
							<div className="col">
								{users.data && <Pagination page={pagination.page} goToPage={goToPage} lastPage={users.data.lastPage} />}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
