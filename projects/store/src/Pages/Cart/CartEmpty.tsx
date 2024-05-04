/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';

import styles from './CartEmpty.module.scss';

interface Props {}
export const CartEmpty: React.FC<Props> = () => (
	<>
		<Head>
			<meta name="description" content="carrinho" data-rh="true" />
		</Head>
		<div className={styles.CartEmpty}>
			<img src="/images/empty-cart.png" alt="Carrinho de compras vazio" className={styles.cart} />
			<img src="/images/empty-cart-message.png" alt="mensagem: seu carrinho está vazio" className={styles.message} />
		</div>
	</>
);
