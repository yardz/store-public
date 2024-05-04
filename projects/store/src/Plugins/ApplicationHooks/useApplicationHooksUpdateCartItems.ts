import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { cartSelector } from '@App/Store/Reducers/CartReducer';
import { SmartHintCartItems } from '@App/Plugins/SmartHint/SmartHintCartItems';
import { useIsActiveSmartHint } from '@App/Plugins/SmartHint/useIsActiveSmartHint';

export const useApplicationHooksUpdateCartItems = () => {
	const items = useSelector(cartSelector.items);
	const itemsQuantity = items.reduce((total, item) => total + item.quantity, 0);
	const isActiveSmartHint = useIsActiveSmartHint();

	useEffect(() => {
		if (!isActiveSmartHint) return;
		SmartHintCartItems({ cartItems: itemsQuantity });
	}, [isActiveSmartHint, itemsQuantity]);
};
