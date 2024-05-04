import React from 'react';
import { useImageSize } from '@App/Hooks';
import { ProductListItem } from '@lab77store/domain';
import Link from 'next/link';
import styles from './ProductsList.module.scss';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('@App/Components').then(mod => mod.Image));
const Price = dynamic(() => import('@App/Components').then(mod => mod.Price));

interface Props {
	products: ProductListItem[];
	catalog: 'default' | 'male' | 'female';
}

export const ProductsList: React.FC<Props> = ({ products, catalog }) => {
	const { IMAGE_SIZE_PRODUCT_LIST } = useImageSize();
	return (
		<section className={styles.productList}>
			<div className="container-fluid gx-1">
				<div className="row gx-1 gy-1">
					{products.map(product => {
						let { cover, hover } = product.catalogImages.default;
						if (catalog === 'male' && product.catalogImages.male) {
							cover = product.catalogImages.male.cover;
							hover = product.catalogImages.male.hover;
						}
						if (catalog === 'female' && product.catalogImages.female) {
							cover = product.catalogImages.female.cover;
							hover = product.catalogImages.female.hover;
						}

						return (
							<div key={product._id} className="col-6 col-lg-3">
								<Link href={`/produto/${product.ref}`}>
									<a className={styles.link}>
										<div className={styles.item} data-item="product">
											<div className={styles.images} data-field="images">
												<div className={styles.cover} data-image="cover">
													<Image image={cover} size={IMAGE_SIZE_PRODUCT_LIST} />
												</div>
												{hover && (
													<div className={styles.hover} data-image="hover">
														<Image image={hover} size={IMAGE_SIZE_PRODUCT_LIST} />
													</div>
												)}
											</div>
											<div className={styles.info}>
												<div data-field="name" className={styles.name}>
													{product.name}
												</div>
												<div data-field="price" className={styles.price}>
													<Price price={product.price} originalPrice={product.oldPrice || product.price} />
												</div>
											</div>
										</div>
									</a>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
