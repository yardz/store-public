import { Pagination, UserAdminListItem, PaginateList, UserAdminFilter } from '@lab77store/domain';
import axios from 'axios';
import { cleanObject } from 'Utils';

export const getUsers = async (pagination: Pagination, filter: UserAdminFilter) => {
	const resp = await axios.get<PaginateList<UserAdminListItem>>('/users/admin-users', {
		params: { ...cleanObject(filter), ...pagination },
	});
	return resp.data;
};
