import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteOrderPaths = [RouteNames.order.list, RouteNames.order.add, RouteNames.order.edit];
export const SubroutesOrder: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.order.list} exact component={Pages.Order.list} />
			<Route path={RouteNames.order.add} exact component={Pages.Order.add} />
			<Route path={RouteNames.order.edit} exact component={Pages.Order.edit} />
		</Switch>
	);
};
