import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Pages from 'Pages';

import { RouteNames } from 'Routes/RouteNames';

export const SubrouteSlidePaths = [
	RouteNames.slide.positions,
	RouteNames.slide.imagesList,
	RouteNames.slide.imagesAdd,
	RouteNames.slide.imagesEdit,
];
export const SubroutesSlide: React.FC = () => {
	return (
		<Switch>
			<Route path={RouteNames.slide.positions} exact component={Pages.SlidePosition} />
			<Route path={RouteNames.slide.imagesList} exact component={Pages.SlideImage.list} />
			<Route path={RouteNames.slide.imagesAdd} exact component={Pages.SlideImage.add} />
			<Route path={RouteNames.slide.imagesEdit} exact component={Pages.SlideImage.edit} />
		</Switch>
	);
};
