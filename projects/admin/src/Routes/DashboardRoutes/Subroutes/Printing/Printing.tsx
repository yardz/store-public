import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubroutePrintingPaths = [RouteNames.printing];
export const SubroutesPrinting: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.printing} exact component={Pages.Printing} />
		</Switch>
	);
};
