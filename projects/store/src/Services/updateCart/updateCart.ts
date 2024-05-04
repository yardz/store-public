import { CartItem } from '@lab77store/database';
import axios from 'axios';

export const updateCart = async () => {
	const response = await axios.post<{ update: CartItem[]; removed: CartItem[] }>('/carts/update');
	return response.data;
};
