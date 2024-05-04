import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteTagPaths = [RouteNames.tag];
export const SubroutesTag: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.tag} exact component={Pages.Tag} />
		</Switch>
	);
};
