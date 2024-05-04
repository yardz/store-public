import React from 'react';

import { Route } from 'react-router-dom';

import { authSelect } from 'Store/AuthReducer';
import { useSelector } from 'react-redux';

import * as Pages from 'Pages';

import { DashboardRoutes } from './DashboardRoutes';
import { UnauthenticatedRoutes } from './UnauthenticatedRoutes';

export const Routes: React.FC = () => {
	const auth = useSelector(authSelect.auth);

	if (auth === 'pristine') {
		return <Route component={Pages.Loading} />;
	}

	if (auth === 'unauthorized') {
		return <Route component={UnauthenticatedRoutes} />;
	}
	return <Route component={DashboardRoutes} />;
};
