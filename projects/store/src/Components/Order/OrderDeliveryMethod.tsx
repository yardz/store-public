import React from 'react';
import { Order } from '@lab77store/domain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';

import { OrderSectionTitle } from './OrderSectionTitle';

import styles from './OrderDeliveryMethod.module.scss';

interface Props {
	order: Order;
}
export const OrderDeliveryMethod: React.FC<Props> = ({ order }) => (
	<section className={styles.OrderDeliveryMethod}>
		<OrderSectionTitle title="Transportadora" />

		<div className="container-fluid g-0 overflow-hidden">
			<div className="row">
				<div className="col">
					<div className={styles.content}>
						<div className={styles.icon}>
							<FontAwesomeIcon icon={faBox} />
						</div>
						<div className={styles.text}>
							<div className="text-uppercase">{order.delivery.method}</div>
							<div>
								Entrega em até {order.delivery.deliveryTime} {order.delivery.deliveryTime <= 1 ? 'dia útil' : 'dias úteis'}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
