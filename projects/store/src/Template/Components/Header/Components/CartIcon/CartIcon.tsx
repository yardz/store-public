import React from 'react';
import styles from './CartIcon.module.scss';
import { CartIcoSvg } from '@App/Assets/images/CartIcoSvg';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import classNames from 'classnames';

const CartItems = dynamic(() => import('./CartItems').then(mod => mod.CartItems), { ssr: false });

export const CartIcon: React.FC = () => (
	<Link href="/carrinho">
		<a>
			<div className={classNames(styles.cart)}>
				<CartIcoSvg />
				<CartItems />
			</div>
		</a>
	</Link>
);
