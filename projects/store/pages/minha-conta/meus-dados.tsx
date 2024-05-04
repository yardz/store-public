import { PersonalDataPage, PersonalDataPageProps } from '@App/Pages';
import { addPageDefaultProps } from '@App/Utils';
import { GetStaticProps } from 'next';

const revalidate = Number(process.env.NEXT_PUBLIC_PUBLIC_REVALIDATE || '1');

export const getStaticProps: GetStaticProps<PersonalDataPageProps> = async () => {
	const props = await addPageDefaultProps<PersonalDataPageProps>({});
	return { props, revalidate };
};

export default PersonalDataPage;
