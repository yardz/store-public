import { PersonalData, User } from '@lab77store/domain';
import axios from 'axios';

export const savePersonalData = async (personalData: PersonalData): Promise<User> => {
	const update = await axios.put<User>(`/users/personal-data`, { personalData });
	return update.data;
};
