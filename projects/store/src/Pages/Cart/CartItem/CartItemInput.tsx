import React from 'react';
import { CartItem as ICartItem } from '@lab77store/database';
import cloneDeep from 'lodash/cloneDeep';
import { useDispatch } from 'react-redux';
import { cartActions } from '@App/Store/Reducers/CartReducer';

import styles from './CartItemInput.module.scss';

export interface CartItemProps {
	item: ICartItem;
}
export const CartItemInput: React.FC<CartItemProps> = ({ item }) => {
	const dispatch = useDispatch();
	return (
		<section>
			<div className={styles.cartItemQuantity}>
				<label className={styles.quantityLabel}>Quantidade:</label>
				<div className={styles.quantity}>
					<button
						className={styles.btnMinus}
						type="button"
						disabled={item.quantity <= 1}
						onClick={() => {
							const update = cloneDeep(item);
							update.quantity -= 1;
							dispatch(cartActions.replaceItem({ item: update }));
						}}>
						-
					</button>
					<div className={styles.disaplayQuantity}>{item.quantity}</div>
					<button
						className={styles.btnPlus}
						type="button"
						disabled={item.quantity >= item.stock}
						onClick={() => {
							const update = cloneDeep(item);
							update.quantity += 1;
							dispatch(cartActions.replaceItem({ item: update }));
						}}>
						+
					</button>
				</div>
			</div>
		</section>
	);
};
