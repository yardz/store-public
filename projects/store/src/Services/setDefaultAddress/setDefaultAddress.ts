import axios from 'axios';

export const setDefaultAddress = async ({ _id }: { _id: string }): Promise<void> => {
	const update = await axios.post(`/addresses/default/${_id}`);
	return update.data;
};
