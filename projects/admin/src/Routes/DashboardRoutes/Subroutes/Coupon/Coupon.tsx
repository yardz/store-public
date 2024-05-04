import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteCouponPaths = [RouteNames.coupon];
export const SubroutesCoupon: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.coupon} exact component={Pages.Coupon} />
		</Switch>
	);
};
