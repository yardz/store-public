import React from 'react';
import { OrderDelivery as IOrderDelivery } from '@lab77store/domain';
import { Address, Button } from '@App/Components';
import { OrderSectionTitle } from './OrderSectionTitle';

import styles from './OrderDelivery.module.scss';

interface Props {
	delivery: IOrderDelivery;
	tackButton?: boolean;
}
export const OrderDelivery: React.FC<Props> = ({ delivery, tackButton }) => (
	<section className={styles.OrderDelivery}>
		<OrderSectionTitle title="Entrega" />
		<div className={styles.delivery}>A entrega será realizada em:</div>
		<div className={styles.space}>
			<Address address={delivery.address} />
		</div>
		{tackButton && (
			<Button
				color="primary"
				fullWidth
				onClick={() => {
					// Mostrar página de rastreio de pedido
				}}>
				Rasrear entrega
			</Button>
		)}
	</section>
);
