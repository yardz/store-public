import { OrderCode } from './OrderCode';
import { OrderDate } from './OrderDate';
import { OrderDelivery } from './OrderDelivery';
import { OrderDeliveryMethod } from './OrderDeliveryMethod';
import { OrderItem } from './OrderItem';
import { OrderNote } from './OrderNote';
import { OrderPayment } from './OrderPayment';
import { OrderResume } from './OrderResume';
import { OrderStatus } from './OrderStatus';

export const OrderDysplay = {
	Item: OrderItem,
	Code: OrderCode,
	Date: OrderDate,
	Delivery: OrderDelivery,
	DeliveryMethod: OrderDeliveryMethod,
	Note: OrderNote,
	Payment: OrderPayment,
	Resume: OrderResume,
	Status: OrderStatus,
};
