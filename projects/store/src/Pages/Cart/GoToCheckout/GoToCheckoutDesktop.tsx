import { CheckoutResume, ShowOnDevice } from '@App/Components';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './GoToCheckoutDesktop.module.scss';

interface Props {}
export const GoToCheckoutDesktop: React.FC<Props> = () => (
	<ShowOnDevice.ShowDesktop>
		<div className={styles.GoToCheckoutDesktop}>
			<div className="container-fluid g-0 overflow-hidden">
				<div className="row">
					<div className="col-12">
						<div className={styles.checkoutResume}>
							<CheckoutResume />
						</div>
					</div>
					<div className="col-12">
						<Link href="/pagamento">
							<a className={classNames('btn', 'btn-success', 'fullWidth')}>Finalizar Compra</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</ShowOnDevice.ShowDesktop>
);
