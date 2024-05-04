import { Pagination, UserAdminFilter } from '@lab77store/domain';
import { usersService } from 'Services/usersService';
import useSWR from 'swr';

// Implementar o hook corretamente
export const useUsers = (pagination: Pagination, filter: UserAdminFilter) => {
	const users = useSWR(['get-users', pagination, filter], (...keys) => usersService.getUsers(keys[1], keys[2]));
	return {
		isLoading: !users.error && users.data === undefined,
		...users,
	};
};
