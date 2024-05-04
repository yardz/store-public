import axios from 'axios';

export const postResetPassword = async ({ uid, email }: { uid: string; email: string }): Promise<string> => {
	const resp = await axios.post<string>(`/users/forgot-password/${uid}`, { email });
	return resp.data;
};
