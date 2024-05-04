import React from 'react';
import { Order } from '@lab77store/domain';
import Link from 'next/link';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { formatMoney } from '@App/Utils';
import { OrderDysplay } from '@App/Components/Order';

import { OrderListImages } from './OrderListImages';

import styles from './OrderList.module.scss';

dayjs.extend(utc);

interface Props {
	order: Order;
}
export const OrderListItem: React.FC<Props> = ({ order }) => (
	<Link href={`/minha-conta/meus-pedidos/${order._id}`}>
		<a className={styles.orderItemLink}>
			<section id={`order-${order._id}`} className={styles.orderItemSection}>
				<div className={styles.header}>
					<p className={styles.order}>
						<OrderDysplay.Code order={order} />
					</p>
					<p className={styles.date}>{dayjs(order.date).format('DD/MM/YYYY')}</p>
				</div>
				<div className={styles.orderItemImage}>
					<OrderListImages order={order} limit={4} />
				</div>
				<div className={styles.footer}>
					<OrderDysplay.Status status={order.status} />
					<p className={styles.price}>{formatMoney(order.orderPrice)}</p>
				</div>
			</section>
		</a>
	</Link>
);
