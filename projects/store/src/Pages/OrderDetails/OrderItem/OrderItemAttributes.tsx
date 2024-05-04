import React from 'react';
import { OrderItem as IOrderItem } from '@lab77store/domain';

interface Props {
	item: IOrderItem;
}
export const OrderItemAttributes: React.FC<Props> = ({ item }) => (
	<section className="order-item-attributes">
		{item.attributes.map(attribute => (
			<div key={attribute._id}>
				{attribute.name}: {attribute.option.label}
			</div>
		))}
	</section>
);
