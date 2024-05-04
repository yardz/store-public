import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubroutesCollectionPaths = [RouteNames.collection.list, RouteNames.collection.add, RouteNames.collection.edit];
export const SubroutesCollection: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.collection.list} exact component={Pages.Collection.list} />
			<Route path={RouteNames.collection.add} exact component={Pages.Collection.add} />
			<Route path={RouteNames.collection.edit} exact component={Pages.Collection.edit} />
		</Switch>
	);
};
