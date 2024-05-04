import React from 'react';
import Head from 'next/head';
import { AddressListItem } from './AddressListItem';
import { RestrictedContent } from '@App/Components';
import { useAddresses } from '@App/Hooks';
import Link from 'next/link';
import { MyAccountTemplate } from '@App/Template/MyAccountTemplate';

import styles from './AddressList.module.scss';
import classNames from 'classnames';

export interface AddressListPageProps {}
export const AddressListPage: React.FC<AddressListPageProps> = () => {
	const addresses = useAddresses();

	return (
		<RestrictedContent loading={addresses.isLoading}>
			<Head>
				<meta name="description" content="lista de endereços" data-rh="true" />
			</Head>
			<MyAccountTemplate title="Meus Endereços" linkBack="/minha-conta">
				<>
					{addresses.data?.map(address => (
						<div key={address._id} className="row">
							<div className="col">
								<AddressListItem address={address} />
							</div>
						</div>
					))}
					<Link href="/minha-conta/meus-enderecos/adicionar">
						<a className={classNames('btn btn-success', 'fullWidth', styles.linkBtn)}>Novo endereço</a>
					</Link>
				</>
			</MyAccountTemplate>
		</RestrictedContent>
	);
};
