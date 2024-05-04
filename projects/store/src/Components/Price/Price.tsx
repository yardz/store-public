import React from 'react';
import { formatMoney } from '@App/Utils';

import styles from './Price.module.scss';
import classNames from 'classnames';

interface Props {
	originalPrice?: number;
	price: number;
	inverse?: boolean;

	className?: {
		originalPrice?: string;
		price?: string;
	};
}
export const Price: React.FC<Props> = ({ price, originalPrice = 0, inverse, className }) => {
	if (price >= originalPrice) {
		return <span className={classNames(styles.price, className?.price)}>{formatMoney(price)}</span>;
	}
	if (inverse) {
		return (
			<>
				<span className={classNames(styles.price, className?.price)}>{formatMoney(price)}</span>
				<span className={classNames(styles.originalPrice, className?.originalPrice)}>{formatMoney(originalPrice)}</span>
			</>
		);
	}
	return (
		<>
			<span className={classNames(styles.originalPrice, className?.originalPrice)}>{formatMoney(originalPrice)}</span>
			<span className={classNames(styles.price, className?.price)}>{formatMoney(price)}</span>
		</>
	);
};
