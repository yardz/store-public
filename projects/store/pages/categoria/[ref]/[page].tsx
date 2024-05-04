import { Category, CategoryProps } from '@App/Pages';
import { getCategoriesByRef, getProducts, getSlides } from '@App/Services';
import { removeNil, resolveOrUndefined, addPageDefaultProps, getCatalogStyle, getCategoryFullName } from '@App/Utils';
import { GetStaticPaths, GetStaticProps } from 'next';

const revalidate = Number(process.env.NEXT_PUBLIC_PUBLIC_REVALIDATE || '1');

export const getStaticPaths: GetStaticPaths = async () => ({ paths: [], fallback: true });

export const getStaticProps: GetStaticProps<CategoryProps> = async ({ params }) => {
	if (!params || !params?.ref || !params?.page || typeof params.ref !== 'string') {
		return { notFound: true };
	}
	const page = Number(params?.page);
	const { ref } = params;
	if (Number.isNaN(page) || page < 1 || ref === 'home') {
		return { notFound: true };
	}

	const [category] = await getCategoriesByRef({ ref });
	if (!category) {
		return { notFound: true, revalidate };
	}

	const perPage = (Number(process.env.NEXT_PUBLIC_APP_PRODUCTS_LIST_LINES) || 1) * 4;
	const products = await getProducts({ categoryId: category._id, pagination: { perPage, page } });

	if (page > products.lastPage) {
		return { notFound: true, revalidate };
	}

	const [slide01, slide02, slideFooter] = await Promise.all([
		category?.content?.slide01 ? resolveOrUndefined(getSlides({ positionId: category.content.slide01 })) : undefined,
		category?.content?.slide02 ? resolveOrUndefined(getSlides({ positionId: category.content.slide02 })) : undefined,
		category?.content?.slideFooter ? resolveOrUndefined(getSlides({ positionId: category.content.slideFooter })) : undefined,
	]);

	const nextPage = products.currentPage + 1 <= products.lastPage ? products.currentPage + 1 : undefined;
	const prevPage = products.currentPage > 0 ? products.currentPage : undefined;
	const categoryFullName = getCategoryFullName({ category });

	const props = await addPageDefaultProps<CategoryProps>(
		removeNil({
			_id: category._id,
			categoryFullName,
			content: {
				slide01,
				text01: category.content?.text01,
				slide02,
				text02: category.content?.text02,
				slideFooter,
			},
			catalogStyle: getCatalogStyle({ category }),
			seo: category.seo,
			products: products.items,
			password: category.password,
			nextPage,
			prevPage,
		}),
	);

	return {
		props,
		revalidate,
	};
};

export default Category;
