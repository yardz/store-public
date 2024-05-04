// TODO: Dividir esse arquivo
/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react';
import { ProductsList, Slide, SlideMessages, TextContent, ShowOnDevice, SliderRecommendation } from '@App/Components';
import { FooterMessages, ProductListItem, Seo, Slide as ISlide } from '@lab77store/domain';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { LoadingPage } from '../Loading';
import styles from './Category.module.scss';
import { LockCategory } from './LockCategory';
import { toast } from 'react-toastify';
import { useImageSize } from '@App/Hooks/useImageSize';

export interface CategoryProps {
	_id: string;
	content?: {
		slide01?: ISlide;
		text01?: string;
		slide02?: ISlide;
		text02?: string;
		slide03?: ISlide;
	};
	catalogStyle: 'male' | 'female' | 'default';
	seo?: Seo;
	products: ProductListItem[];
	nextPage?: number; // Paginação
	prevPage?: number; // Paginação
	footerMessages?: FooterMessages;
	password?: string;
}
export const Category: React.FC<CategoryProps> = ({ seo, content, products, footerMessages, catalogStyle, password }) => {
	const { isFallback } = useRouter();
	const [locked, setLocked] = useState(!!password);
	const localStorageKey = 'lockpass';
	const { IMAGE_SIZE_FULL_WIDTH, IMAGE_SIZE_DESK_HALF_WIDTH_MOBILE_FULL_WIDTH } = useImageSize();

	const isServer = typeof window === 'undefined';
	useEffect(() => {
		if (isServer || !password) return;
		const storagePassword = localStorage.getItem(localStorageKey);
		if (!!storagePassword && storagePassword.toLocaleLowerCase() === password.toLowerCase() && locked) {
			setLocked(false);
		}
	}, [isServer, locked, password]);

	if (isFallback) {
		return <LoadingPage />;
	}

	const header = seo?.metaDescription && (
		<Head>
			<meta name="description" content={seo.metaDescription} data-rh="true" />
		</Head>
	);

	if (locked) {
		return (
			<>
				{header}
				<LockCategory
					unLock={(key: string) => {
						if (!password) return;
						if (key.toLowerCase() === password.toLowerCase()) {
							localStorage.setItem(localStorageKey, password);
							setLocked(false);
						} else {
							toast.error('Senha invalida!');
						}
					}}
				/>
			</>
		);
	}

	return (
		<>
			{header}
			{content?.slide01 && (
				<section className="container-fluid g-0 overflow-hidden">
					<div className="row">
						<div className="col-12">
							<Slide slide={content.slide01} size={IMAGE_SIZE_FULL_WIDTH} />
						</div>
					</div>
				</section>
			)}

			<section className="container-fluid g-0 overflow-hidden">
				<div className="row">
					<div className="col">
						<SliderRecommendation position={1} />
					</div>
				</div>
			</section>

			<ShowOnDevice.ShowDesktop>
				<section className="container">
					<div className="row">
						{content?.slide02 && (
							<div className="col-12 col-lg-6">
								<Slide slide={content.slide02} size={IMAGE_SIZE_DESK_HALF_WIDTH_MOBILE_FULL_WIDTH} />
							</div>
						)}
						{content?.text01 && (
							<div className="col-12 col-lg-6">
								{content?.text01 && <TextContent text={content.text01} />}
								{content?.text02 && <TextContent text={content.text02} />}
							</div>
						)}
					</div>
				</section>
			</ShowOnDevice.ShowDesktop>

			<ShowOnDevice.ShowMobile>
				<section className="container-fluid">
					<div className="row">
						{content?.text01 && (
							<div className="col-12">
								<TextContent text={content.text01} />
							</div>
						)}
					</div>
				</section>
				<section className="container-fluid g-0 overflow-hidden">
					<div className="row">
						{content?.slide02 && (
							<div className="col-12">
								<Slide slide={content.slide02} size={IMAGE_SIZE_FULL_WIDTH} />
							</div>
						)}
					</div>
				</section>
				<section className="container-fluid">
					<div className="row">
						{content?.text02 && (
							<div className="col-12">
								<TextContent text={content.text02} />
							</div>
						)}
					</div>
				</section>
			</ShowOnDevice.ShowMobile>

			<section className="container-fluid g-0 overflow-hidden">
				<div className="row">
					<div className="col">
						<div className={styles.space}>
							<SliderRecommendation position={2} />
						</div>
					</div>
				</div>
			</section>

			<section className="container-fluid g-0 overflow-hidden">
				<div className="row">
					<div className="col">
						<ProductsList products={products} catalog={catalogStyle} />
					</div>
				</div>

				<div className="row">
					<div className="col">
						<SliderRecommendation position={3} />
					</div>
				</div>

				{content?.slide03 && (
					<div className="row">
						<div className="col">
							<div className={styles.space}>
								<Slide slide={content.slide03} size={IMAGE_SIZE_FULL_WIDTH} />
							</div>
						</div>
					</div>
				)}

				<div className="row">
					<div className="col">
						<SliderRecommendation position={4} />
					</div>
				</div>

				{seo?.textSeo && (
					<div className="row">
						<div className="col">
							<div className={styles.textSeo}>
								<TextContent text={seo.textSeo} />
							</div>
						</div>
					</div>
				)}

				<SlideMessages messages={footerMessages} />
			</section>
		</>
	);
};
