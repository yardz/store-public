export const RouteNames = {
	home: '/',
	login: '/login',
	forgotPassword: '/forgot-password',
	slide: {
		positions: '/slide-positions',
		imagesList: '/slide-images',
		imagesAdd: '/slide-images/add',
		imagesEdit: '/slide-images/edit/:id',
	},
	category: { list: '/category', add: '/category/add', edit: '/category/edit/:id' },
	order: { list: '/order', add: '/order/add', edit: '/order/edit/:id' },
	businessInformation: {
		institutionalPages: {
			list: '/institutional-pages',
			add: '/institutional-pages/add',
			edit: '/institutional-pages/edit/:id',
		},
	},
	user: { list: '/user', add: '/user/add', edit: '/user/edit/:id' },

	// desativadas
	productionProcess: '/production-process',
	tag: '/tag',
	attribute: '/attribute',
	collection: { list: '/collection', add: '/collection/add', edit: '/collection/edit/:id' },
	flag: { list: '/flag', add: '/flag/add', edit: '/flag/edit/:id' },
	measuresTable: { list: '/measuresTable', add: '/measuresTable/add', edit: '/measuresTable/edit/:id' },
	rawMaterial: { list: '/rawMaterial', add: '/rawMaterial/add', edit: '/rawMaterial/edit/:id' },
	coupon: '/coupon',
	notFound: '/404',
	productAdjustment: '/productAdjustment',
	product: { list: '/product/list', add: '/product/add', edit: '/product/edit/:id', sort: '/product/sort' },
	packing: '/packing',
	stamping: '/stamping',
	printing: '/printing',
	cutting: '/cutting',
	seam: '/seam',
};
