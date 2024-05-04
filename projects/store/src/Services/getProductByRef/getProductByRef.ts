import { Product } from '@lab77store/domain';
import axios from 'axios';

export const getProductByRef = async ({ ref }: { ref: string }): Promise<Product> => {
	const response = await axios.get<Product>(`/products/ref/${ref}`);
	return response.data;
};
