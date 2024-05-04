import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteSeamPaths = [RouteNames.seam];
export const SubroutesSeam: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.seam} exact component={Pages.Seam} />
		</Switch>
	);
};
