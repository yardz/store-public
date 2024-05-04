import React from 'react';
import * as Pages from 'Pages';

import { Switch, Route, Redirect } from 'react-router-dom';
import { RouteNames } from 'Routes/RouteNames';

export const UnauthenticatedPaths = [RouteNames.login, RouteNames.forgotPassword];

export const UnauthenticatedRoutes: React.FC = () => {
	return (
		<Switch>
			<Route path={UnauthenticatedPaths} component={Pages.Login} />
			<Redirect to={RouteNames.login} />
		</Switch>
	);
};
