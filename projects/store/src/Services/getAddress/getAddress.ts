import { UserAddress } from '@lab77store/domain';
import axios from 'axios';

export const getAddress = async ({ _id }: { _id: string }): Promise<UserAddress> => {
	const response = await axios.get<UserAddress>(`/addresses/${_id}`);
	return response.data;
};
