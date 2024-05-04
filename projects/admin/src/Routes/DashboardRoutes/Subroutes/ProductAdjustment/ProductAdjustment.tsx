import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteProductAdjustmentPaths = [RouteNames.productAdjustment];
export const SubroutesProductAdjustment: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.productAdjustment} exact component={Pages.ProductAdjustment} />
		</Switch>
	);
};
