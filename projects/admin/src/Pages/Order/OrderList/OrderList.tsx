import React, { useState } from 'react';

import { PageTitle, Grid, Pagination } from 'Components';

import { usePagination, useOrders } from 'Hooks';
import { Notifications } from 'Utils';
import { OrderAdminListFilter } from '@lab77store/domain';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const OrderList: React.FC = () => {
	const [pagination, goToPage] = usePagination(20);
	const [filter, setFilter] = useState<OrderAdminListFilter>({ orderId: '', legacyId: '', purshaseDate: '' });
	const orders = useOrders(pagination, filter);

	if (orders.error) return <div>failed to load</div>;
	if (orders.isLoading) return <div>loading...</div>;

	const list =
		orders.data?.items.map(item => ({
			id: item._id,
			values: [item._id, item.legacyId, item.client.name, item.client.email, item.cupon, dayjs(item.createdAt).format('DD/MM/YYYY')],
		})) || [];

	return (
		<>
			<PageTitle title="Produtos" subtitle="Adicione e seus produtos" />
			<div className="row">
				<div className="col-md-12">
					<div className="tile">
						<div className="row">
							<div className="col">
								<h3 className="tile-title">Lista de Pedidos</h3>
							</div>
						</div>
						<Grid
							header={['Id', 'Legacy Id', 'Nome', 'Email', 'Cupom', 'Data da Compra', '']}
							items={list}
							onDelete={async _id => {
								Notifications.warning('Funcionalidade em construção');
							}}
							onEdit={async _id => {
								Notifications.warning('Funcionalidade em construção');
							}}
							filter={{
								fields: [
									{ name: 'orderId' },
									{ name: 'legacyId' },
									undefined,
									undefined,
									undefined,
									{ name: 'purshaseDate', type: 'date' },
								],
								filter,
								setFilter,
							}}
						/>

						<div className="row">
							<div className="col">
								{orders.data && <Pagination page={pagination.page} goToPage={goToPage} lastPage={orders.data.lastPage} />}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
