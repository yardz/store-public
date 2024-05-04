import React from 'react';
import { Product } from '@lab77store/domain';
import { Price } from '@App/Components';
import classNames from 'classnames';

import styles from './HeaderProduct.module.scss';

interface Props {
	product: Product;
}

export const HeaderProduct: React.FC<Props> = ({ product }) => (
	<section id="HeaderProduct">
		<h1 className={styles.productName}>{product.name}</h1>

		<div className={classNames('text-uppercase', styles.price)}>
			<div className="container-fluid g-0 overflow-hidden">
				<div className="row g-0">
					<div className="col d-block d-lg-none">Preço</div>
					<div className="col">
						<div className={styles.value}>
							<Price originalPrice={product.oldPrice} price={product.price} inverse className={{ price: styles.price }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
