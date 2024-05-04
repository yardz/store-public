import { useState as useStateReact } from 'react';
import { isEqual } from 'lodash';

export const useState = <T>(initialState: T | (() => T)): [T, (newState: T) => void] => {
	const [state, changeState] = useStateReact(initialState);
	const change = (newState: T) => {
		if (!isEqual(state, newState)) {
			changeState(newState);
		}
	};
	return [state, change];
};
