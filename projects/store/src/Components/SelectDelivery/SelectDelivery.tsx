import React from 'react';
import { Delivery } from '@lab77store/domain';
import { OptionDelivery } from './OptionDelivery';

interface Props {
	options: Delivery[];
}

export const SelectDelivery: React.FC<Props> = ({ options }) => (
	<>
		{options.map(delivery => (
			<OptionDelivery key={delivery._id} delivery={delivery} />
		))}
	</>
);
