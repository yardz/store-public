import React from 'react';
import { UserAddress } from '@lab77store/domain';
import Link from 'next/link';
import { Address, Button } from '@App/Components';
import { deleteAddress } from '@App/Services';
import { toast } from 'react-toastify';
import { mutate } from 'swr';
import styles from './AddressListItem.module.scss';
import classNames from 'classnames';
import { errorLogger } from '@App/Utils/logger';

interface Props {
	address: UserAddress;
}
export const AddressListItem: React.FC<Props> = ({ address }) => (
	<section className={styles.addressListItemSection}>
		<div className={styles.itemSectionHeader}>
			<h2 className={styles.title}>{address.name}</h2>
		</div>
		<div className={styles.content}>
			<Address address={address} />
		</div>
		<div className="container-fluid g-0 overflow-hidden">
			<div className="row g-1">
				<div className="col">
					<Link href={`/minha-conta/meus-enderecos/editar/${address._id}`}>
						<a className={classNames('btn', 'btn-primary', 'fullWidth')}>Editar</a>
					</Link>
				</div>
				<div className="col">
					<Button
						color="primary"
						fullWidth
						onClick={() => {
							deleteAddress({ _id: address._id })
								.then(() => {
									toast.warning('Endereço foi removido com sucesso');
									mutate('getAddresses').catch(errorLogger);
								})
								.catch(() => toast.error('Ocorreu um erro ao tentar apagar este endereço'));
						}}>
						Remover
					</Button>
				</div>
			</div>
		</div>
	</section>
);
