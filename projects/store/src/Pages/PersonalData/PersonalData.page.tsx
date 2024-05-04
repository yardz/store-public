import React from 'react';
import { Forms, RestrictedContent } from '@App/Components';
import { savePersonalData } from '@App/Services';
import { authActions, authSelector } from '@App/Store/Reducers/AuthReducer';
import { MyAccountTemplate } from '@App/Template/MyAccountTemplate';
import { PersonalData } from '@lab77store/domain';
import to from 'await-to-js';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export interface PersonalDataPageProps {}

export const PersonalDataPage: React.FC<PersonalDataPageProps> = () => {
	const router = useRouter();
	const reduxUser = useSelector(authSelector.user);
	const dispatch = useDispatch();

	const save = async (personalData: PersonalData) => {
		const [error, user] = await to(savePersonalData(personalData));
		if (error || !user) {
			toast.error('Ocorreu um erro ao tentar atualizar seus dados');
			return;
		}
		toast.success('Seus dados foram atualizados com sucesso');
		dispatch(authActions.setUser({ user }));
		if (router.query?.redirect && typeof router.query.redirect === 'string') {
			await router.push(router.query.redirect);
		}
	};

	return (
		<RestrictedContent>
			<Head>
				<meta name="description" content="carrinho" data-rh="true" />
			</Head>
			<MyAccountTemplate
				title="Meus Dados"
				subtitle={`Edite os campos abaixo e clique em "Atualizar" para salvar as alterações.`}
				linkBack="/minha-conta">
				{reduxUser?.personalData && <Forms.PersonalDataForm action={save} initialValues={reduxUser.personalData} />}
			</MyAccountTemplate>
		</RestrictedContent>
	);
};
