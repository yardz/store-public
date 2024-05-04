/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@App/Store';
import { User } from '@lab77store/domain';

export interface Auth {
	user: User | null;
	auth: 'pristine' | 'unauthenticated' | 'authenticated';
}

const initialState: Auth = {
	user: null,
	auth: 'pristine',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<{ user: User } | null>) => {
			if (!!action.payload) {
				state.user = action.payload.user;
				state.auth = 'authenticated';
			} else {
				state.user = null;
				state.auth = 'unauthenticated';
			}
		},
	},
});

export const authActions = authSlice.actions;
export const authSelector = {
	uid: (state: RootState) => state.auth.user?.uid || null,
	user: (state: RootState) => state.auth.user,
	auth: (state: RootState) => state.auth.auth,
};
