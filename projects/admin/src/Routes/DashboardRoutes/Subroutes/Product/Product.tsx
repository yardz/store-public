import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteProductPaths = [RouteNames.product.list, RouteNames.product.add, RouteNames.product.edit, RouteNames.product.sort];
export const SubroutesProduct: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.product.list} exact component={Pages.Product.list} />
			<Route path={RouteNames.product.add} exact component={Pages.Product.add} />
			<Route path={RouteNames.product.edit} exact component={Pages.Product.edit} />
			<Route path={RouteNames.product.sort} exact component={Pages.Product.sort} />
		</Switch>
	);
};
