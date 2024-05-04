import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { authSelector } from '@App/Store/Reducers/AuthReducer';
import { OrderDysplay, RestrictedContent, SliderRecommendation } from '@App/Components';
import { useOrder } from '@App/Hooks';
import Link from 'next/link';
import { useApplicationHooksCreateOrder } from '@App/Plugins/ApplicationHooks';

import styles from './CheckoutCompleted.module.scss';

export interface CheckoutCompletedPageProps {
	orderId: string;
}
export const CheckoutCompletedPage: React.FC<CheckoutCompletedPageProps> = ({ orderId }) => {
	const { isFallback } = useRouter();
	const auth = useSelector(authSelector.auth);
	const ready = !isFallback && auth === 'authenticated';
	const order = useOrder({ orderId, ready });
	const loadingOrders = !order.error && !order.data;

	useApplicationHooksCreateOrder({ orderId });

	return (
		<RestrictedContent loading={isFallback || loadingOrders}>
			<Head>
				<meta name="description" content="Detalhes do pedido" data-rh="true" />
			</Head>

			<div className={styles.CheckoutCompletedPage}>
				{order.data && (
					<div className="container-fluid">
						<div className="row">
							<div className="col">
								<SliderRecommendation position={1} />
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-12 col-lg-11">
								<h1>Confirmação do pedido</h1>
								<div>
									<OrderDysplay.Code order={order.data} link />
								</div>
								<div className={styles.space} />
							</div>

							<div className="col-12 col-lg-11">
								<p>Olá,</p>
								<p>
									Obrigado por comprar na loja LAB77. Seu pedido está sendo processado e você será avisado quando os itens forem liberados.
									Você pode acompanhar o status das suas compras acessando{' '}
									<Link href="/minha-conta/meus-pedidos/">
										<a>SEUS PEDIDOS</a>
									</Link>{' '}
									na sua conta de usuário.
								</p>
								<p>
									Você vai receber um e-mail com todos os dados do seu pedido. Lembre-se de verificar sua caixa de SPAM, pois alguns
									gerenciadores de e-mail pode colocar o mesmo nela.
								</p>
								<div className={styles.space} />
							</div>

							<div className="col-12">
								<SliderRecommendation position={2} />
							</div>

							<div className="col-12 col-lg-11">
								<h2>Resumo do pedido</h2>
								<div className={styles.space} />
							</div>

							<div className="col-12 col-lg-11">
								<div>
									{order.data.items.map((item, key) => (
										<OrderDysplay.Item key={key} item={item} imageSize={2} />
									))}
								</div>
								<div>
									<SliderRecommendation position={3} />
								</div>
								<div className={styles.space} />

								<OrderDysplay.Resume order={order.data} />

								<div className={styles.space} />

								<OrderDysplay.Payment order={order.data} />
								<div className={styles.space} />

								<OrderDysplay.DeliveryMethod order={order.data} />
								<div className={styles.space} />

								<OrderDysplay.Delivery delivery={order.data.delivery} />
								<div className={styles.space} />

								<OrderDysplay.Note order={order.data} />
								<div className={styles.space} />

								<div>
									<SliderRecommendation position={4} />
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</RestrictedContent>
	);
};
