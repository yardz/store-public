import { useEffect } from 'react';

export const useComponentDidMount = (execute: () => void): void => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(execute, []);
};
