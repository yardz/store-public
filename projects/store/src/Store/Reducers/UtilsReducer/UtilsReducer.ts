/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@App/Store';

export interface GlobalUtils {
	pageLoading: boolean;
}

const initialState: GlobalUtils = {
	pageLoading: false,
};

export const utilsSlice = createSlice({
	name: 'Utils',
	initialState,
	reducers: {
		setPageLoading: (state, action: PayloadAction<{ pageLoading: boolean }>) => {
			state.pageLoading = action.payload.pageLoading;
		},
	},
});

export const utilsActions = utilsSlice.actions;
export const utilsSelector = {
	pageLoading: (state: RootState) => state.utils.pageLoading,
};
