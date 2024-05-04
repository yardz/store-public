import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { authSelector } from '@App/Store/Reducers/AuthReducer';
import { Forms, RestrictedContent } from '@App/Components';
import { UserAddress } from '@lab77store/domain';
import { useRouter } from 'next/router';
import { saveAddress } from '@App/Services';
import to from 'await-to-js';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { getAddress } from '@App/Services/getAddress';
import { MyAccountTemplate } from '@App/Template/MyAccountTemplate';
import Link from 'next/link';
import { errorLogger } from '@App/Utils/logger';

export interface AddressEditPageProps {
	addressId: string;
}
export const AddressEditPage: React.FC<AddressEditPageProps> = ({ addressId }) => {
	const router = useRouter();
	const auth = useSelector(authSelector.auth);

	const address = useSWR(
		!router.isFallback && auth === 'authenticated' ? ['getAddress', addressId] : null,
		() => getAddress({ _id: addressId }),
		{ revalidateOnMount: true },
	);

	const loadingAddress = !address.error && !address.data;

	const save = async (updateAddress: UserAddress) => {
		const [err] = await to(saveAddress(updateAddress));
		if (err) {
			toast.error('Ocorreu um erro ao tentar salvar o endereço');
			return;
		}
		toast.success('Endereço salvo com sucesso!');
		if (router.query?.redirect && typeof router.query.redirect === 'string') {
			router.push(router.query.redirect).catch(errorLogger);
		} else {
			router.push('/minha-conta/meus-enderecos').catch(errorLogger);
		}
	};

	return (
		<RestrictedContent loading={loadingAddress}>
			<Head>
				<meta name="description" content="adicionar endereço" data-rh="true" />
			</Head>
			<MyAccountTemplate title="Editar endereço" linkBack="/minha-conta/meus-enderecos">
				<>{address.data && <Forms.AddressForm initialValues={address.data} action={save} />}</>
				<>
					{router.query?.redirect && (
						<>
							<br />
							<Link href={`${router.query.redirect}`}>
								<a className="btn btn-primary fullWidth">Continuar comprando</a>
							</Link>
						</>
					)}
				</>
			</MyAccountTemplate>
		</RestrictedContent>
	);
};
