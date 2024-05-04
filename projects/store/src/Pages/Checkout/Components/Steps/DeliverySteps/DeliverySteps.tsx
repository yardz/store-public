import React from 'react';
import { CouponForm, SelectDelivery } from '@App/Components';
import { useDeliveryOptions } from '@App/Hooks';
import { orderSelector } from '@App/Store/Reducers/OrderReducer';
import { cartSelector } from '@App/Store/Reducers/CartReducer';
import { useSelector } from 'react-redux';
import { OrderNote } from './OrderNote';
import { CheckoutCartItem } from './CheckoutCartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './DeliverySteps.module.scss';
import { checkoutSelector } from '@App/Store/Reducers/CheckoutReducer';

interface Props {}

export const DeliverySteps: React.FC<Props> = () => {
	const address = useSelector(orderSelector.address);
	const orderCoupon = useSelector(orderSelector.coupon);
	const orderResume = useSelector(orderSelector.resume);
	const items = useSelector(cartSelector.items);
	const step = useSelector(checkoutSelector.step);

	const deliveryOptions = useDeliveryOptions({
		zipCode: address?.zipCode || '',
		total: orderResume.discountItemsPrice,
		coupon: orderCoupon?.code,
	});

	if (!deliveryOptions.data && step !== 1) {
		return (
			<div className={styles.loading}>
				<FontAwesomeIcon icon={faSpinner} pulse />
			</div>
		);
	}

	return (
		<section className={styles.DeliverySteps}>
			<div className="container-fluid g-0 overflow-hidden">
				<div className="row">
					<div className="col-12">
						<h5 className={styles.title}>Frete</h5>
						<div className={styles.space} />
					</div>
					<div className="col-12">
						{deliveryOptions.data && <SelectDelivery options={deliveryOptions.data} />}
						<div className={styles.space} />
					</div>

					<div className="col-12">
						<OrderNote />
						<div className={styles.space} />
					</div>
					<div className="col-12">
						<CouponForm />
						<div className={styles.space} />
					</div>

					<div className="col-12">
						<h4>RESUMO DO PEDIDO</h4>
						<div className={styles.space} />
						{items.map(item => (
							<CheckoutCartItem key={item.variationId} item={item} />
						))}
						<div className={styles.space} />
					</div>
				</div>
			</div>
		</section>
	);
};
