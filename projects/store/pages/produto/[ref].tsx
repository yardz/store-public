import { getProductByRef } from '@App/Services';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ProductPage, ProductPageProps } from '@App/Pages';
import { addPageDefaultProps } from '@App/Utils';

const revalidate = Number(process.env.NEXT_PUBLIC_PUBLIC_REVALIDATE || '1');

export const getStaticPaths: GetStaticPaths = async () => ({ paths: [], fallback: true });

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
	if (!params || !params?.ref || typeof params.ref !== 'string') {
		return { notFound: true, revalidate };
	}
	const { ref } = params;

	const product = await getProductByRef({ ref });

	const props = await addPageDefaultProps<ProductPageProps>({ product });

	return { props, revalidate };
};

export default ProductPage;
