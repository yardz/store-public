import { Image } from '@App/Components';
import { cartActions } from '@App/Store/Reducers/CartReducer';
import { formatMoney } from '@App/Utils';
import { CartItem as ICartItem } from '@lab77store/database';
import NP from 'number-precision';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { CartItemAttributes } from './CartItemAttributes';
import { CartItemInput } from './CartItemInput';

import styles from './CartItem.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

export interface CartItemProps {
	item: ICartItem;
}
export const CartItem: React.FC<CartItemProps> = ({ item }) => {
	const dispatch = useDispatch();
	return (
		<section className={styles.cartItem}>
			<div className="container-fluid g-0 overflow-hidden">
				<div className="row g-0">
					<div className="col-3 col-lg-3">
						<Link href={`/produto/${item.ref}`}>
							<a className={styles.link}>
								<Image image={item.image} />
							</a>
						</Link>
					</div>
					<div className="col">
						<div className={styles.wrapperCartItemInfo}>
							<div className={styles.cartItemInfo}>
								<div className={styles.content}>
									<Link href={`/produto/${item.ref}`}>
										<a className={styles.link}>
											<h4 className={classNames('text-uppercase', styles.productName)}>{item.name}</h4>
										</a>
									</Link>
									<CartItemAttributes item={item} />

									<div className="container-fluid g-0 overflow-hidden">
										<div className="row g-0">
											<div className="col-8">
												<CartItemInput item={item} />
											</div>
											<div className="col-12 col-lg-4">
												<div className="text-end">
													<button
														className={classNames('success', styles.btnRemoveItem)}
														type="button"
														onClick={() => {
															dispatch(cartActions.removeItem({ item, callback: () => toast.warning('O item foi removido do carrinho') }));
														}}>
														remover item
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={styles.subtotal}>
									<div className="container-fluid g-0 overflow-hidden">
										<div className="row">
											<div className="col-7 col-lg-8">
												<span>Subtotal</span>
											</div>
											<div className="col-5 col-lg-4">
												<div className="text-end">
													<span className={styles.totalValue}>{formatMoney(NP.times(item.price, item.quantity))}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
