import React from 'react';
import { Seo, Slide as ISlide } from '@lab77store/domain';
import { Slide, TextContent } from '@App/Components';
import { useImageSize } from '@App/Hooks/useImageSize';
import { LoadingPage } from '../Loading';
import { useRouter } from 'next/router';
import Head from 'next/head';

export interface InstitutionalPageProps {
	seo?: Seo;
	text01?: string;
	slide01?: ISlide;
	text02?: string;
	slide02?: ISlide;
	text03?: string;
	slide03?: ISlide;
}
export const InstitutionalPage: React.FC<InstitutionalPageProps> = ({ seo, text01, text02, text03, slide01, slide02, slide03 }) => {
	const { isFallback } = useRouter();
	const { IMAGE_SIZE_DESK_HALF_WIDTH_MOBILE_FULL_WIDTH } = useImageSize();
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
			<section className="container-fluid">
				<div className="row">
					{text01 && (
						<div className="col-12 offset-lg-1 col-lg-4">
							<TextContent text={text01} />
						</div>
					)}
					{slide01 && (
						<div className="col-12 offset-lg-1 col-lg-6">
							<Slide slide={slide01} size={IMAGE_SIZE_DESK_HALF_WIDTH_MOBILE_FULL_WIDTH} />
						</div>
					)}
				</div>

				<div className="row">
					{slide02 && (
						<div className="col-12 col-lg-6">
							<Slide slide={slide02} size={IMAGE_SIZE_DESK_HALF_WIDTH_MOBILE_FULL_WIDTH} />
						</div>
					)}
					{text02 && (
						<div className="col-12 offset-lg-1 col-lg-4">
							<TextContent text={text02} />
						</div>
					)}
				</div>

				<div className="row">
					{text03 && (
						<div className="col-12 offset-lg-1 col-lg-4">
							<TextContent text={text03} />
						</div>
					)}
					{slide03 && (
						<div className="col-12 offset-lg-1 col-lg-6">
							<Slide slide={slide03} size={IMAGE_SIZE_DESK_HALF_WIDTH_MOBILE_FULL_WIDTH} />
						</div>
					)}
				</div>
			</section>
		</>
	);
};
