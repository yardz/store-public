import { ProductAdminSort } from '@lab77store/domain';
import axios from 'axios';

export const getSortList = async ({ start, end }: { start: number; end: number }) => {
	const resp = await axios.get<ProductAdminSort[]>('/products-admin/sort/list', { params: { start, end } });
	return resp.data;
};
