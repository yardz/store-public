import React from 'react';
import { Button, CheckoutResumeAccordion } from '@App/Components';
import { useNextStepEnabled } from './useNextStepEnabled';
import { useFinishOrder } from './useFinishOrder';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutActions, checkoutSelector } from '@App/Store/Reducers/CheckoutReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './NextStep.module.scss';

interface Props {}

export const NextStep: React.FC<Props> = () => {
	const nextStepEnabled = useNextStepEnabled();
	const step = useSelector(checkoutSelector.step);
	const dispatch = useDispatch();
	const [enableCheckout, checkout] = useFinishOrder();

	const enable = step < 3 ? nextStepEnabled : nextStepEnabled && enableCheckout;

	let btnLabel: JSX.Element = <>Prosseguir</>;
	if (step === 3) {
		btnLabel = enableCheckout ? (
			<>Finalizar pedido</>
		) : (
			<>
				Processando <FontAwesomeIcon icon={faSpinner} pulse />
			</>
		);
	}

	return (
		<div className={styles.NextStep}>
			<div className="container-fluid container-fluid g-0 overflow-hidden">
				<div className="row">
					<div className="col-12">
						<CheckoutResumeAccordion />
					</div>
					<div className="col-12 pb-3">
						<Button
							color={enable ? 'success' : 'primary'}
							fullWidth
							disabled={!enable}
							onClick={() => {
								if (step < 3) {
									dispatch(checkoutActions.gotToStep({ step: step + 1 }));
									window.scrollTo({ top: 0, behavior: 'smooth' });
								} else {
									checkout();
								}
							}}>
							{btnLabel}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
