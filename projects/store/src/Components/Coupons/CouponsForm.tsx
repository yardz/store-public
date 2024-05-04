import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions, orderSelector } from '@App/Store/Reducers/OrderReducer';
import { getCoupon } from '@App/Services';
import to from 'await-to-js';
import { Button } from '../Button';
import { InputText } from '../InputText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface Props {}

export const CouponForm: React.FC<Props> = () => {
	const dispatch = useDispatch();

	const orderCoupon = useSelector(orderSelector.coupon);
	const [coupon, setCoupon] = useState(orderCoupon?.code || '');
	const [isValidCoupon, setIsValidCoupon] = useState('applied');
	const [isLoading, setLoading] = useState(false);
	const [isShippingFree, setShippingFree] = useState(false);
	const sippingFreeMsg = 'O seu cupon da direito a frete grátis. Quando calcular o frete, essa opção estará disponível!';

	useEffect(() => {
		if (orderCoupon) {
			setCoupon(orderCoupon.code);
		}
	}, [orderCoupon]);

	let label = '';
	let status: 'success' | 'error' | undefined;
	let color: 'primary' | 'success' | 'danger';

	if (!coupon) {
		label = 'Aplicar';
		status = undefined;
		color = 'primary';
	} else {
		switch (isValidCoupon) {
			case 'applied':
				label = 'Aplicado';
				status = 'success';
				color = 'success';
				break;
			case 'invalid':
				label = 'Inválido';
				status = 'error';
				color = 'danger';
				break;
			default:
				label = 'Aplicar';
				status = undefined;
				color = 'primary';
		}
	}

	return (
		<section className="container-fluid g-0 overflow-hidden">
			<div className="row g-0">
				<div className="col-8">
					<InputText
						id="input-cupon"
						status={status}
						label="CUPOM DE DESCONTO"
						aria-label="Cupom de desconto"
						aria-describedby="Digite um cupom de desconto"
						value={coupon}
						onChange={event => {
							setCoupon(event.target.value);
							setIsValidCoupon('default');
							setShippingFree(false);
						}}
					/>
				</div>
				<div className="col-4 align-self-end">
					<Button
						fullWidth
						disabled={isLoading}
						color={color}
						onClick={async () => {
							if (!coupon) {
								dispatch(orderActions.setCoupon({}));
								setIsValidCoupon('default');
								return;
							}
							setLoading(true);
							const [err, validCoupon] = await to(getCoupon({ coupon }));
							setIsValidCoupon(validCoupon && validCoupon.active === true ? 'applied' : 'invalid');
							setLoading(false);
							if (err || !validCoupon) {
								// Talvez um log para erros
								return;
							}
							setShippingFree(!!(validCoupon && validCoupon.shipping === 'free'));
							if (validCoupon.code !== orderCoupon?.code) {
								dispatch(orderActions.setCoupon({ coupon: validCoupon }));
							}
						}}>
						{!isLoading ? label : <FontAwesomeIcon icon={faSpinner} pulse />}
					</Button>
				</div>
				<div className="col-12">{isShippingFree ? <label className="text-success">{sippingFreeMsg}</label> : ''}</div>
			</div>
		</section>
	);
};
