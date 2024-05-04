import React from 'react';
import { Product } from '@lab77store/domain';
import { ShowOnDevice, FixedBottom } from '@App/Components';
import { ProductDetails } from './ProductDetails';
import { BuyButtonAction } from './BuyButton';
import { ProductMessages } from './ProductMessages';
import dynamic from 'next/dynamic';

import styles from './SelectProduct.module.scss';
import { SelectProductProvider } from './SelectProductProvider';

const OptionsListProduct = dynamic(() => import('./OptionsListProduct').then(mod => mod.OptionsListProduct));

interface Props {
	product: Product;
}

export const SelectProduct: React.FC<Props> = ({ product }) => (
	<SelectProductProvider product={product}>
		<section id="SelectProduct">
			<OptionsListProduct />
			<ShowOnDevice.ShowDesktop>
				<div className={styles.space} />
				<div className="container-fluid g-0 overfow-hidden">
					<div className="row g-0">
						<div className="col-6">
							<BuyButtonAction color="success" title="Jogar na sacola" product={product} />
						</div>
						<div className="col-6">
							<BuyButtonAction color="primary" title="Comprar" product={product} goToCart />
						</div>
					</div>
				</div>

				<div className={styles.space} />
				<ProductMessages product={product} />
				<div className={styles.space} />
			</ShowOnDevice.ShowDesktop>
			<ProductDetails product={product} />

			<ShowOnDevice.ShowMobile>
				<FixedBottom>
					<div className={styles.warpBtnMobile}>
						<div className="container-fluid overflow-hidden g-0">
							<div className="row justify-content-center">
								<div className="col-12 gx-5">
									<ProductMessages product={product} className={styles.message} />
								</div>
								<div className="col-12 gx-5">
									<BuyButtonAction color="primary" title="Comprar" product={product} goToCart />
								</div>
							</div>
						</div>
					</div>
				</FixedBottom>
			</ShowOnDevice.ShowMobile>
		</section>
	</SelectProductProvider>
);
