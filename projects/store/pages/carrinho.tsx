import { CartPage, CartPageProps } from '@App/Pages';
import { addPageDefaultProps } from '@App/Utils';
import { GetStaticProps } from 'next';

const revalidate = Number(process.env.NEXT_PUBLIC_PUBLIC_REVALIDATE || '1');

export const getStaticProps: GetStaticProps<CartPageProps> = async () => {
	const props = await addPageDefaultProps<CartPageProps>({});
	return { props, revalidate };
};

export default CartPage;
