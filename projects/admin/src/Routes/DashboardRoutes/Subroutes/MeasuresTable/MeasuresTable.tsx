import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubroutesMeasuresTablePaths = [RouteNames.measuresTable.list, RouteNames.measuresTable.add, RouteNames.measuresTable.edit];
export const SubroutesMeasuresTable: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.measuresTable.list} exact component={Pages.MeasuresTable.list} />
			<Route path={RouteNames.measuresTable.add} exact component={Pages.MeasuresTable.add} />
			<Route path={RouteNames.measuresTable.edit} exact component={Pages.MeasuresTable.edit} />
		</Switch>
	);
};
