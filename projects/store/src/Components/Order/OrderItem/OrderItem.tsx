import { Image } from '@App/Components';
import { formatMoney } from '@App/Utils';
import { OrderItem as IOrderItem } from '@lab77store/domain';
import React from 'react';
import { OrderItemAttributes } from './OrderItemAttributes';

import styles from './OrderItem.module.scss';
import classNames from 'classnames';

interface Props {
	item: IOrderItem;
	imageSize?: number;
}
export const OrderItem: React.FC<Props> = ({ item, imageSize = 4 }) => (
	<section className={styles.orderItem}>
		<div className="container-fluid g-0 overflow-hidden">
			<div className="row g-0">
				<div className={`col-${imageSize}`}>
					<Image image={item.photo} />
				</div>
				<div className={`col-${12 - imageSize}`}>
					<div className={styles.body}>
						<div className={styles.content}>
							<h4 className={classNames('text-uppercase', styles.title)}>{item.name}</h4>
							<OrderItemAttributes attributes={item.attributes} />
						</div>
						<div className={styles.subtotal}>
							<div className="container-fluid g-0 overflow-hidden">
								<div className="row g-0">
									<div className="col-6">
										<span>Subtotal</span>
									</div>
									<div className="col-6">
										<div className="text-end">{formatMoney(item.price)}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
