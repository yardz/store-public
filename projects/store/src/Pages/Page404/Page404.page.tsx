import React, { useEffect } from 'react';
import { Button, Spining } from '@App/Components';
import { useRouter } from 'next/router';
import { LogoImgSvg } from '@App/Assets/images/LogoImgSvg';
import { useIsActiveSmartHint } from '@App/Plugins/SmartHint/useIsActiveSmartHint';
import { SmartHintSetPage } from '@App/Plugins/SmartHint/SmartHintSetPage';

import styles from './Page404.module.scss';

export interface Page404Props {}
export const Page404: React.FC<Page404Props> = () => {
	const { isFallback } = useRouter();
	const router = useRouter();

	const isActiveSmartHint = useIsActiveSmartHint();

	useEffect(() => {
		if (router.isFallback) return;
		if (!isActiveSmartHint) return;
		SmartHintSetPage({ page: 'notfound' });
	}, [isActiveSmartHint, router.isFallback]);

	if (isFallback) {
		return <Spining />;
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col">
					<div className={styles.pageNotFoundSection}>
						<LogoImgSvg className={styles.pageNotFoundLogomarca} />
						<h1>Página não encontrada</h1>
						<h3>A página que você solicitou não foi encontrada.</h3>
						<div className={styles.pageNotFoundFooter}>
							<Button color="success" onClick={() => router.back()}>
								Voltar
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
