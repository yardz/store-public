import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '@App/Store/Reducers/AuthReducer';
import { cartSelector } from '@App/Store/Reducers/CartReducer';
import { useRouter } from 'next/router';
import { GoogleTagManagerInitCheckout } from '@App/Plugins/GoogleTagManager/GoogleTagManagerInitCheckout';

export const useApplicationHooksStartCheckout = () => {
	const { isFallback } = useRouter();
	const auth = useSelector(authSelector.auth);
	const items = useSelector(cartSelector.items);
	const ready = !isFallback && auth === 'authenticated' && items.length > 0;

	useEffect(() => {
		if (!ready) return;
		GoogleTagManagerInitCheckout({ items });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ready]);
};
