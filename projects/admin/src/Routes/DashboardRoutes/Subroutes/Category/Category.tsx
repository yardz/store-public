import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteCategoryPaths = [RouteNames.category.list, RouteNames.category.add, RouteNames.category.edit];
export const SubrouteCategory: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.category.list} exact component={Pages.Category.list} />
			<Route path={RouteNames.category.add} exact component={Pages.Category.add} />
			<Route path={RouteNames.category.edit} exact component={Pages.Category.edit} />
		</Switch>
	);
};
