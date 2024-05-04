import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteCuttingPaths = [RouteNames.cutting];
export const SubroutesCutting: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.cutting} exact component={Pages.Cutting} />
		</Switch>
	);
};
