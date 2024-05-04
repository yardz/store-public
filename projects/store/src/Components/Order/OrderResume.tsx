import React from 'react';
import { Order } from '@lab77store/domain';
import { formatMoney } from '@App/Utils';
import { Price } from '@App/Components';

import styles from './OrderResume.module.scss';
import { OrderSectionTitle } from './OrderSectionTitle';

interface Props {
	order: Order;
}
export const OrderResume: React.FC<Props> = ({ order }) => (
	<section className={styles.OrderResume}>
		<OrderSectionTitle title="Valores" />
		<div className={styles.content}>
			<div className="container-fluid g-0 overflow-hidden">
				<div className="row g-0">
					<div className="col">Produtos:</div>
					<div className="col">
						<div className="text-end">{formatMoney(order.itemsPrice)}</div>
					</div>
				</div>

				<div className="row g-0">
					<div className="col">
						Frete: <br />
						<small>
							{order.delivery.method} (Entrega em até {order.delivery.deliveryTime} dias úteis)
						</small>
					</div>
					<div className="col">
						<div className="text-end">{formatMoney(order.delivery.price)}</div>
					</div>
				</div>

				{order.discountPrice > 0 && (
					<div className="row g-0">
						<div className="col">Desconto:</div>
						<div className="col">
							<div className="text-end">{formatMoney(order.discountPrice)}</div>
						</div>
					</div>
				)}

				<div className="row g-0">
					<div className="col">Total:</div>
					<div className="col">
						<div className="text-end">
							<Price price={order.orderPrice} originalPrice={order.originalOrderPrice} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
