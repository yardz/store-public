import React from 'react';
import { VariationAttribute } from '@lab77store/domain';

interface Props {
	attributes: VariationAttribute[];
}
export const OrderItemAttributes: React.FC<Props> = ({ attributes }) => (
	<section className="container-fluid g-0 overflow-hidden">
		<div className="row">
			{attributes.map(attribute => (
				<div className="col-12" key={attribute._id}>
					<label htmlFor={`orderItem-attributes-value-${attribute.name}`}>{attribute.name}:</label>{' '}
					<span id={`orderItem-attributes-value-${attribute.name}`}>{attribute.option.label}</span>
				</div>
			))}
		</div>
	</section>
);
