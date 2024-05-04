import React from 'react';
import Head from 'next/head';
import { Forms, RestrictedContent } from '@App/Components';
import { UserAddress } from '@lab77store/domain';
import { useRouter } from 'next/router';
import { saveAddress } from '@App/Services';
import to from 'await-to-js';
import { toast } from 'react-toastify';
import { MyAccountTemplate } from '@App/Template/MyAccountTemplate';
import { errorLogger } from '@App/Utils/logger';

const initialValues: UserAddress = {
	_id: '',
	name: '',
	recipientName: '',
	zipCode: '',
	country: '',
	state: '',
	city: '',
	neighborhood: '',
	street: '',
	number: '',
	complement: '',
};

export interface AddressCreateProps {}
export const AddressCreate: React.FC<AddressCreateProps> = () => {
	const router = useRouter();
	const save = async (address: UserAddress) => {
		const [err] = await to(saveAddress(address));
		if (err) {
			toast.error('Ocorreu um erro ao tentar salvar o endereço');
			return;
		}
		toast.success('Endereço salvo com sucesso!');

		// Redireciona após salvar o endereço
		if (router.query?.redirect && typeof router.query.redirect === 'string') {
			router.push(router.query.redirect).catch(errorLogger);
		} else {
			router.push('/minha-conta/meus-enderecos').catch(errorLogger);
		}
	};
	return (
		<RestrictedContent>
			<Head>
				<meta name="description" content="lista de endereços" data-rh="true" />
			</Head>
			<MyAccountTemplate title="Adicionar endereço" linkBack="/minha-conta/meus-enderecos">
				<Forms.AddressForm initialValues={initialValues} action={save} />
			</MyAccountTemplate>
		</RestrictedContent>
	);
};
