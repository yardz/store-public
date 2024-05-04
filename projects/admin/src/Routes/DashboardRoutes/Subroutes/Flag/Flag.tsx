import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubroutesFlagPaths = [RouteNames.flag.list, RouteNames.flag.add, RouteNames.flag.edit];
export const SubroutesFlag: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.flag.list} exact component={Pages.Flag.list} />
			<Route path={RouteNames.flag.add} exact component={Pages.Flag.add} />
			<Route path={RouteNames.flag.edit} exact component={Pages.Flag.edit} />
		</Switch>
	);
};
