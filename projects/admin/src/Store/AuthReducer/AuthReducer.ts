import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'Store';
import { Permissions } from '@lab77store/database';
import { User } from '@lab77store/domain';
import initialPermissions from '@lab77store/database/lib/permissions.json';
import { merge } from 'lodash';

export interface Auth {
	uid: string | null;
	email: string | null;
	auth: 'pristine' | 'unauthorized' | 'authorized';
	permissions: Permissions;
	user: User | null;
}

const initialState: Auth = {
	uid: null,
	email: null,
	user: null,
	auth: 'pristine',
	permissions: initialPermissions,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<{ uid: string; email: string; user: User }>) => {
			state.uid = action.payload.uid;
			state.email = action.payload.email;
			state.user = action.payload.user;
			state.auth = 'authorized';
		},
		setPermissions: (state, action: PayloadAction<{ permissions: Partial<Permissions> }>) => {
			state.permissions = merge(state.permissions, action.payload.permissions);
		},
		logout: state => {
			state.uid = null;
			state.email = null;
			state.user = null;
			state.permissions = JSON.parse(JSON.stringify(initialPermissions));
			state.auth = 'unauthorized';
		},
	},
});

export const authActions = authSlice.actions;
export const authSelect = {
	uid: (state: RootState) => state.auth.uid,
	email: (state: RootState) => state.auth.email,
	auth: (state: RootState) => state.auth.auth,
	user: (state: RootState) => state.auth.user,
	permissions: (state: RootState) => state.auth.permissions,
};
