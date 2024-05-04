import React, { useState } from 'react';
import { Delivery } from '@lab77store/domain';
import { InputText } from '@App/Components/InputText';
import { onlyNumbers } from '@App/Utils';
import { Button } from '@App/Components';
import { getDeliveryOptions } from '@App/Services';
import { useSelector } from 'react-redux';
import { orderSelector } from '@App/Store/Reducers/OrderReducer';
import to from 'await-to-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface Props {
	setOptions: (options: Delivery[]) => void;
}

export const DeliveryForm: React.FC<Props> = ({ setOptions }) => {
	const [zipCode, setZipCode] = useState<string>('');
	const [isValid, setIsValid] = useState(true);
	const [isLoading, setLoading] = useState(false);
	const resume = useSelector(orderSelector.resume);
	const coupon = useSelector(orderSelector.coupon);

	const label = isValid ? 'Aplicar' : 'Inválido';

	return (
		<section className="container-fluid g-0 overflow-hidden">
			<div className="row g-0">
				<div className="col-8">
					<InputText
						id="input-delivery"
						status={!isValid ? 'error' : undefined}
						mask="99999-999"
						value={zipCode}
						label="FRETE"
						aria-label="frete"
						onBlur={() => {
							if (onlyNumbers(zipCode).length !== 8) {
								setZipCode('');
							}
						}}
						onChange={event => setZipCode(event.target.value)}
					/>
				</div>
				<div className="col-4 align-self-end">
					<Button
						fullWidth
						disabled={isLoading}
						color={isValid ? 'primary' : 'danger'}
						onClick={async () => {
							if (!zipCode || onlyNumbers(zipCode).length !== 8) {
								setOptions([]);
								setIsValid(false);
								return;
							}
							setLoading(true);
							const [err, deliveryOptions] = await to(
								getDeliveryOptions({ zipCode, total: resume.discountItemsPrice, coupon: coupon?.code }),
							);
							setLoading(false);
							if (err || !deliveryOptions) {
								setOptions([]);
								setIsValid(false);

								return;
							}
							setOptions(deliveryOptions);
							setIsValid(true);
						}}>
						{!isLoading ? label : <FontAwesomeIcon icon={faSpinner} pulse />}
					</Button>
				</div>
			</div>
		</section>
	);
};
