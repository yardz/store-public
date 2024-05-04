import axios from 'axios';

export const forgotPassword = async (body: { emailOrCpf: string }) => {
	const respose = await axios.post<{ email: string }>('/users/forgot-password', body);
	return respose.data.email;
};
