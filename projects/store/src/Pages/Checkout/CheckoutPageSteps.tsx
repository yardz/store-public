import React from 'react';
import { checkoutSelector } from '@App/Store/Reducers/CheckoutReducer';
import { useSelector } from 'react-redux';
import { PageStep, Steps } from './Components';

import styles from './CheckoutPageSteps.module.scss';

interface Props {}

export const CheckoutPageSteps: React.FC<Props> = () => {
	const step = useSelector(checkoutSelector.step);

	return (
		<div className="container-fluid g-0 overflow-hidden">
			<div className="row g-1 justify-content-center">
				<div className="col-12 col-lg-4">
					<PageStep disabled={step !== 1} title="Endereço" className={styles.divider}>
						<Steps.PersonalData />
					</PageStep>
				</div>
				<div className="col-12 col-lg-4">
					<PageStep disabled={step !== 2} title="Entrega" className={styles.divider}>
						<Steps.Delivery />
					</PageStep>
				</div>
				<div className="col-12 col-lg-4">
					<PageStep disabled={step !== 3} title="Pagamento">
						<Steps.Payment />
					</PageStep>
				</div>
			</div>
		</div>
	);
};
