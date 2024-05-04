import { CheckoutPage, CheckoutPageProps } from '@App/Pages';
import { addPageDefaultProps } from '@App/Utils';
import { GetStaticProps } from 'next';

const revalidate = Number(process.env.NEXT_PUBLIC_PUBLIC_REVALIDATE || '1');

export const getStaticProps: GetStaticProps<CheckoutPageProps> = async () => {
	const props = await addPageDefaultProps<CheckoutPageProps>({});
	return { props, revalidate };
};

export default CheckoutPage;
