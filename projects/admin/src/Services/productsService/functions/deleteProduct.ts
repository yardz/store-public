import { ProductAdmin } from '@lab77store/domain';
import axios from 'axios';

export const deleteProduct = async (_id: string): Promise<ProductAdmin> => {
	const del = await axios.delete<ProductAdmin>(`/products-admin/${_id}`);
	return del.data;
};
