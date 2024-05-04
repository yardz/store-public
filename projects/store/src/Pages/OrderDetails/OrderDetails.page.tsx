import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import { authSelector } from '@App/Store/Reducers/AuthReducer';
import { OrderDysplay, RestrictedContent } from '@App/Components';

import { useOrder } from '@App/Hooks';
import { MyAccountTemplate } from '@App/Template/MyAccountTemplate';

import styles from './OrderDetails.module.scss';

export interface OrderDetailsPageProps {
	orderId: string;
}
export const OrderDetailsPage: React.FC<OrderDetailsPageProps> = ({ orderId }) => {
	const auth = useSelector(authSelector.auth);
	const order = useOrder({ orderId, ready: auth === 'authenticated' });
	const loadingOrders = !order.error && !order.data;
	return (
		<RestrictedContent loading={loadingOrders}>
			<Head>
				<meta name="description" content="Detalhes do pedido" data-rh="true" />
			</Head>
			<MyAccountTemplate title="Detalhes do pedido" linkBack="/minha-conta/meus-pedidos">
				{order.data && (
					<section className={styles.OrderDetailsPage}>
						<div className={styles.space}>
							<section className={styles.orderCode}>
								<h4 className={styles.code}>
									<OrderDysplay.Code order={order.data} />
								</h4>
								<OrderDysplay.Date order={order.data} />
							</section>
						</div>
						<div className={styles.space}>
							<h4 className={styles.orderStatus}>
								<OrderDysplay.Status status={order.data.status} />
							</h4>
						</div>
						<div className={styles.space}>
							{order.data.items.map((item, key) => (
								<OrderDysplay.Item key={key} item={item} />
							))}
						</div>
						<div className={styles.space}>
							<OrderDysplay.Resume order={order.data} />
						</div>
						<div className={styles.space}>
							<OrderDysplay.Payment order={order.data} />
						</div>
						<div className={styles.space}>
							<OrderDysplay.Delivery delivery={order.data.delivery} tackButton />
						</div>

						<div className={styles.space}>
							<OrderDysplay.Note order={order.data} />
						</div>
					</section>
				)}
			</MyAccountTemplate>
		</RestrictedContent>
	);
};
