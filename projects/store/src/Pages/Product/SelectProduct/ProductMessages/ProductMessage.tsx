import React from 'react';
import classNames from 'classnames';
import { ProductMessage as IProductMessage } from '../SelectProductContext';

interface Props {
	message: IProductMessage;
	className?: string;
}

export const ProductMessage: React.FC<Props> = ({ message, className }) => {
	if (!message) return null;
	return (
		<>
			<section
				className={classNames(className, {
					'text-success': message.type === 'success',
					'text-danger': message.type === 'danger',
					'text-warning': message.type === 'warning',
				})}>
				{message.message}
			</section>
		</>
	);
};
