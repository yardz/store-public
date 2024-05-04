import { authSelect } from 'Store/AuthReducer';
import { useSelector } from 'react-redux';

export const useUid = (): string | null => {
	return useSelector(authSelect.uid);
};
