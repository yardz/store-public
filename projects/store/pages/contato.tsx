import { ContactPage, ContactPageProps } from '@App/Pages';
import { getInstitutionalPageByRef, getSlides } from '@App/Services';
import { addPageDefaultProps, removeNil, resolveOrUndefined } from '@App/Utils';
import { GetStaticProps } from 'next';

const revalidate = Number(process.env.NEXT_PUBLIC_PUBLIC_REVALIDATE || '1');

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => {
	const [page] = await getInstitutionalPageByRef({ ref: 'contato' });

	if (!page) {
		return { notFound: true, revalidate };
	}

	const [slide01, slide02, slide03] = await Promise.all([
		page?.content?.slide01 ? resolveOrUndefined(getSlides({ positionId: page.content.slide01 })) : undefined,
		page?.content?.slide02 ? resolveOrUndefined(getSlides({ positionId: page.content.slide02 })) : undefined,
		page?.content?.slide03 ? resolveOrUndefined(getSlides({ positionId: page.content.slide03 })) : undefined,
	]);

	const props = await addPageDefaultProps<ContactPageProps>(
		removeNil({
			seo: page.seo,
			text01: page.content?.text01,
			slide01,
			text02: page.content?.text02,
			slide02,
			text03: page.content?.text03,
			slide03,
		}),
	);

	return {
		props,
		revalidate,
	};
};

export default ContactPage;
