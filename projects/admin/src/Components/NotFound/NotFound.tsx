import React from 'react';

import styles from './NotFound.module.scss';

interface Props {
	img?: JSX.Element;
	title?: string;
	subtitle?: string;
	button?: JSX.Element;
}

export const NotFound: React.FC<Props> = ({ img, title, subtitle, button }) => {
	return (
		<div className={styles.notFoundBackground}>
			<div className={styles.box}>
				{img && <div className={styles.notFoundLogo}>{img}</div>}
				<div className={styles.notFoundTitle}>{title ? title : 'Página não encontrada'}</div>
				<div className={styles.notFoundSubTitle}>{subtitle ? subtitle : 'A página que você solicitou não foi encontrada'}</div>
				{button && <div>{button}</div>}
			</div>
		</div>
	);
};
