import React from 'react';
import classNames from 'classnames';
import style from './DeliveryTip.module.scss';

interface Props {
	tip: {
		order: number;
		content: string;
		type: 'tip' | 'warning' | 'danger';
	};
}

export const DeliveryTip: React.FC<Props> = ({ tip }) => (
	<p
		className={classNames('mt-2', 'small', 'text-uppercase', style.deliveryTip, {
			'text-success': tip.type === 'tip',
			'text-danger': tip.type === 'danger',
			'text-warning': tip.type === 'warning',
		})}>
		{tip.content}
	</p>
);
