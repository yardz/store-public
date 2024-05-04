import React from 'react';
import { MyAccountMenu, RestrictedContent, ShowOnDevice } from '@App/Components';
import Head from 'next/head';
import { MyAccountTemplate } from '@App/Template/MyAccountTemplate';
import { useSelector } from 'react-redux';
import { authSelector } from '@App/Store/Reducers/AuthReducer';

import styles from './MyAccount.module.scss';

export interface MyAccountPageProps {}

export const MyAccountPage: React.FC<MyAccountPageProps> = () => {
	const user = useSelector(authSelector.user);
	return (
		<RestrictedContent>
			<Head>
				<meta name="description" content="carrinho" data-rh="true" />
			</Head>
			<ShowOnDevice.ShowMobile>
				<div className={styles.MyAccountPage}>
					<section className="container-fluid">
						<div className="row justify-content-center">
							<div className="col">
								<MyAccountMenu />
							</div>
						</div>
					</section>
				</div>
			</ShowOnDevice.ShowMobile>
			<ShowOnDevice.ShowDesktop>
				<MyAccountTemplate title="Minha Conta">
					<div className={styles.content}>
						<h1>Olá, {user?.personalData.firstName}!</h1>
						<p>
							Aqui é onde você poderá visualizar e editar os dados da sua conta, como: seus pedidos, atualizar suas informações ou trocar a
							sua senha.
						</p>
					</div>
				</MyAccountTemplate>
			</ShowOnDevice.ShowDesktop>
		</RestrictedContent>
	);
};
