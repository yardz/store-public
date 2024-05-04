import { UserAdmin } from '@lab77store/domain';
import axios from 'axios';

export const getUser = async (uid: string): Promise<UserAdmin> => {
	const resp = await axios.get<UserAdmin>(`/users/admin-users/${uid}`);
	return resp.data;
};
