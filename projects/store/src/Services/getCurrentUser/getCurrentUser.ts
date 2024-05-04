import { User } from '@lab77store/domain';
import axios from 'axios';

export const getCurrentUser = async () => {
	const response = await axios.get<User>('/users/me');
	return response.data;
};
