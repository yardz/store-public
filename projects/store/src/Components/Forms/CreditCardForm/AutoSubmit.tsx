import { useEffect, useRef } from 'react';
import isEqual from 'lodash/isEqual';

export interface Props<T> {
	isSubmitting: boolean;
	isValid: boolean;
	values: T;
	submit: () => void;
}
export function AutoSubmit<T>({ isSubmitting, isValid, values, submit }: Props<T>) {
	const lastSubmitted = useRef<T | undefined>();
	useEffect(() => {
		if (isValid && !isSubmitting && !isEqual(lastSubmitted.current, values)) {
			lastSubmitted.current = values;
			submit();
		}
	}, [isSubmitting, isValid, submit, values]);

	return null;
}
