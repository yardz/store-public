import React from 'react';
import styles from './LoginTemplate.module.scss';

interface Props {
	title: string;
	subtitle?: string;
}
export const LoginTemplate: React.FC<Props> = ({ title, subtitle, children }) => (
	<div className={styles.LoginTemplate}>
		<div className="container-fluid ">
			<div className="row justify-content-center">
				<div className="col col-lg-6">
					<div className={styles.header}>
						<h1>{title}</h1>
						<h6 className={styles.subTitle}>{subtitle}</h6>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col col-lg-6">{children}</div>
			</div>
		</div>
	</div>
);
