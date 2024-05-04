import { User } from '@lab77store/domain';
import axios from 'axios';

export const getCurrentUser = async (): Promise<User> => {
	const resp = await axios.get<User>('/users/me');
	return resp.data;
};
