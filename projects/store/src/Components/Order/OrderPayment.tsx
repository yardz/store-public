import React from 'react';
import { usePayment } from '@App/Hooks/usePayment';
import { OrderSectionTitle } from './OrderSectionTitle';
import { Button } from '../Button';
import { Order } from '@lab77store/domain';
import { Payment } from '../Payment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

import styles from './OrderPayment.module.scss';
import { errorLogger } from '@App/Utils/logger';

interface Props {
	order: Order;
}
export const OrderPayment: React.FC<Props> = ({ order }) => {
	const payment = usePayment({ orderId: order._id });
	if (!payment.data) return null;
	const canPay = payment.data.status === 'pending' && order.status === 'pending payment';
	return (
		<section className={styles.OrderPayment}>
			<OrderSectionTitle title="Pagamento" />

			<div className="container-fluid g-0 overflow-hidden">
				<div className="row">
					<div className="col">
						<div className={styles.content}>
							<div className={styles.icon}>
								<Payment.PaymentIcon paymentMethod={payment.data.method} />
							</div>
							<div className={styles.text}>
								<div className="text-uppercase">
									<Payment.PaymentName paymentMethod={payment.data.method} />
								</div>
								<div>{payment.data.installments > 1 ? `Parcelado ${payment.data.installments}x` : 'A vista'}</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{canPay && (
				<div className="container-fluid g-0 overflow-hidden">
					<div className="row g-1">
						{payment.data.meta?.billet?.url && (
							<div className="col">
								<a className="btn btn-success fullWidth" href={payment.data.meta.billet.url} target="_new">
									Boleto
								</a>
							</div>
						)}
						{payment.data.meta?.billet?.barCode && (
							<div className="col-2 col-lg-1">
								<Button
									fullWidth
									color="success"
									onClick={() => {
										navigator.clipboard
											.writeText(payment.data?.meta?.billet?.barCode || '')
											.then()
											.catch(errorLogger);
									}}>
									<FontAwesomeIcon icon={faCopy} />
								</Button>
							</div>
						)}
					</div>
				</div>
			)}
		</section>
	);
};
