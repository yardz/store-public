import { UserAdmin } from '@lab77store/domain';
import { usersService } from 'Services/usersService';
import useSWR from 'swr';

// Implementar o hook corretamente
export const useUser = (uid: string) => {
	const users = useSWR<UserAdmin>(['get-users', uid], (...keys) => usersService.getUser(keys[1]));
	return {
		isLoading: !users.error && users.data === undefined,
		...users,
	};
};
