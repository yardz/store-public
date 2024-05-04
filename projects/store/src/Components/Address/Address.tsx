import React from 'react';
import { Address as IAddress } from '@lab77store/domain';
import styles from './Address.module.scss';

interface Props {
	address: IAddress;
	className?: string;
}
export const Address: React.FC<Props> = ({ address, className }) => (
	<section className={styles.addressSection}>
		<p className={className}>
			{address.street}, {address.number}
		</p>
		<p className={className}>
			{address.neighborhood} - {address.city} - {address.state}
		</p>
		<p className={className}>
			{address.zipCode} - {address.country}
		</p>
		<p className={className}>{address.complement}</p>
	</section>
);
