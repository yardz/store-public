import { getAddresses } from '@App/Services';
import { authSelector } from '@App/Store/Reducers/AuthReducer';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

export const useAddresses = () => {
	const auth = useSelector(authSelector.auth);
	const isReady = auth === 'authenticated';
	const addresses = useSWR(isReady ? 'getAddresses' : null, getAddresses);
	const isLoading = isReady && !addresses.error && !addresses.data;
	return { ...addresses, isLoading };
};
