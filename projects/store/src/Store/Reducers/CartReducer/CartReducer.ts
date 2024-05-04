/* eslint-disable no-param-reassign */

import { CartItem } from '@lab77store/database';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@App/Store';
import { sortBy } from 'lodash';

import * as asyncActions from './asyncActions';

interface Cart {
	items: CartItem[];
}
const initialState: Cart = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		clear: () => initialState,
		setItems: (state, action: PayloadAction<{ items: CartItem[] }>) => {
			state.items = sortBy(action.payload.items, 'name');
		},
	},
});

export const cartActions = { ...asyncActions };
export const cartSelector = {
	items: (state: RootState) => state.cart.items,
};
