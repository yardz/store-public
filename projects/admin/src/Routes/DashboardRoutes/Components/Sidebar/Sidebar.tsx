// tslint:disable: max-file-line-count
import React from 'react';
import { useSelector } from 'react-redux';
import { authSelect } from 'Store/AuthReducer';
import { MenuItem, Submenu } from './Components';
import { RouteNames } from 'Routes/RouteNames';
import { SubrouteCategoryPaths, SubrouteUserPaths } from 'Routes/DashboardRoutes/Subroutes';
// import { SubrouteBannersPaths } from '../../Subroutes/Banners';
// import { SubrouteProductionProcessPaths } from '../../Subroutes/ProductionProcess';
// import { SubrouteTagPaths } from '../../Subroutes/Tag';
// import { SubrouteAttributePaths } from '../../Subroutes/Atribute';
// import { SubroutesCollectionPaths } from '../../Subroutes/Collection';
// import { SubroutesFlagPaths } from '../../Subroutes/Flag';
// import { SubroutesMeasuresTablePaths } from '../../Subroutes/MeasuresTable';
// import { SubroutesRawMaterialPaths } from '../../Subroutes/RawMaterial';
// import { SubrouteSlidePaths } from 'Routes/DashboardRoutes/Subroutes';
// import { SubrouteCouponPaths } from '../../Subroutes/Coupon';
// import { SubrouteCustomerPaths } from 'Routes/DashboardRoutes/Subroutes/Customer';
// import { SubroutesCarouselPaths } from 'Routes/DashboardRoutes/Subroutes/Carousel';
// import { SubrouteProductPaths } from 'Routes/DashboardRoutes/Subroutes/Product';

export const Sidebar: React.FC = () => {
	const user = useSelector(authSelect.user);
	return (
		<aside className="app-sidebar">
			<div className="app-sidebar__user">
				{/* <img className="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User" /> */}
				<div>
					<p className="app-sidebar__user-name">{user?.personalData.firstName}</p>
				</div>
			</div>
			<ul className="app-menu">
				<Submenu
					name="Banners & Sliders"
					icon="fa fa-slideshare"
					itens={[
						{ name: 'Posições', path: RouteNames.slide.positions },
						{
							name: 'Imagens',
							path: RouteNames.slide.imagesList,
							match: [RouteNames.slide.imagesList, RouteNames.slide.imagesAdd, RouteNames.slide.imagesEdit],
						},
					]}
				/>
				<li>
					<MenuItem name="Categorias" icon="fa-share-alt" path={RouteNames.category.list} alias={SubrouteCategoryPaths} />
				</li>
				<Submenu
					name="Institucional"
					icon="fa fa-building"
					itens={[
						{
							name: 'Páginas Institucionais',
							path: RouteNames.businessInformation.institutionalPages.list,
							match: [
								RouteNames.businessInformation.institutionalPages.list,
								RouteNames.businessInformation.institutionalPages.add,
								RouteNames.businessInformation.institutionalPages.edit,
							],
						},
					]}
				/>
				{/* <li>
					<MenuItem name="Dashboard" icon="fa-dashboard" path={RouteNames.home} />
				</li> */}
				{/* <li>
					<MenuItem name="Banners" icon="fa-picture-o" path={RouteNames.banner.list} alias={SubrouteBannersPaths} />
				</li> */}
				{/* <li>
					<MenuItem name="Carrossel" icon="fa-sitemap" path={RouteNames.carousel.list} alias={SubroutesCarouselPaths} />
				</li> */}
				{/* <li>
					<MenuItem name="Processos" icon="fa-sitemap" path={RouteNames.productionProcess} alias={SubrouteProductionProcessPaths} />
				</li> */}
				{/* <li>
					<MenuItem name="Atributos" icon="fa-tags" path={RouteNames.attribute} alias={SubrouteAttributePaths} />
				</li> */}

				{/* <li>
					<MenuItem name="Coleções" icon="fa-book" path={RouteNames.collection.list} alias={SubroutesCollectionPaths} />
				</li> */}
				{/* <li>
					<MenuItem name="Tags" icon="fa-tag" path={RouteNames.tag} alias={SubrouteTagPaths} />
				</li> */}
				{/* <li>
					<MenuItem name="Banderinhas" icon="fa-bookmark" path={RouteNames.flag.list} alias={SubroutesFlagPaths} />
				</li> */}
				{/* <li>
					<MenuItem name="Tabela de Medidas" icon="fa-bookmark" path={RouteNames.measuresTable.list} alias={SubroutesMeasuresTablePaths} />
				</li> */}
				{/* <li>
					<MenuItem name="Matéria Prima" icon="fa-leaf" path={RouteNames.rawMaterial.list} alias={SubroutesRawMaterialPaths} />
				</li> */}

				{/* <li>
					<MenuItem name="Cupom" icon="fa-ticket" path={RouteNames.coupon} alias={SubrouteCouponPaths} />
				</li> */}
				<li>
					<MenuItem name="Usuários" icon="fa-id-badge" path={RouteNames.user.list} alias={SubrouteUserPaths} />
				</li>
				<Submenu
					name="Produtos"
					icon="fa-product-hunt"
					itens={[
						{
							name: 'Listar',
							path: RouteNames.product.list,
							match: [RouteNames.product.list, RouteNames.product.add, RouteNames.product.edit],
						},
						{
							name: 'Ordernar',
							path: RouteNames.product.sort,
						},
					]}
				/>

				<Submenu
					name="Pedidos"
					icon="fa fa-money"
					itens={[
						{
							name: 'Pedidos',
							path: RouteNames.order.list,
							match: [RouteNames.order.list, RouteNames.order.add, RouteNames.order.edit],
						},
					]}
				/>

				{/* <Submenu
					name="Comercial"
					icon="fa fa-building"
					itens={[
						{
							name: 'Informações comerciais',
							path: RouteNames.businessInformation,
						},
					]}
				/> */}

				{/* <Submenu
					name="Logística"
					icon="fa fa-th-large"
					itens={[
						{
							name: 'Embalagem',
							path: RouteNames.packing,
						},
						{
							name: 'Estamparia',
							path: RouteNames.stamping,
						},
						{
							name: 'Impressão',
							path: RouteNames.printing,
						},
						{
							name: 'Corte',
							path: RouteNames.cutting,
						},
						{
							name: 'Costura',
							path: RouteNames.seam,
						},
					]}
				/> */}
				{/* <Submenu
					name="Pages"
					icon="fa-file-text"
					itens={[
						{
							name: 'Subitem',
							path: '/404',
						},
					]}
				/> */}
			</ul>
		</aside>
	);
};
