import React, { useEffect, useRef } from 'react';
import { getAddressByCep } from '@App/Services';
import forEach from 'lodash/forEach';
import { toast } from 'react-toastify';
import { onlyNumbers } from '@App/Utils';

interface Props {
	zipCode: string;
	setFieldValue: (field: string, value: string | undefined) => void;
}

export const CompleteAddress: React.FC<Props> = ({ setFieldValue, zipCode }) => {
	const ref = useRef(zipCode);
	useEffect(() => {
		if (ref.current !== zipCode && onlyNumbers(zipCode).length === 8) {
			getAddressByCep({ zipCode })
				.then(address => {
					ref.current = zipCode;
					setFieldValue('complement', '');
					forEach(address, (value, field) => {
						if (!['zipCode'].includes(field)) {
							setFieldValue(field, value);
						}
					});
				})
				.catch(() => toast.error('Não foi encontrado um endereço para este cep'));
		}
	}, [setFieldValue, zipCode, ref]);
	return null;
};
