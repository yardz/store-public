import * as Pages from 'Pages';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RouteNames } from 'Routes/RouteNames';
import { Header, Sidebar } from './Components';
import {
	SubrouteSlidePaths,
	SubroutesSlide,
	SubrouteCategory,
	SubrouteCategoryPaths,
	SubrouteBusinessInformationPaths,
	SubroutesBusinessInformation,
	SubrouteProductPaths,
	SubroutesProduct,
	SubrouteOrderPaths,
	SubroutesOrder,
	SubrouteUserPaths,
	SubroutesUser,
} from './Subroutes';
// import { SubrouteAttributePaths, SubroutesAttribute } from './Subroutes/Atribute';
// import { SubrouteBanners, SubrouteBannersPaths } from './Subroutes/Banners';
// import { SubroutesCarousel, SubroutesCarouselPaths } from './Subroutes/Carousel';
// import { SubroutesCollection, SubroutesCollectionPaths } from './Subroutes/Collection';
// import { SubrouteCouponPaths, SubroutesCoupon } from './Subroutes/Coupon';
// import { SubrouteCustomerPaths, SubroutesCustomer } from './Subroutes/Customer';
// import { SubrouteCuttingPaths, SubroutesCutting } from './Subroutes/Cutting';
// import { SubroutesFlag, SubroutesFlagPaths } from './Subroutes/Flag';
// import { SubroutesMeasuresTable, SubroutesMeasuresTablePaths } from './Subroutes/MeasuresTable';
// import { SubrouteNewSalePaths, SubroutesNewSale } from './Subroutes/NewSale';
// import { SubrouteNotFoundPaths, SubroutesNotFound } from './Subroutes/NotFound';
// import { SubroutePackingPaths, SubroutesPacking } from './Subroutes/Packing';
// import { SubroutePlacePaths, SubroutesPlace } from './Subroutes/';
// import { SubroutePrintingPaths, SubroutesPrinting } from './Subroutes/Printing';
// import { SubrouteProductPaths, SubroutesProduct } from './Subroutes/Product';
// import { SubrouteProductAdjustmentPaths, SubroutesProductAdjustment } from './Subroutes/ProductAdjustment';
// import { SubrouteProductionProcessPaths, SubroutesProductionProcess } from './Subroutes/ProductionProcess';
// import { SubroutesRawMaterial, SubroutesRawMaterialPaths } from './Subroutes/RawMaterial';
// import { SubrouteSalePaths, SubroutesSale } from './Subroutes/Sale';
// import { SubrouteSeamPaths, SubroutesSeam } from './Subroutes/Seam';
// import { SubroutesStamping, SubrouteStampingPaths } from './Subroutes/Stamping';
// import { SubroutesTag, SubrouteTagPaths } from './Subroutes/Tag';

export const DashboardPaths = [
	RouteNames.home,
	...SubrouteSlidePaths,
	// ...SubroutesCarouselPaths,
	// ...SubrouteProductionProcessPaths,
	// ...SubrouteTagPaths,
	// ...SubrouteAttributePaths,
	...SubrouteCategoryPaths,
	// ...SubroutesCollectionPaths,
	// ...SubroutesFlagPaths,
	// ...SubrouteNotFoundPaths,
	// ...SubroutesMeasuresTablePaths,
	// ...SubroutesRawMaterialPaths,
	// ...SubroutePlacePaths,
	// ...SubrouteCouponPaths,
	...SubrouteUserPaths,
	...SubrouteProductPaths,
	...SubrouteOrderPaths,
	// ...SubrouteSalePaths,
	// ...SubrouteNewSalePaths,
	...SubrouteBusinessInformationPaths,
	// ...SubroutePackingPaths,
	// ...SubrouteStampingPaths,
	// ...SubroutePrintingPaths,
	// ...SubrouteCuttingPaths,
	// ...SubrouteSeamPaths,
];

export const DashboardRoutes: React.FC = () => {
	return (
		<>
			<Header />
			{/* <!-- Sidebar menu--> */}
			<div className="app-sidebar__overlay" data-toggle="sidebar" />
			<Sidebar />
			<main className="app-content">
				<Switch>
					<Route path={RouteNames.home} exact component={Pages.Dashboard} />
					<Route path={SubrouteSlidePaths} exact component={SubroutesSlide} />
					<Route path={SubrouteCategoryPaths} exact component={SubrouteCategory} />
					<Route path={SubrouteBusinessInformationPaths} exact component={SubroutesBusinessInformation} />
					<Route path={SubrouteProductPaths} exact component={SubroutesProduct} />
					<Route path={SubrouteOrderPaths} exact component={SubroutesOrder} />
					<Route path={SubrouteUserPaths} exact component={SubroutesUser} />
					{/*
					<Route path={SubrouteBannersPaths} exact component={SubrouteBanners} />
					<Route path={SubrouteProductionProcessPaths} exact component={SubroutesProductionProcess} />
					<Route path={SubrouteTagPaths} exact component={SubroutesTag} />
					<Route path={SubrouteAttributePaths} exact component={SubroutesAttribute} />
					<Route path={SubroutesCollectionPaths} exact component={SubroutesCollection} />
					<Route path={SubroutesFlagPaths} exact component={SubroutesFlag} />
					<Route path={SubroutesMeasuresTablePaths} exact component={SubroutesMeasuresTable} />
					<Route path={SubrouteNotFoundPaths} exact component={SubroutesNotFound} />
					<Route path={SubrouteProductAdjustmentPaths} exact component={SubroutesProductAdjustment} />
					<Route path={SubroutesRawMaterialPaths} exact component={SubroutesRawMaterial} />
					<Route path={SubroutePlacePaths} exact component={SubroutesPlace} />
					<Route path={SubrouteCouponPaths} exact component={SubroutesCoupon} />
					<Route path={SubrouteSalePaths} exact component={SubroutesSale} />
					<Route path={SubrouteNewSalePaths} exact component={SubroutesNewSale} />
					<Route path={SubroutePackingPaths} exact component={SubroutesPacking} />
					<Route path={SubrouteStampingPaths} exact component={SubroutesStamping} />
					<Route path={SubroutePrintingPaths} exact component={SubroutesPrinting} />
					<Route path={SubrouteCuttingPaths} exact component={SubroutesCutting} />
					<Route path={SubrouteSeamPaths} exact component={SubroutesSeam} />
					*/}
					<Redirect to={RouteNames.home} />
				</Switch>
			</main>
		</>
	);
};
