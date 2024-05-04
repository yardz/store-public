import { useState } from '../useState';

export const useToggle = (initialState?: boolean): [boolean, (toggleOption?: boolean) => void] => {
	const [toggle, changeToggle] = useState(!!initialState);
	const change = (toggleOption?: boolean) => {
		if (toggleOption === undefined) {
			changeToggle(!toggle);
		} else {
			changeToggle(toggleOption);
		}
	};
	return [toggle, change];
};
