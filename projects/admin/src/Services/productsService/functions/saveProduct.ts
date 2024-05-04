import { ProductAdmin } from '@lab77store/domain';
import axios from 'axios';

export const saveProduct = async ({ _id, ...product }: ProductAdmin): Promise<ProductAdmin> => {
	if (!!_id) {
		const update = await axios.put<ProductAdmin>(`/products-admin/${_id}`, product);
		return update.data;
	}
	const create = await axios.post<ProductAdmin>('/products-admin', product);
	return create.data;
};
