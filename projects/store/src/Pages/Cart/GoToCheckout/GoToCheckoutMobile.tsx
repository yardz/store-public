import { CheckoutResumeAccordion, FixedBottom, ShowOnDevice } from '@App/Components';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './GoToCheckoutMobile.module.scss';

interface Props {}
export const GoToCheckoutMobile: React.FC<Props> = () => (
	<ShowOnDevice.ShowMobile>
		<FixedBottom>
			<div className={classNames(styles.GoToCheckoutMobile)}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<CheckoutResumeAccordion direction="down" disableClosableIcon />
						</div>
						<div className="col-12">
							<Link href="/pagamento">
								<a className={classNames('btn', 'btn-success', 'fullWidth', 'btn-lg')}>Finalizar Compra</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</FixedBottom>
	</ShowOnDevice.ShowMobile>
);
