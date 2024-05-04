import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubroutePackingPaths = [RouteNames.packing];
export const SubroutesPacking: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.packing} exact component={Pages.Packing} />
		</Switch>
	);
};
