import React from 'react';
import { Carousel, Image, SliderRecommendation } from '@App/Components';
import { Product } from '@lab77store/domain';
import { useRouter } from 'next/router';
import { SelectProduct } from './SelectProduct';
import { HeaderProduct } from './HeaderProduct';
import { LoadingPage } from '../Loading';

import Head from 'next/head';

export interface ProductPageProps {
	product: Product;
}
export const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
	const { isFallback } = useRouter();
	if (isFallback) {
		return <LoadingPage />;
	}

	return (
		<>
			<Head>
				{product.seo?.metaDescription && <meta name="description" content={product.seo.metaDescription} data-rh="true" />}
				<title>{product.name} | Moda Sustentável - Produção Sob Encomenda | Lab 77</title>
			</Head>

			<section className="container-fluid g-0 overflow-hidden">
				<div className="row">
					<div className="col">
						<SliderRecommendation position={1} />
					</div>
				</div>
			</section>

			<section className="container-fluid">
				<div className="row">
					<div className="col-12 col-lg-6 g-0">
						<Carousel
							_id="carousel-product"
							items={product.photos.map((image, key) => (
								<Image key={key} image={image} />
							))}
						/>
						<SliderRecommendation position={2} />
					</div>
					<div className="col-12 offset-lg-1 col-lg-4">
						<HeaderProduct product={product} />
						<SelectProduct product={product} />
						<SliderRecommendation position={3} />
					</div>
				</div>
			</section>

			<section className="container-fluid g-0 overflow-hidden">
				<div className="row">
					<div className="col">
						<SliderRecommendation position={4} />
					</div>
				</div>
			</section>
		</>
	);
};
