import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteNotFoundPaths = [RouteNames.notFound];
export const SubroutesNotFound: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.notFound} exact component={Pages.NotFound} />
		</Switch>
	);
};
