import classNames from 'classnames';
import React from 'react';
import { Price } from '../Price';

interface Props {
	title: string;
	originalPrice?: number;
	price: number;
	mainItem?: boolean;
}

export const CheckoutResumeItem: React.FC<Props> = ({ title, price, originalPrice, mainItem }) => (
	<div className="d-flex justify-content-between">
		<span
			className={classNames({
				'text-uppercase': mainItem,
				'fw-bold': mainItem,
			})}>
			{title}
		</span>
		<span
			className={classNames({
				'fw-bold': mainItem,
			})}>
			<Price price={price} originalPrice={originalPrice || price} />
		</span>
	</div>
);
