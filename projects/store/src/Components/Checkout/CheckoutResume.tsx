import React from 'react';

import { useSelector } from 'react-redux';
import { orderSelector } from '@App/Store/Reducers/OrderReducer';
import { CheckoutResumeItem } from './CheckoutResumeItem';
import styles from './CheckoutResume.module.scss';

interface Props {}

export const CheckoutResume: React.FC<Props> = () => {
	const orderResume = useSelector(orderSelector.resume);
	const orderDelivery = useSelector(orderSelector.delivery);
	const orderCoupon = useSelector(orderSelector.coupon);

	const hasCoupon = orderCoupon?.percent || orderCoupon?.value;
	return (
		<div className={styles.checkOutResume}>
			<div className="container-fluid g-0 overflow-hidden">
				<div className="row">
					<div className="col-12">
						<CheckoutResumeItem title="Produtos" price={orderResume.originalItemsPrice} />
					</div>
					{hasCoupon && (
						<div className="col-12">
							<div className={styles.checkoutResumeItem}>
								<CheckoutResumeItem title="Desconto" price={orderResume.discountPrice} />
							</div>
						</div>
					)}
					{orderDelivery && (
						<div className="col-12">
							<div className={styles.checkoutResumeItem}>
								<CheckoutResumeItem title="Frete" price={orderResume.deliveryPrice} />
							</div>
						</div>
					)}
					<div className="col-12">
						<div className={styles.totalAmountPayable}>
							<CheckoutResumeItem title="Total a pagar" price={orderResume.total} originalPrice={orderResume.originalTotalPrice} mainItem />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
