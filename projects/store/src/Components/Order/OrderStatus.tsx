import React from 'react';
import { OrderStatus as IOrderStatus } from '@lab77store/domain';
import { orderDisplay } from '@App/Utils/';
import classNames from 'classnames';

interface Props {
	status: IOrderStatus;
	className?: string;
}
export const OrderStatus: React.FC<Props> = ({ status, className }) => {
	const color = orderDisplay.status(status);
	return (
		<span
			className={classNames(className, 'text-uppercase', {
				'text-success': color === 'success',
				'text-danger': color === 'danger',
				'text-warning': color === 'warning',
			})}>
			{orderDisplay.displayStatus(status)}
		</span>
	);
};
