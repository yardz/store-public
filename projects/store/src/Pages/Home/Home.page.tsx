import React from 'react';
import dynamic from 'next/dynamic';
import { FooterMessages, ProductListItem, Seo, Slide as ISlide } from '@lab77store/domain';
import { useRouter } from 'next/router';
import Head from 'next/head';

import styles from './Home.module.scss';
import { useImageSize } from '@App/Hooks/useImageSize';

const Slide = dynamic(() => import('@App/Components').then(mod => mod.Slide));
const SliderRecommendation = dynamic(() => import('@App/Components').then(mod => mod.SliderRecommendation));
const ProductsList = dynamic(() => import('@App/Components').then(mod => mod.ProductsList));
const TextContent = dynamic(() => import('@App/Components').then(mod => mod.TextContent));
const SlideMessages = dynamic(() => import('@App/Components').then(mod => mod.SlideMessages));
const LoadingPage = dynamic(() => import('../Loading').then(mod => mod.LoadingPage));

export interface HomeProps {
	slides?: {
		slide01?: ISlide;
		slide02?: ISlide;
		slideFooter?: ISlide;
	};
	seo?: Seo;
	products: ProductListItem[];
	footerMessages?: FooterMessages;
}

export const Home: React.FC<HomeProps> = ({ seo, products, slides, footerMessages }) => {
	const { isFallback } = useRouter();
	const { IMAGE_SIZE_FULL_WIDTH } = useImageSize();
	if (isFallback) {
		return <LoadingPage />;
	}
	return (
		<>
			{seo?.metaDescription && (
				<Head>
					<meta name="description" content={seo.metaDescription} data-rh="true" />
				</Head>
			)}
			<section className="container-fluid g-0 overflow-hidden">
				{slides?.slide01 && (
					<div className="row">
						<div className="col">
							<Slide slide={slides.slide01} size={IMAGE_SIZE_FULL_WIDTH} />
						</div>
					</div>
				)}

				<div className="row g-0">
					<div className="col">
						<SliderRecommendation position={1} />
					</div>
				</div>

				{slides?.slide02 && (
					<div className="row">
						<div className="col">
							<Slide slide={slides.slide02} size={IMAGE_SIZE_FULL_WIDTH} />
						</div>
					</div>
				)}

				<div className="row g-0">
					<div className="col">
						<div className={styles.space}>
							<SliderRecommendation position={2} />
						</div>
					</div>
				</div>

				<div className="row g-0">
					<div className="col">
						<ProductsList products={products} catalog="default" />
					</div>
				</div>

				<div className="row g-0">
					<div className="col">
						<SliderRecommendation position={3} />
					</div>
				</div>

				{slides?.slideFooter && (
					<div className="row">
						<div className="col">
							<div className={styles.space}>
								<Slide slide={slides.slideFooter} size={IMAGE_SIZE_FULL_WIDTH} />
							</div>
						</div>
					</div>
				)}

				<div className="row g-0">
					<div className="col">
						<SliderRecommendation position={4} />
					</div>
				</div>

				<div className="row">
					<div className="col">
						<div className={styles.seoText}>
							<TextContent text={seo?.textSeo} />
						</div>
					</div>
				</div>

				<SlideMessages messages={footerMessages} />
			</section>
		</>
	);
};
