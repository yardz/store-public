import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteBusinessInformationPaths = [
	RouteNames.businessInformation.institutionalPages.list,
	RouteNames.businessInformation.institutionalPages.add,
	RouteNames.businessInformation.institutionalPages.edit,
];
export const SubroutesBusinessInformation: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.businessInformation.institutionalPages.list} exact component={Pages.InstitutionalPages.list} />
			<Route path={RouteNames.businessInformation.institutionalPages.add} exact component={Pages.InstitutionalPages.add} />
			<Route path={RouteNames.businessInformation.institutionalPages.edit} exact component={Pages.InstitutionalPages.edit} />
		</Switch>
	);
};
