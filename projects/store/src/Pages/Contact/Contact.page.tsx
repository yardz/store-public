import { Forms, Slide, TextContent } from '@App/Components';
import { useImageSize } from '@App/Hooks/useImageSize';
import { sendContactEmail } from '@App/Services';
import { Seo, Slide as ISlide } from '@lab77store/domain';
import to from 'await-to-js';
import cloneDeep from 'lodash/cloneDeep';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { LoadingPage } from '../Loading';

interface Contact {
	name: string;
	subject: string;
	email: string;
	message: string;
}

export interface ContactPageProps {
	seo?: Seo;
	text01?: string;
	slide01?: ISlide;
	text02?: string;
	slide02?: ISlide;
	text03?: string;
	slide03?: ISlide;
}
export const ContactPage: React.FC<ContactPageProps> = ({ seo, text01, text02, slide01, slide02 }) => {
	const { isFallback } = useRouter();
	const { IMAGE_SIZE_DESK_HALF_WIDTH_MOBILE_FULL_WIDTH } = useImageSize();
	if (isFallback) {
		return <LoadingPage />;
	}

	const sendEmail = async (contact: Contact) => {
		const { name, email, subject, message } = contact;
		const [err] = await to(
			sendContactEmail({
				name,
				email,
				subject,
				message,
			}),
		);
		if (err) {
			toast.error('Login e senha incorretos');
			return;
		}
		toast.success('Obrigado em breve entraremos em contato :)');
	};

	return (
		<>
			{seo?.metaDescription && (
				<Head>
					<meta name="description" content={seo.metaDescription} data-rh="true" />
				</Head>
			)}
			<section className="container-fluid">
				<div className="row">
					{slide01 && (
						<div className="col col-lg-6">
							<Slide slide={slide01} size={IMAGE_SIZE_DESK_HALF_WIDTH_MOBILE_FULL_WIDTH} />
						</div>
					)}
					<div className="col-12 offset-lg-1 col-lg-4">
						<TextContent text={text01} />
						<Forms.ContactForm
							initialValues={cloneDeep({
								name: '',
								subject: '',
								email: '',
								message: '',
							})}
							action={sendEmail}
						/>
						<TextContent text={text02} />
					</div>
					{slide02 && (
						<div className="col offset-lg-1 col-lg-6">
							<Slide slide={slide02} size={IMAGE_SIZE_DESK_HALF_WIDTH_MOBILE_FULL_WIDTH} />
						</div>
					)}
				</div>
			</section>
		</>
	);
};
