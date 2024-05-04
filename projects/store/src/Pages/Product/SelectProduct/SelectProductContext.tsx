import { createContext } from 'react';
import { SelectProductOptions, SelectProductOptionsActions } from './useSelectProductOptions';
import { Variation } from '@lab77store/domain';

export interface ProductMessage {
	type: 'success' | 'danger' | 'warning';
	message: string;
}

export const SelectProductContext = createContext<{
	messages: ProductMessage[];
	setMessages: (messages: ProductMessage[]) => void;
	selectProductOptions: SelectProductOptions;
	dispatchSelectProductOptions: SelectProductOptionsActions;
	variation: Variation | undefined;
}>({
	messages: [],
	setMessages: () => undefined,
	selectProductOptions: {
		attributes: [],
		selected: {},
		completed: false,
	},
	dispatchSelectProductOptions: () => undefined,
	variation: undefined,
});
