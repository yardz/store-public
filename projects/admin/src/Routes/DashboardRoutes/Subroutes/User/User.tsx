import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteUserPaths = [RouteNames.user.list, RouteNames.user.add, RouteNames.user.edit];
export const SubroutesUser: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.user.list} exact component={Pages.User.list} />
			<Route path={RouteNames.user.add} exact component={Pages.User.add} />
			<Route path={RouteNames.user.edit} exact component={Pages.User.edit} />
		</Switch>
	);
};
