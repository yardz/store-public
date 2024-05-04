import { authSelect } from 'Store/AuthReducer';
import { useSelector } from 'react-redux';
import { Permissions } from '@lab77store/database';

export const useAbilities = (): Permissions => {
	return useSelector(authSelect.permissions);
};
