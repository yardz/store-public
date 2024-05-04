import { UserAddress } from '@lab77store/domain';
import axios from 'axios';

export const getAddresses = async (): Promise<UserAddress[]> => {
	const response = await axios.get<UserAddress[]>(`/addresses`);
	return response.data;
};
