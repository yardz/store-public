import React from 'react';
import { PaymentMethod } from '@lab77store/domain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';

interface Props {
	paymentMethod: PaymentMethod;
	className?: string;
}
export const PaymentIcon: React.FC<Props> = ({ paymentMethod, className }) => {
	if (paymentMethod === 'billet') {
		return <FontAwesomeIcon className={className} icon={faBarcode} />;
	}
	if (paymentMethod === 'credit card') {
		return <FontAwesomeIcon className={className} icon={faCreditCard} />;
	}
	if (paymentMethod === 'money') {
		return <FontAwesomeIcon className={className} icon={faMoneyBillAlt} />;
	}
	return null;
};
