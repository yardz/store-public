import { UserAddress } from '@lab77store/domain';
import axios from 'axios';

export const saveAddress = async ({ _id, ...address }: UserAddress): Promise<UserAddress> => {
	if (!!_id) {
		const update = await axios.put<UserAddress>(`/addresses/${_id}`, { address });
		return update.data;
	}
	const create = await axios.post<UserAddress>('/addresses/', { address });
	return create.data;
};
