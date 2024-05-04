import { ProductAdmin } from '@lab77store/domain';
import axios from 'axios';

interface ProductOrderItem {
	_id: string;
	order: number;
}

export const saveProductOrderList = async (productSortList: ProductOrderItem[]): Promise<ProductAdmin> => {
	const create = await axios.post<ProductAdmin>('/products-admin/sort/list', { productSortList });
	return create.data;
};
