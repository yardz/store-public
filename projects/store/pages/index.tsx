import { Home, HomeProps } from '@App/Pages';
import { getCategoriesByRef, getProducts, getSlides } from '@App/Services';
import { addPageDefaultProps, removeNil, resolveOrUndefined } from '@App/Utils';
import { GetStaticProps } from 'next';

const revalidate = Number(process.env.NEXT_PUBLIC_PUBLIC_REVALIDATE || '1');

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const perPage = 20;
	const [home] = await getCategoriesByRef({ ref: 'home' });
	const [products, slide01, slide02, slideFooter] = await Promise.all([
		getProducts({ categoryId: home._id, pagination: { perPage, page: 1 } }),
		home?.content?.slide01 ? resolveOrUndefined(getSlides({ positionId: home.content.slide01 })) : undefined,
		home?.content?.slide02 ? resolveOrUndefined(getSlides({ positionId: home.content.slide02 })) : undefined,
		home?.content?.slideFooter ? resolveOrUndefined(getSlides({ positionId: home.content.slideFooter })) : undefined,
	]);

	const props = await addPageDefaultProps<HomeProps>(
		removeNil({
			seo: home.seo,
			slides: {
				slide01,
				slide02,
				slideFooter,
			},
			products: products.items,
		}),
	);

	return {
		props,
		revalidate,
	};
};

export default Home;
