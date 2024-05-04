import React from 'react';
import { OrderItem as IOrderItem } from '@lab77store/domain';
import { Image } from '@App/Components/Image';
import { OrderItemAttributes } from './OrderItemAttributes';

import { Price } from '@App/Components';

interface Props {
	item: IOrderItem;
}
export const OrderItem: React.FC<Props> = ({ item }) => (
	<section className="order-item">
		<div>
			<Image image={item.photo} />
		</div>
		<div>{item.name}</div>
		<div>
			<OrderItemAttributes item={item} />
		</div>
		<div>
			<Price price={item.price} originalPrice={item.originalPrice} />
		</div>
	</section>
);
