import { ApplicationHooksUserRegister } from '@App/Plugins/ApplicationHooks/ApplicationHooksUserRegister';
import { PersonalData, User } from '@lab77store/domain';
import axios from 'axios';

interface RegisterUser {
	password: string;
	personalData: PersonalData;
}

export const registerUser = async ({ password, personalData }: RegisterUser) => {
	const response = await axios.post<User>('/users/register', { password, personalData });
	ApplicationHooksUserRegister({ user: response.data });
	return response.data;
};
