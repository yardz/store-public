import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { authSelector } from '@App/Store/Reducers/AuthReducer';
import useSWR from 'swr';
import { getOrders } from '@App/Services/getOrders';
import { OrderListItem } from './OrderListItem';
import { RestrictedContent } from '@App/Components';
import { MyAccountTemplate } from '@App/Template/MyAccountTemplate';

export interface OrderListPageProps {}
export const OrderListPage: React.FC<OrderListPageProps> = () => {
	const perPage = 20;
	const auth = useSelector(authSelector.auth);
	const orderList = useSWR(auth === 'authenticated' ? ['getOrders', perPage] : null, () => getOrders({ pagination: { page: 1, perPage } }));
	const loadingOrders = !orderList.error && !orderList.data;
	return (
		<RestrictedContent loading={loadingOrders}>
			<Head>
				<meta name="description" content="lista de pedidos" data-rh="true" />
			</Head>
			<MyAccountTemplate title="Meus Pedidos" linkBack="/minha-conta">
				{orderList.data?.map(order => (
					<OrderListItem key={order._id} order={order} />
				))}
			</MyAccountTemplate>
		</RestrictedContent>
	);
};
