import React from 'react';

import { useSelector } from 'react-redux';
import { orderSelector } from '@App/Store/Reducers/OrderReducer';
import { Accordion } from '../Accordion';
import { CheckoutResumeItem } from './CheckoutResumeItem';

import styles from './CheckoutResumeAccordion.module.scss';

interface Props {
	direction?: 'up' | 'down';
	disableClosableIcon?: boolean;
}

export const CheckoutResumeAccordion: React.FC<Props> = ({ direction = 'up', disableClosableIcon }) => {
	const orderResume = useSelector(orderSelector.resume);
	const orderDelivery = useSelector(orderSelector.delivery);
	const orderCoupon = useSelector(orderSelector.coupon);

	const hasCoupon = orderCoupon?.percent || orderCoupon?.value;
	return (
		<div className={styles.CheckoutResumeAccordion}>
			<Accordion
				inverse={direction === 'up'}
				disableClosableIcon={disableClosableIcon}
				title={
					<div className={styles.CheckoutResumeAccordionItem}>
						<CheckoutResumeItem title="Total a pagar" originalPrice={orderResume.originalTotalPrice} price={orderResume.total} mainItem />
					</div>
				}>
				<div className={styles.CheckoutResumeAccordionItem}>
					<CheckoutResumeItem title="Produtos" price={orderResume.originalItemsPrice} />
				</div>
				<>
					{hasCoupon && (
						<div className={styles.CheckoutResumeAccordionItem}>
							<CheckoutResumeItem title="Desconto" price={orderResume.discountPrice} />
						</div>
					)}
				</>
				<>
					{orderDelivery && (
						<div className={styles.CheckoutResumeAccordionItem}>
							<CheckoutResumeItem title="Frete" price={orderResume.deliveryPrice} />
						</div>
					)}
				</>
			</Accordion>
		</div>
	);
};
