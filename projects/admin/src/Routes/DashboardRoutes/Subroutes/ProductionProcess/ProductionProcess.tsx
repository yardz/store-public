import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteProductionProcessPaths = [RouteNames.productionProcess];
export const SubroutesProductionProcess: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.productionProcess} exact component={Pages.ProductionProcess} />
		</Switch>
	);
};
