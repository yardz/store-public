import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteStampingPaths = [RouteNames.stamping];
export const SubroutesStamping: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.stamping} exact component={Pages.Stamping} />
		</Switch>
	);
};
