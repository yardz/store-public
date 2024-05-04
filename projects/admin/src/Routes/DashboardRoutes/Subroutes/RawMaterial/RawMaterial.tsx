import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubroutesRawMaterialPaths = [RouteNames.rawMaterial.list, RouteNames.rawMaterial.add, RouteNames.rawMaterial.edit];
export const SubroutesRawMaterial: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.rawMaterial.list} exact component={Pages.RawMaterial.list} />
			<Route path={RouteNames.rawMaterial.add} exact component={Pages.RawMaterial.add} />
			<Route path={RouteNames.rawMaterial.edit} exact component={Pages.RawMaterial.edit} />
		</Switch>
	);
};
