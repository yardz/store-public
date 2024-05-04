import React, { useEffect } from 'react';
//@ts-ignore
import isValidCep from '@brazilian-utils/is-valid-cep';
import { Notifications } from 'Utils';
import axios from 'axios';

interface UpdateCepProp {
	zipCode: string;
	change: (field: string, value: string) => void;
	listFieldName: {
		state: string;
		city: string;
		neighborhood: string;
		street: string;
	};
}

interface Cep {
	cep: string;
	state: string;
	city: string;
	neighborhood: string;
	street: string;
}

const getCep = async (zipCode: string): Promise<Cep> => {
	const { data } = await axios.get<Cep>(`https://brasilapi.com.br/api/cep/v2/${zipCode}`);
	return data;
};

export const UpdateCep: React.FC<UpdateCepProp> = ({ zipCode, change, listFieldName }) => {
	useEffect(() => {
		if (!!zipCode && isValidCep(zipCode)) {
			getCep(zipCode)
				.then(address => {
					const { street, neighborhood, state, city } = listFieldName;

					change(state, address.state);
					change(city, address.city);
					change(neighborhood, address.neighborhood);
					change(street, address.street);
				})
				.catch(({ error }) => {
					Notifications.error('Cep não encontrado!!');
					// tslint:disable-next-line: no-console
					// console.log({ error });
				});
		}
		// eslint-disable-next-line
	}, [zipCode]);
	return null;
};
