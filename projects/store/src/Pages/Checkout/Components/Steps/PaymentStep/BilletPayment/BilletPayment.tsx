import React from 'react';

import styles from './BilletPayment.module.scss';

interface Props {}

export const BilletPayment: React.FC<Props> = () => (
	<section className={styles.BilletPayment}>
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<h5 className={styles.title}>Não fique sem suas peças!</h5>
					<p className={styles.text}>
						Preste atenção no vencimento do boleto! Pode ser que as peças esgotem após o prazo de vencimento do boleto.
					</p>

					<h5 className={styles.title}>Prazo de entrega</h5>
					<p className={styles.text}>
						Seu banco leva até 3 dias para confirmar o pagamento do boleto. O prazo de entrega só começa a valer depois disso. Se tiver
						urgência para receber suas peças, recomendamos o pagamento por cartão.
					</p>
				</div>
			</div>
		</div>
	</section>
);
