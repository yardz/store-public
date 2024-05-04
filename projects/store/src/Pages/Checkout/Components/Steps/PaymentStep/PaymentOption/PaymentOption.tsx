import React from 'react';

import styles from './PaymentOption.module.scss';
import classNames from 'classnames';

interface Props {
	icon: JSX.Element;
	title: string;
	description?: string;
	active: boolean;
	select: () => void;
}

export const PaymentOption: React.FC<Props> = ({ select, icon, title, description, active, children }) => {
	const header = (
		<>
			<div className={styles.icon}>{icon}</div>
			<div>
				<h4 className={styles.title}>{title}</h4>
				<p className={classNames(styles.description, 'text-success')}>{description}</p>
			</div>
		</>
	);
	if (!active) {
		return (
			<button className={classNames(styles.PaymentOption, { [styles.active]: active })} type="button" onClick={select}>
				<div className={styles.header}>{header}</div>
			</button>
		);
	}

	return (
		<div className={classNames(styles.PaymentOption, { [styles.active]: active })} onClick={select}>
			<div className={styles.header}>{header}</div>
			<div className={styles.content}>{children}</div>
		</div>
	);
};
