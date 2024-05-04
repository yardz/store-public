import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { cartSelector } from '@App/Store/Reducers/CartReducer';
import classNames from 'classnames';

import styles from './CartItems.module.scss';

export const CartItems: React.FC = () => {
	const items = useSelector(cartSelector.items);
	const itemsQuantity = items.reduce((total, item) => total + item.quantity, 0);
	const quantity = useRef(itemsQuantity);

	const [effect, setEffect] = useState<'' | 'plus' | 'minus'>('');
	const itemsEffect = useCallback((effectSelected: 'plus' | 'minus') => {
		if (effectSelected === 'plus') {
			setEffect('plus');
		} else {
			setEffect('minus');
		}
		window.setTimeout(() => {
			setEffect('');
		}, 1000);
	}, []);

	useEffect(() => {
		if (quantity.current !== itemsQuantity) {
			if (quantity.current < itemsQuantity) {
				itemsEffect('plus');
			} else {
				itemsEffect('minus');
			}
			quantity.current = itemsQuantity;
		}
	}, [itemsQuantity, itemsEffect]);

	if (!itemsQuantity) return null;
	return (
		<p
			className={classNames(styles.item, 'translate-middle', 'rounded-circle', {
				'bg-success': effect === 'plus' || effect === '',
				'bg-warning': effect === 'minus',
			})}>
			{itemsQuantity}
		</p>
	);
};
