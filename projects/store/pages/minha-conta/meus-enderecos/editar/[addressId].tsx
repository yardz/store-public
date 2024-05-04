import { AddressEditPage, AddressEditPageProps } from '@App/Pages';
import { addPageDefaultProps } from '@App/Utils';
import { GetStaticPaths, GetStaticProps } from 'next';

const revalidate = Number(process.env.NEXT_PUBLIC_PUBLIC_REVALIDATE || '1');

export const getStaticPaths: GetStaticPaths = async () => ({ paths: [], fallback: true });

export const getStaticProps: GetStaticProps<AddressEditPageProps> = async ({ params }) => {
	if (!params || !params?.addressId || typeof params.addressId !== 'string') {
		return { notFound: true };
	}
	const { addressId } = params;

	const props = await addPageDefaultProps<AddressEditPageProps>({
		addressId,
	});

	return { props, revalidate };
};

export default AddressEditPage;
