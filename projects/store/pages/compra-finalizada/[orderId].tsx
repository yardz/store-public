import { CheckoutCompletedPage, CheckoutCompletedPageProps } from '@App/Pages';
import { addPageDefaultProps } from '@App/Utils';
import { GetStaticPaths, GetStaticProps } from 'next';

const revalidate = Number(process.env.NEXT_PUBLIC_PUBLIC_REVALIDATE || '1');

export const getStaticPaths: GetStaticPaths = async () => ({ paths: [], fallback: true });

export const getStaticProps: GetStaticProps<CheckoutCompletedPageProps> = async ({ params }) => {
	if (!params || !params?.orderId || typeof params.orderId !== 'string') {
		return { notFound: true };
	}
	const { orderId } = params;

	const props = await addPageDefaultProps<CheckoutCompletedPageProps>({ orderId });

	return { props, revalidate };
};

export default CheckoutCompletedPage;
