import { formatMoney } from '@App/Utils';
import { CartItem as ICartItem } from '@lab77store/database';
import NP from 'number-precision';
import React from 'react';
import { CartItemAttributes } from './CartItemAttributes';

import styles from './CheckoutCartItem.module.scss';
import classNames from 'classnames';

interface Props {
	item: ICartItem;
}
export const CheckoutCartItem: React.FC<Props> = ({ item }) => (
	<section className={styles.checkoutCartItem}>
		<div className="container-fluid g-0 overflow-hidden">
			<div className="row g-0">
				<div className="col">
					<div className={styles.cartItemInfo}>
						<h4 className={classNames('text-uppercase', styles.productName)}>
							<span>
								{item.name} {item.quantity >= 2 && <>({item.quantity})</>}
							</span>
							<span className={styles.totalValue}>{formatMoney(NP.times(item.price, item.quantity))}</span>
						</h4>
						<CartItemAttributes item={item} />
					</div>
				</div>
			</div>
		</div>
	</section>
);
