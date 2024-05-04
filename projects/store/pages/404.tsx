import { Page404, Page404Props } from '@App/Pages';
import { addPageDefaultProps } from '@App/Utils';
import { GetStaticProps } from 'next';

const revalidate = Number(process.env.NEXT_PUBLIC_PUBLIC_REVALIDATE || '1');

export const getStaticProps: GetStaticProps<Page404Props> = async () => {
	const props = await addPageDefaultProps<Page404Props>({});
	return { props, revalidate };
};

export default Page404;
