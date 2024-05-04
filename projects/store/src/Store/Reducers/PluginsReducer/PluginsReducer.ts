/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@App/Store';

export interface Plugins {
	smartHint: boolean;
}

const initialState: Plugins = {
	smartHint: false,
};

export const pluginsSlice = createSlice({
	name: 'Plugins',
	initialState,
	reducers: {
		active: (state, action: PayloadAction<{ plugin: 'smartHint' }>) => {
			if (action.payload.plugin === 'smartHint') {
				state.smartHint = true;
			}
		},
	},
});

export const pluginsActions = pluginsSlice.actions;
export const pluginsSelector = {
	smartHint: (state: RootState) => state.plugins.smartHint,
};
