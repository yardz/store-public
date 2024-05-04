import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteAttributePaths = [RouteNames.attribute];
export const SubroutesAttribute: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.attribute} exact component={Pages.Attribute} />
		</Switch>
	);
};
