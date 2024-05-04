import React from 'react';
import { CartItem as ICartItem } from '@lab77store/database';
import map from 'lodash/map';

import styles from './CartItemAttributes.module.scss';
import classNames from 'classnames';

export interface CartItemProps {
	item: ICartItem;
}
export const CartItemAttributes: React.FC<CartItemProps> = ({ item }) => (
	<section className="container-fluid g-0 overflow-hidden">
		<div className="row">
			{map(item.attributes, attribute => (
				<div className="col-12" key={attribute.name}>
					<div className={styles.cartItemAttr}>
						<label
							className={classNames('text-uppercase', { [styles.cartItemAttrLabel]: true })}
							htmlFor={`CartItemAttributes-${item.variationId}-${attribute.name}`}>
							{attribute.name}:
						</label>
						<span className={styles.cartItemAttrValue} id={`CartItemAttributes-${item.variationId}-${attribute.name}`}>
							{attribute.value}
						</span>
					</div>
				</div>
			))}
		</div>
	</section>
);
