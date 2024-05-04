import React from 'react';

import styles from './MyAccountTemplate.module.scss';
import dynamic from 'next/dynamic';

const MyAccountMenu = dynamic(() => import('@App/Components').then(mod => mod.MyAccountMenu));
const TitleBack = dynamic(() => import('@App/Components').then(mod => mod.TitleBack));

interface Props {
	title: string;
	subtitle?: string;
	linkBack?: string;
}
export const MyAccountTemplate: React.FC<Props> = ({ title, linkBack, subtitle, children }) => (
	<div className={styles.MyAccountTemplate}>
		<div className="container-fluid ">
			<div className="row justify-content-center">
				<div className="col offset-md-3 col-lg-5">
					<div className={styles.header}>
						<TitleBack action={linkBack || '#'} title={title} />
						<h6 className={styles.subTitle}>{subtitle}&nbsp;</h6>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="d-none d-lg-block col-lg-3">
					<MyAccountMenu />
				</div>
				<div className="col col-lg-5">{children}</div>
			</div>
		</div>
	</div>
);
