import { RegisterPage, RegisterPageProps } from '@App/Pages';
import { addPageDefaultProps } from '@App/Utils';
import { GetStaticProps } from 'next';

const revalidate = Number(process.env.NEXT_PUBLIC_PUBLIC_REVALIDATE || '1');

export const getStaticProps: GetStaticProps<RegisterPageProps> = async () => {
	const props = await addPageDefaultProps<RegisterPageProps>({});
	return { props, revalidate };
};
export default RegisterPage;
