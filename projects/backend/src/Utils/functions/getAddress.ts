import { Address } from '@lab77store/domain';
import axios from 'axios';

interface Response {
	cep: string;
	state: string;
	city: string;
	neighborhood: string;
	street: string;
	service: string;
}

export const getAddress = async ({ zipCode }: { zipCode: string }): Promise<Address> => {
	const { data } = await axios.get<Response>(`https://brasilapi.com.br/api/cep/v2/${zipCode}`);
	const insertAt = (str: string, sub: string, pos: number) => `${str.slice(0, pos)}${sub}${str.slice(pos)}`;
	return {
		zipCode: insertAt(data.cep, '-', 5),
		country: 'Brasil',
		state: data.state,
		city: data.city,
		neighborhood: data.neighborhood,
		street: data.street,
		number: '',
	};
};
