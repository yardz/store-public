import { ProductAdmin } from '@lab77store/domain';
import axios from 'axios';

export const getProduct = async (_id: string): Promise<ProductAdmin> => {
	const resp = await axios.get<ProductAdmin>(`/products-admin/${_id}`);
	return resp.data;
};
