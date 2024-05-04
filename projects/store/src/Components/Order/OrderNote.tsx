import React from 'react';
import { Order } from '@lab77store/domain';

import { OrderSectionTitle } from './OrderSectionTitle';

interface Props {
	order: Order;
}
export const OrderNote: React.FC<Props> = ({ order }) => {
	if (!order.note) return null;

	return (
		<section>
			<OrderSectionTitle title="Observação" />
			<div className="container-fluid g-0 overflow-hidden">
				<div className="row">
					<div className="col">
						<p>{order.note}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
