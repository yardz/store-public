import { ResetPasswordPageProps, ResetPasswordPage } from '@App/Pages';
import { addPageDefaultProps } from '@App/Utils';
import { GetStaticProps } from 'next';

const revalidate = Number(process.env.NEXT_PUBLIC_PUBLIC_REVALIDATE || '1');

export const getStaticProps: GetStaticProps<ResetPasswordPageProps> = async () => {
	const props = await addPageDefaultProps<ResetPasswordPageProps>({});
	return { props, revalidate };
};

export default ResetPasswordPage;
