import React from 'react';

import styles from './OrderSectionTitle.module.scss';

interface Props {
	title: string;
}
export const OrderSectionTitle: React.FC<Props> = ({ title }) => <h5 className={styles.OrderSectionTitle}>{title}</h5>;
