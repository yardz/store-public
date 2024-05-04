import React from 'react';
import { RestrictedContent, SliderRecommendation } from '@App/Components';
import Head from 'next/head';
import { useCartItemsUpdate, useComponentDidMount } from '@App/Hooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutActions, checkoutSelector } from '@App/Store/Reducers/CheckoutReducer';
import { CheckoutPageSteps } from './CheckoutPageSteps';
import { CheckoutContainer, NextStep, ProgressBar } from './Components';
import classNames from 'classnames';
import { isIOS } from '@App/Utils/isIOS';

import styles from './Checkout.page.module.scss';
import { orderActions } from '@App/Store/Reducers/OrderReducer';
import { useApplicationHooksStartCheckout } from '@App/Plugins/ApplicationHooks/useApplicationHooksStartCheckout';

export interface CheckoutPageProps {}

export const CheckoutPage: React.FC<CheckoutPageProps> = () => {
	const dispatch = useDispatch();
	const ios = isIOS();
	const step = useSelector(checkoutSelector.step);

	useComponentDidMount(() => {
		dispatch(orderActions.setAddress({}));
		dispatch(checkoutActions.init());
	});
	useApplicationHooksStartCheckout();
	useCartItemsUpdate();

	return (
		<>
			<Head>
				<meta name="description" content="checkout" data-rh="true" />
			</Head>
			<section className="container-fluid g-0 overflow-hidden">
				<div className="row">
					<div className="col">
						<SliderRecommendation position={1} />
					</div>
				</div>
			</section>
			<RestrictedContent>
				<div className={styles.header}>
					<div className="container-fluid g-0 overflow-hidden">
						<div className="row">
							<div className="col-12">
								<ProgressBar />
							</div>
						</div>
					</div>
				</div>

				<section className="container-fluid g-0 overflow-hidden">
					<div className="row">
						<div className="col">
							<SliderRecommendation position={2} />
						</div>
					</div>
				</section>

				<CheckoutContainer>
					<div className={classNames(styles.contentArea)}>
						<CheckoutPageSteps />
					</div>
				</CheckoutContainer>

				<section className="container-fluid g-0 overflow-hidden">
					<div className="row">
						<div className="col">
							<SliderRecommendation position={3} />
						</div>
					</div>
				</section>

				<div className={classNames(styles.footer, { [styles.ios]: ios })}>
					<CheckoutContainer>
						<div className="container-fluid g-0 overflow-hidden">
							<div className="row g-1">
								<div className={classNames('col-12', 'col-lg-4', { 'offset-lg-4': step === 2, 'offset-lg-8': step === 3 })}>
									<NextStep />
								</div>
							</div>
						</div>
					</CheckoutContainer>
				</div>

				<section className="container-fluid g-0 overflow-hidden">
					<div className="row">
						<div className="col">
							<SliderRecommendation position={4} />
						</div>
					</div>
				</section>
			</RestrictedContent>
		</>
	);
};
