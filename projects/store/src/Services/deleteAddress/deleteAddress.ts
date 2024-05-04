import axios from 'axios';

export const deleteAddress = async ({ _id }: { _id: string }): Promise<void> => {
	await axios.delete(`/addresses/${_id}`);
};
