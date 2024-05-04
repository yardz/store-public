import { Address } from '@lab77store/domain';
import axios from 'axios';

interface ApiAddres {
	cep: string;
	city: string;
	neighborhood: string;
	state: string;
	street: string;
}

const insertAt = (str: string, sub: string, pos: number) => `${str.slice(0, pos)}${sub}${str.slice(pos)}`;

export const getAddressByCep = async ({ zipCode }: { zipCode: string }): Promise<Address> => {
	const response = await axios.get<ApiAddres>(`https://brasilapi.com.br/api/cep/v1/${zipCode}`);
	return {
		zipCode: insertAt(response.data.cep, '-', 5),
		country: 'Brasil',
		state: response.data.state,
		city: response.data.city,
		neighborhood: response.data.neighborhood,
		street: response.data.street,
		number: '',
	};
};
