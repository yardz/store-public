import React from 'react';
import { Order } from '@lab77store/domain';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import styles from './OrderCode.module.scss';
import Link from 'next/link';

dayjs.extend(utc);

interface Props {
	order: Order;
	link?: boolean;
}
export const OrderCode: React.FC<Props> = ({ order, link }) => {
	let code = <>#{order._id}</>;
	if (link) {
		code = (
			<Link href={`/minha-conta/meus-pedidos/${order._id}`}>
				<a className={styles.link}>#{order._id}</a>
			</Link>
		);
	}
	return <>Pedido {code}</>;
};
