import React from 'react';
import { Order } from '@lab77store/domain';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

interface Props {
	order: Order;
}
export const OrderDate: React.FC<Props> = ({ order }) => <>Pedido realizado em {dayjs(order.date).format('DD/MM/YYYY')}</>;
